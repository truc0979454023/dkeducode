import Button from "@/components/common/Button";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { convertToken } from "@/redux/actions/authAction";
import Cookies from "js-cookie";
import { getListExamType } from "@/pages/api/competition/competition";
import { setExamID } from "@/redux/actions/competitionAction";

type Props = {};

const Exam = (props: Props) => {
  const router = useRouter();
  const { auth, competition }: any = useSelector<any>((state) => state);
  const token = Cookies.get("token");
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(convertToken(token));
  }, [token, dispatch]);

  useEffect(() => {
    if (!auth?.user) {
      router.push("/competition/login");
    }
  }, [auth, router]);

  function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const handleStartExam = async () => {
    try {
      const res = await getListExamType(
        competition.examID || Number(localStorage.getItem("competitionID"))
      );

      dispatch(
        setExamID(
          res.data.data[getRandomInt(0, res.data.data.length - 1)].codeID
        )
      );
      localStorage.setItem(
        "examID",
        res.data.data[getRandomInt(0, res.data.data.length - 1)].codeID
      );
      router.push("/competition/exam/exam-page");
    } catch (error) {
      console.log("lỗi");
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
        <div className="text-2xl">
          <Button onClick={handleStartExam}>BẮT ĐẦU</Button>
        </div>
      </div>
    </div>
  );
};

export default Exam;
