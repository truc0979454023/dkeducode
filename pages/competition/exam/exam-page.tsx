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
  nextQuestion,
  registerForTheExam,
  sendAnswer,
} from "@/pages/api/competition/competition";
import { convertToken, logout } from "@/redux/actions/authAction";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState, useMemo, useRef } from "react";
import Countdown from "react-countdown";
import { useForm } from "react-hook-form";
import { FaRegHandPointRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { saveAs } from "file-saver";
import { GLOBALTYPES } from "@/redux/GlobalTypes";
import Loading from "@/components/common/loading/Loading";
import { setIsTryAgain } from "@/redux/actions/competitionAction";

type Props = {};

const ExamPage = (props: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<any>();

  const formRef = useRef<any>(null);
  const { auth, competition }: any = useSelector<any>((state) => state);
  const token = Cookies.get("token");
  const dispatch = useDispatch<any>();

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [questions, setQuestions] = useState([]);
  const [results, setResults] = useState<any>();
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [loadingQuestion, setLoadingQuestion] = useState(false);

  useEffect(() => {
    dispatch(convertToken(token));
  }, [token, dispatch]);

  useEffect(() => {
    if (!auth?.user) {
      router.push("/competition");
    }
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoadingQuestion(true);
        const res = await getListQuestion(
          competition.codeID || Number(localStorage.getItem("competitionID")),
          competition.examID || Number(localStorage.getItem("examID"))
        );
        setLoadingQuestion(false);
        setQuestions(res.data.data);
      } catch (error) {
        setLoadingQuestion(false);
        console.log(error);
      }
    }
    fetchData();
  }, [competition]);

  const handleDownload = async () => {
    try {
      const res = await getDownloadFileExam(
        competition.codeID || Number(localStorage.getItem("competitionID")),
        page
      );
      const url = window.URL.createObjectURL(new Blob([res.data]));

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "question.xlsx");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {}
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
          examID:
            competition.examID || Number(localStorage.getItem("competitionID")),
          codeID: competition.codeID || Number(localStorage.getItem("examID")),
        },
        token
      );
      setLoading(false);
      setResults(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleContinue = async () => {
    try {
      setIsSubmit(false);
      setResults(null);
      setPage(page + 1);
      const res = await nextQuestion(
        {
          CandidatesID: auth.user.CandidatesID,

          examID:
            competition.examID || Number(localStorage.getItem("competitionID")),
          codeID: competition.codeID || Number(localStorage.getItem("examID")),
        },
        token
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleEnd = () => {
    localStorage.removeItem("competitionID");
    localStorage.removeItem("examID");
    localStorage.removeItem("isTryAgain");
    Cookies.remove("token");
    router.push("/competition");
    dispatch({
      type: GLOBALTYPES.AUTH,
      payload: null,
    });
    dispatch({
      type: GLOBALTYPES.TRY_AGAIN,
      payload: false,
    });
  };

  const handleTryAgain = async () => {
    try {
      const res = registerForTheExam(
        competition.examID || Number(localStorage.getItem("competitionID")),
        auth.user.CandidatesID,
        token
      );
      dispatch(setIsTryAgain(true));
      router.push(
        `/competition/login?competitionId=${
          competition.examID || Number(localStorage.getItem("competitionID"))
        }`
      );
    } catch (error) {
      console.log(error);
    }
  };

  const renderer = ({ minutes, seconds }: any) => {
    return (
      <span>
        {minutes}:{seconds}
      </span>
    );
  };

  return (
    <div className="fixed flex justify-center items-center inset-0 bg-[rgba(0,0,0,.5)] z-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        ref={formRef}
        className="relative bg-white w-[95%] lg:w-5/6 h-[95%] lg:h-5/6 rounded-lg overflow-hidden px-6 md:px-32  flex flex-col items-center justify-center  "
      >
        {loadingQuestion ? (
          <Loading size={240} />
        ) : (
          <>
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
                    <Countdown
                      date={Date.now() + 60000}
                      renderer={renderer}
                      key={page}
                      onComplete={handleSubmit(onSubmit)}
                    />
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 flex pt-3">
                <div className="flex flex-col items-end">
                  <p className="text-red-500 italic hidden md:block ">
                    * Tải file Excel thực hành tại đây
                  </p>
                  <FaRegHandPointRight className="text-2xl" />
                </div>
                <div onClick={handleDownload} className=" cursor-pointer">
                  <Image src={excel} alt="" className="h-20 w-20" />
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col gap-8 -translate-y-12 pt-6  ">
              <div className="flex justify-center ml-28 md:ml-0">
                <p className="text-base lg:text-xl">
                  Điền kết quả đúng vào ô tương ứng với câu hỏi trong file excel
                  thực hành
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
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
                        onKeyPress={(e) =>
                          e.key === "Enter" && e.preventDefault()
                        }
                      />
                      {results && (
                        <>
                          {results?.result?.find(
                            (data: any) =>
                              data.q_id === question.q_id &&
                              data.result === true
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
                        <p className="text-4xl lg:text-7xl text-green-700 font-signika">
                          Congratulations!
                        </p>
                        <p className="text-base lg:text-xl">
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
                    <div className="absolute -bottom-32 flex justify-end items-center w-full gap-8 z-50">
                      <div className="flex-1 flex flex-col justify-end items-end ">
                        <p className="text-3xl lg:text-7xl text-red-500 font-signika whitespace-nowrap">
                          See you next time!
                        </p>
                        <p className="text-base lg:text-xl">
                          Cảm ơn bạn đã tham gia thi đấu.
                        </p>
                      </div>
                      <Button
                        onClick={handleEnd}
                        type="button"
                        className=" text-white bg-blue-500 after:bg-blue-500"
                      >
                        Kết thúc
                      </Button>

                      <Button
                        onClick={handleTryAgain}
                        type="button"
                        className=" text-white bg-blue-500 after:bg-blue-500"
                      >
                        Thi lại
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
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end">
              <div>
                {" "}
                <Image src={logo} alt="logo" className="h-32 w-32" />
              </div>
              <div className=" bg-orange-f04c23 skew-x-[-25deg] translate-x-3 text-base font-semibold p-8 text-white flex justify-center items-start h-8">
                Design by team KD Educode
              </div>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default ExamPage;
