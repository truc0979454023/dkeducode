import oclock from "@/assets/images/clock.png";
import excel from "@/assets/images/excel.jpg";
import logo from "@/assets/images/logo.png";
import tick from "@/assets/images/tick.png";
import cand from "@/assets/images/cand.png";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import SVGLoading from "@/components/common/loading/SVGLoading";
import {
  getDownloadFileExam,
  getListQuestion,
  sendAnswer,
} from "@/pages/api/competition/competition";
import { convertToken } from "@/redux/actions/authAction";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState, useMemo } from "react";
import Countdown from "react-countdown";
import { useForm } from "react-hook-form";
import { FaRegHandPointRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const ExamPage = (props: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<any>();

  const { auth, competition }: any = useSelector<any>((state) => state);
  const token = Cookies.get("token");
  const dispatch = useDispatch<any>();

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState<number>(Number(router.query.page) || 1);
  const [questions, setQuestions] = useState([]);
  const [results, setResults] = useState<any>();
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  useEffect(() => {
    dispatch(convertToken(token));
  }, [token, dispatch]);

  useEffect(() => {
    if (!auth.user) {
      router.push("/competition/login");
    }
  }, [auth, router]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getListQuestion(
          competition.codeID || Number(localStorage.getItem("competitionID")),
          competition.examID || Number(localStorage.getItem("examID"))
        );
        setQuestions(res.data.data);
      } catch (error) {
        console.log("ERROR");
      }
    }
    fetchData();
  }, [competition]);

  const handleDownload = async () => {
    try {
      const res = await getDownloadFileExam(
        competition.codeID || Number(localStorage.getItem("competitionID")),
        competition.examID || Number(localStorage.getItem("examID"))
      );
      // const url = window.URL.createObjectURL(new Blob([res.data]));

      const blob = await res.data.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `question_kdeducode.xlsx`);
      document.body.appendChild(link);
      link.click();

      // URL.revokeObjectURL(url);
    } catch (error) {}
  };

  const Completionist = () => <span>Hết giờ!</span>;
  const renderer = ({ minutes, seconds, completed }: any) => {
    if (completed) {
      // onSubmit();
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span>
          {minutes}:{seconds}
        </span>
      );
    }
  };

  const currentQuestion = useMemo(() => {
    return questions.slice((page - 1) * 10, page * 10);
  }, [page, questions]);

  const onSubmit = async (data: any) => {
    const dataSend = Object.entries(data)
      .reduce(
        (array: any, data) =>
          (array = [...array, { q_id: Number(data[0]), answer: data[1] }]),
        []
      )
      .slice((page - 1) * 10, page * 10);
    setIsSubmit(true);
    try {
      setLoading(true);
      const res = await sendAnswer(
        {
          CandidatesID: auth.user.CandidatesID,
          Answer: dataSend,
          examID: competition.examID || Number(localStorage.getItem("examID")),
          codeID:
            competition.codeID || Number(localStorage.getItem("competitionID")),
        },
        token
      );
      setLoading(false);
      setResults(res.data.data);
    } catch (error) {}
  };

  const handleContinue = () => {
    setIsSubmit(false);
    setPage(page + 1);
    setResults(null);
  };

  const handleEnd = () => {
    router.push("/");
  };

  return (
    <div className="fixed flex justify-center items-center inset-0 bg-[rgba(0,0,0,.5)] z-50">
      <div className="relative bg-white w-5/6 h-5/6 rounded-lg overflow-hidden px-32  flex flex-col items-center justify-center ">
        {/* header */}
        <div className="absolute top-0 left-0 right-0 flex justify-between w-full ">
          <div className="absolute top-0 left-0 ">
            <div className="bg-orange-f04c23 skew-x-[-25deg] -translate-x-4 w-[180px] px-8 py-4 text-white flex items-center">
              <div className="bg-transparent text-xl font-semibold text-white">
                Trang {page}
              </div>
            </div>
            <div className="relative pl-4 h-32 w-32 ">
              <Image src={oclock} alt="" className="h-full object-cover " />
              <div className="text-xl absolute top-1/2 left-1/2  -translate-x-3">
                <Countdown date={Date.now() + 600000} renderer={renderer}>
                  <Completionist />
                </Countdown>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 flex pt-3">
            <div className="flex flex-col items-end">
              <p className="text-red-500 italic">
                * Tải file Excel thực hành tại đây
              </p>
              <FaRegHandPointRight className="text-2xl" />
            </div>
            <div onClick={handleDownload} className=" cursor-pointer">
              <Image src={excel} alt="" className="h-16 w-16" />
            </div>
          </div>
        </div>
        {/* body */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-8 -translate-y-12"
        >
          <div className="flex justify-center">
            <p className="text-xl">
              Điền kết quả đúng vào ô tương ứng với câu hỏi trong file excel
              thực hành
            </p>
          </div>

          <div className="grid grid-cols-4 gap-10">
            {currentQuestion?.map((question: any) => (
              <div key={question.q_id}>
                <div className="relative">
                  <Input
                    size="lg"
                    readOnly={loading}
                    type={"text"}
                    label={question.q_name}
                    register={register(question.q_id.toString())}
                    id={question.q_id}
                  />
                  {results && (
                    <>
                      {results?.result?.find(
                        (data: any) =>
                          data.q_id === question.q_id && data.result === true
                      ) ? (
                        <Image
                          src={tick}
                          alt=""
                          className="h-14 w-14 absolute right-0 top-1/2  -translate-y-1/2"
                        />
                      ) : (
                        <Image
                          src={cand}
                          alt=""
                          className="h-14 w-14 absolute right-0 top-1/2  -translate-y-1/2"
                        />
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {results && (
            <>
              {results.count >= 8 ? (
                <div className="absolute -bottom-28 flex justify-end items-center w-full gap-8">
                  <div className="flex-1 flex flex-col justify-end items-end ">
                    <p className="text-7xl text-green-700 font-signika">
                      Congratulations!
                    </p>
                    <p className="text-xl">
                      {page < Math.floor(questions.length / 10)
                        ? `Chúc mừng thí sinh , mời bạn làm tiếp trang ${
                            page + 1
                          }`
                        : "Chúc mừng bạn đã hoàn thành bài thi."}
                    </p>
                  </div>
                  {page < Math.floor(questions.length / 10) ? (
                    <Button
                      onClick={handleContinue}
                      type="button"
                      className=" text-white bg-blue-500 after:bg-blue-500"
                    >
                      Tiếp tục
                    </Button>
                  ) : (
                    <Button
                      onClick={handleEnd}
                      type="button"
                      className=" text-white bg-blue-500 after:bg-blue-500"
                    >
                      Kết thúc
                    </Button>
                  )}
                </div>
              ) : (
                <div className="absolute -bottom-32 flex justify-end items-center w-full gap-8">
                  <div className="flex-1 flex flex-col justify-end items-end ">
                    <p className="text-7xl text-red-500 font-signika">
                      See you next time!
                    </p>
                    <p className="text-xl">
                      Cảm ơn bạn đã tham gia thi đấu.
                      <br />
                      Chúc bạn bình tĩnh hơn cho mùa 2.
                    </p>
                  </div>
                  <Button
                    onClick={handleEnd}
                    type="button"
                    className=" text-white bg-blue-500 after:bg-blue-500"
                  >
                    Kết thúc
                  </Button>
                </div>
              )}
            </>
          )}
          {!isSubmit && (
            <Button
              className={` text-white  ${
                loading ? "bg-gray-500" : "bg-blue-500 after:bg-blue-500"
              }`}
            >
              {loading && <SVGLoading size={20} />}
              Nộp bài
            </Button>
          )}
        </form>

        {/* footer */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end">
          <div>
            {" "}
            <Image src={logo} alt="logo" className="h-32 w-32" />
          </div>
          <div className=" bg-orange-f04c23 skew-x-[-25deg] translate-x-3 text-base font-semibold p-8 text-white flex justify-center items-start h-8">
            Design by team DK Educode
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamPage;
