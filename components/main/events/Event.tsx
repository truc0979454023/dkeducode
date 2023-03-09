import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import "moment/locale/vi";

type Props = {
  timeStart?: string;
  timeEnd?: string;
  address?: string;
  title?: string;
  link?: string;
  image?: any;
};

const Event = ({
  timeStart,
  timeEnd,
  address,
  title,
  link = "",
  image,
}: Props) => {
  return (
    <div className="rounded-xl shadow-md py-6 px-12 flex flex-col  gap-4 items-center z-10 bg-white justify-between lg:w-3/4 transition-all duration-300 hover:border-l-4  hover:border-orange-f04c23">
      <div className="flex w-full">
        <div className="flex flex-col gap-4 w-full">
          <p>
            {moment(timeStart).locale("vi").format("LLLL")} {timeEnd && " - "}
            {timeEnd && moment(timeEnd).locale("vi").format("LLLL")} | {address}
          </p>
          <div className="flex w-full justify-between">
            <Link href={`/event/${link}`}>
              <h6 className="text-2xl font-semibold cursor-pointer hover:text-orange-f04c23">
                {title}
              </h6>
            </Link>
            <div className="items-center hidden md:flex w-full md:w-auto gap-2 group">
              <Link
                href={`/event/${link}`}
                className="hover:text-orange-f04c23 cursor-pointer font-medium"
              >
                Xem thêm
              </Link>
              <FiArrowRight className="font-bold text-xl group-hover:translate-x-1 transition-all " />
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg overflow-hidden">
        <Image
          src={`data:image/jpeg;base64, ${image}`}
          alt=""
          className="w-full"
          width={140}
          height={140}
        />
      </div>
    </div>
  );
};

export default Event;
