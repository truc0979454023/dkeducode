import Button from "@/components/common/Button";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { convertToken } from "@/redux/actions/authAction";
import Cookies from "js-cookie";
import {
  getListExamType,
  registerForTheExam,
  startCompetition,
} from "@/pages/api/competition/competition";
import { setExamID } from "@/redux/actions/competitionAction";
import { toast } from "react-toastify";
import SVGLoading from "@/components/common/loading/SVGLoading";
import Image from "next/image";
import qr_pvk from "@/assets/images/QR-PVK-bank.png";
import qr_ptvh from "@/assets/images/QR-PTVH-bank.png";
import momo_ptvh from "@/assets/images/momo-tag.png";
import Input from "@/components/common/Input";
import { useForm } from "react-hook-form";

type Props = {};
type Inputs = {
  candidateId: string;
};

const Exam = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

  const router = useRouter();
  const { auth, competition }: any = useSelector<any>((state) => state);
  const token = Cookies.get("token");
  const dispatch = useDispatch<any>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(convertToken(token));
  }, [token, dispatch]);

  useEffect(() => {
    if (!auth?.user) {
      router.push("/competition/login");
    }
  }, [auth, router]);

  useEffect(() => {
    if (!competition.examID && !localStorage.getItem("competitionID")) {
      router.push("/competition");
    }
  }, [competition.examID, router]);

  const isTryAgain = useMemo(() => {
    if (typeof window !== "undefined") {
      return Boolean(localStorage.getItem("isTryAgain"));
    } else return false;
  }, []);

  function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const handleStartExam = async () => {
    try {
      setLoading(true);

      const res = await getListExamType(
        competition.examID || Number(localStorage.getItem("competitionID"))
      );

      setLoading(false);
      dispatch(
        setExamID(
          res.data.data[getRandomInt(0, res.data.data.length - 1)].codeID
        )
      );
      localStorage.setItem(
        "examID",
        res.data.data[getRandomInt(0, res.data.data.length - 1)].codeID
      );

      // const res1 = await startCompetition({
      //   CandidatesID:
      //     competition.isTryAgain || isTryAgain
      //       ? watch("candidateId")
      //       : auth.user.examnumber,
      //   examID:
      //     competition.examID || Number(localStorage.getItem("competitionID")),
      //   codeID: competition.codeID || Number(localStorage.getItem("examID")),
      // });

      const res1 = await startCompetition(
        competition.isTryAgain || isTryAgain
          ? watch("candidateId")
          : auth.user.examnumber,
        competition.codeID || Number(localStorage.getItem("examID"))
      );

      if (res1.data.status_code === 204) {
        return toast.error(res1.data.detail, {
          position: "top-center",
          autoClose: 1500,
        });
      }
      router.push("/competition/exam/exam-page");
    } catch (error) {
      console.log(error);
      setLoading(false);
      return toast.error("Xảy ra lỗi! Thử lại sau", {
        position: "top-center",
        autoClose: 1500,
      });
    }
  };

  return (
    <div className="mt-[170px] bg-gray-edeef3 min-h-screen flex items-center">
      <Head>
        <title>Exam</title>
      </Head>
      <div className="max-w-screen-xl h-full m-auto w-[95%] flex flex-col gap-16 items-center justify-center pb-32">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[32px] uppercase font-medium text-center">
            Chào mừng bạn đã đến với cuộc thi &#34;Tìm kiếm tài năng Excel&#34;
          </h1>
          <h4 className="flex text-2xl font-medium">
            {" "}
            <p>&#34;Be a warrior&#34;</p> - Sân chơi dành cho các chiến binh
          </h4>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-3xl font-medium">Thông tin của bạn</h2>
          <div>
            <div className="flex gap-2 text-lg font-medium">
              <span>Mã số thí sinh:</span>
              <p>{auth?.user?.CandidatesID}</p>
            </div>

            <div className="flex gap-2 text-lg font-medium">
              <span>Họ và tên:</span>
              <p>{auth?.user?.e_name}</p>
            </div>

            <div className="flex gap-2 text-lg font-medium">
              <span>Email:</span>
              <p>{auth?.user?.e_email}</p>
            </div>

            <div className="flex gap-2 text-lg font-medium">
              <span>Số điện thoại:</span>
              <p>{auth?.user?.e_phone}</p>
            </div>

            <div className="flex gap-2 text-lg font-medium">
              <span>Trường:</span>
              <p>{auth?.user?.e_school}</p>
            </div>

            <div className="flex gap-2 text-lg font-medium">
              <span>Chuyên ngành:</span>
              <p>{auth?.user?.e_specialized}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div
            className={`w-full ${
              competition.isTryAgain || isTryAgain ? "block" : "hidden"
            }`}
          >
            <Input
              size="lg"
              required={true}
              readOnly={loading}
              label="Mã dự thi"
              register={register("candidateId", {
                required: "Vui lòng nhập mã dự thi",
              })}
              id="candidateId"
            />
            {errors.candidateId?.message && (
              <p className="text-red-500 p-0 text-sm">
                {errors.candidateId?.message}
              </p>
            )}
          </div>
          <div className="text-2xl">
            <Button
              disabled={loading}
              className={`font-medium text-white ${
                loading ? "bg-gray-500" : "bg-blue-600"
              } `}
              onClick={handleStartExam}
            >
              {loading && <SVGLoading size={20} />} BẮT ĐẦU
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center  h-full gap-2">
          <p>
            Nếu bạn chưa đóng lệ phí thi{" "}
            <span className="text-red-500">(50.000VND / lần) </span>vui lòng
            chuyển khoản với nội dung: Mã số thí sinh + Số điện thoại đăng ký
            thi
          </p>
          <p>Thông tin chuyển khoản:</p>
          <div className="flex items-center h-full gap-4 flex-col md:flex-row">
            <div className="flex items-center gap-2 flex-col md:flex-row ">
              <Image src={qr_pvk} alt="" className="w-28 h-28" />
              <div className="text-center md:text-start">
                <p>Ngân hàng: VPBank - Việt Nam Thịnh Vượng</p>
                <p>STK: 112200541</p>
                <p>Người thụ hưởng: Phạm Văn Kiểu</p>
              </div>
            </div>
            <div className="h-[2px] md:h-[100px] w-full md:w-[2px] bg-orange-f04c23"></div>
            <div className="flex gap-2">
              <Image src={qr_ptvh} alt="" className="w-28 h-28" />
              <Image src={momo_ptvh} alt="" className="w-36 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exam;
