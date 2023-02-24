import Input from "@/components/common/Input";
import React, { useState, useLayoutEffect, useEffect } from "react";
import excel from "@/assets/images/excel.jpg";
import Image from "next/image";
import { FaRegHandPointRight } from "react-icons/fa";
import oclock from "@/assets/images/clock.png";
import logo from "@/assets/images/logo.png";
import tick from "@/assets/images/tick.png";
import cand from "@/assets/images/cand.png";
import Button from "@/components/common/Button";
import Countdown from "react-countdown";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { sendAnswer } from "@/pages/api/competition/competition";
import Cookies from "js-cookie";
import { convertToken } from "@/redux/actions/authAction";

type Props = {};

const ExamPage = (props: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<any>();

  const { auth }: any = useSelector<any>((state) => state);
  const token = Cookies.get("token");
  const dispatch = useDispatch<any>();

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState<number>(Number(router.query.page) || 1);

  useEffect(() => {
    dispatch(convertToken(token));
  }, [token, dispatch]);

  const Completionist = () => <span>Hết giờ!</span>;
  const renderer = ({ minutes, seconds, completed }: any) => {
    if (completed) {
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

  const onSubmit = async (data: any) => {
    // const dataSend = data.reduce(
    //   (array: any, d: any, index: number) =>
    //     (array = [...array, { q_id: Number(d), answer: d }]),
    //   []
    // );

    // console.log(dataSend);
    try {
      //   await sendAnswer(
      //     {
      //       CandidatesID: auth.user.CandidatesID,
      //       Answer: [
      //         {
      //           q_id: 0,
      //           answer: "string",
      //         },
      //       ],
      //       examID: 0,
      //       codeID: 0,
      //     },
      //     token
      //   );
    } catch (error) {}
    // if (page < 3) {
    //   setPage((page) => (page += 1));
    // }
    // router.push(`/competition/exam/exam-page?page=${page}`);
  };
  return (
    <div className="fixed flex justify-center items-center inset-0 bg-[rgba(0,0,0,.5)] z-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative bg-white w-5/6 h-5/6 rounded-lg overflow-hidden px-32  flex flex-col items-center justify-center "
      >
        {/* header */}
        <div className="absolute top-0 left-0 right-0 flex justify-between w-full ">
          <div className="absolute top-0 left-0 ">
            <div className="bg-orange-f04c23 skew-x-[-25deg] -translate-x-4 w-[180px] px-8 py-4 text-white flex items-center">
              <div className="bg-transparent text-xl font-semibold text-white">
                Trang 1
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
            <div className="flex flex-col items-end cursor-pointer">
              <p className="text-red-500 italic">
                * Tải file Excel thực hành tại đây
              </p>
              <FaRegHandPointRight className="text-2xl" />
            </div>
            <Image src={excel} alt="" className="h-16 w-16" />
          </div>
        </div>
        {/* body */}
        <div className="w-full flex flex-col gap-8 -translate-y-12">
          <div className="flex justify-center">
            <p className="text-xl">
              Điền kết quả đúng vào ô tương ứng với câu hỏi trong file excel
              thực hành
            </p>
          </div>

          <div className="grid grid-cols-4 gap-10">
            {[...Array(10)].map((_, idx) => (
              <div key={idx}>
                <div className="relative">
                  <Input
                    size="lg"
                    readOnly={loading}
                    type={"text"}
                    label={`Câu ${idx + 1 + (page - 1) * 10}`}
                    register={register(`${idx + 1 + (page - 1) * 10}`)}
                    id={`${idx + 1 + (page - 1) * 10}`}
                  />

                  {
                    <>
                      <Image
                        src={tick}
                        alt=""
                        className="h-14 w-14 absolute right-0 top-1/2  -translate-y-1/2"
                      />
                      {/* <Image
                        src={cand}
                        alt=""
                        className="h-14 w-14 absolute right-0 top-1/2  -translate-y-1/2"
                      /> */}
                    </>
                  }
                </div>
              </div>
            ))}
          </div>

          <div className="absolute -bottom-28 flex justify-end items-center w-full gap-8">
            <div className="flex-1 flex flex-col justify-end items-end ">
              <p className="text-7xl text-green-700 font-signika">
                Congratulations!
              </p>
              <p className="text-xl">
                Chúc mừng thí sinh , mời bạn làm tiếp trang 2
              </p>
            </div>
            <Button>Tiếp tục</Button>
          </div>

          {/* <div className="absolute -bottom-32 flex justify-end items-center w-full gap-8">
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
            <Button>Thoát</Button>
          </div> */}
        </div>

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
      </form>
    </div>
  );
};

export default ExamPage;
