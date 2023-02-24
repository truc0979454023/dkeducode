import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import thumbnail from "@/assets/images/excel-thumbnail.jpg";

type Props = {};

const Event = (props: Props) => {
  return (
    <div className="rounded-xl shadow-md py-6 px-12 flex flex-col  gap-4 items-center z-10 bg-white justify-between lg:w-3/4 transition-all duration-300 hover:border-l-4  hover:border-orange-f04c23">
      <div className="flex">
        <div className="flex flex-col gap-4">
          <p>
            Ngày 19 tháng 3 năm 2023 | 8:00 am | Nhà văn hóa sinh viên ĐHQG TP
            Hồ Chí Minh Esport Center Esport Center{" "}
          </p>
          <div className="flex justify-between">
            <Link href={`/event/${"cuoc-thi-tim-kiem-tai-nang-excel"}`}>
              <h6 className="text-2xl font-semibold cursor-pointer hover:text-orange-f04c23">
                Cuộc thi &#34;Tìm kiếm tài năng Excel &#34;
              </h6>
            </Link>
            <div className="flex items-center w-full md:w-auto gap-2 group">
              <Link
                href={`/event/${"cuoc-thi-tim-kiem-tai-nang-excel"}`}
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
        <Image src={thumbnail} alt="" />
      </div>
    </div>
  );
};

export default Event;
