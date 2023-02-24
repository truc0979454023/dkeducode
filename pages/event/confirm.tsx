import Head from "next/head";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import excel from "@/assets/images/excel.png";
import Link from "next/link";
import { useSelector } from "react-redux";

type Props = {};

const Confirm = (props: Props) => {
  const { feature }: any = useSelector<any>((state) => state);
  const [id, setId] = useState();

  useEffect(() => {
    if (Object.keys(feature).length > 0) {
      setId(feature);
    } else setId(JSON.parse(localStorage.getItem("id") as string));
  }, [feature]);

  return (
    <>
      <div className="mt-[170px] bg-gray-edeef3 min-h-screen">
        <Head>
          <title>Register Event</title>
        </Head>
        <div className="max-w-screen-xl h-full mx-auto w-[95%] flex flex-col gap-16 items-center justify-start pb-32">
          <div className="flex md:flex-row flex-col justify-center items-center">
            <Image src={excel} alt="" className="w-52 h-52" />
            <div className="font-signika text-green-600 text-5xl md:text-7xl lg:text-8xl text-center">
              Welcome!<p>&#34;Excel Talent&#34;</p>
            </div>
          </div>
          <div className=" flex flex-col justify-center gap-2">
            <p className="text-3xl font-medium text-center">
              Chúc mừng bạn đã đăng ký thành công với mã số báo thi
            </p>
            <span className="px-10 py-4 text-center font-medium text-3xl bg-gray-100">
              {id}
            </span>
          </div>

          <div>
            <p className="text-xl text-center">
              Mời bạn tham gia cùng các chuyên gia ôn luyện Excel để trở thành
              Quán quân nhé
            </p>
            <p className="text-xl">
              Zalo:
              <Link
                href={"https://zalo.me/g/vmupyt831"}
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                https://zalo.me/g/vmupyt831
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirm;
