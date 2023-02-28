import Head from "next/head";
import React from "react";
import cafe_image from "@/assets/images/cafe-event.jpg";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const CafeExcel = (props: Props) => {
  return (
    <div className="mt-[170px] bg-gray-edeef3 min-h-screen">
      <Head>
        <title>Event</title>
      </Head>
      <div className="max-w-screen-xl h-full mx-auto w-[95%] flex flex-col gap-16 items-center justify-start pb-32">
        <div className="relative">
          <div className="lg:h-full w-full flex md:flex-row flex-col-reverse justify-center items-start gap-4">
            <Image src={cafe_image} alt="" />
          </div>
          <Link
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLScme9H8JPTGE8iiN2TGZnf-XU611DfA-p4CE3UcZPJHAZw22A/viewform?embedded=true"
            }
            className="bg-blue-007aff px-6 py-6 rounded-full text-white  text-2xl absolute right-[2%] bottom-[2%]"
          >
            Đăng ký ngay
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CafeExcel;
