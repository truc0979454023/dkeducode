import Image, { StaticImageData } from "next/image";
import React from "react";
import { ImBook } from "react-icons/im";
import { BsStarFill } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

type Props = {
  data: {
    id: number;
    category: { id: string; name: string };
    image: StaticImageData;
    color: string;
    lesson: number;
    star: number;
    rating: number;
    title: string;
    teacher: string;
    oldPrice: number;
    price: number;
  };
};

const CourseItem = ({ data }: Props) => {
  return (
    <div className="rounded-lg flex flex-col bg-white overflow-hidden shadow-md">
      {/* <Link
        href={`/course-detail?id=${data.id}`}
        className="relative cursor-pointer overflow-hidden"
      > */}
      <div className="relative cursor-pointer overflow-hidden">
        <Image
          src={data.image}
          alt=""
          className="rounded-t-lg hover:scale-110 transition-all duration-500"
        />
        <span className="px-4 py-1 rounded-lg bg-red-500 text-white absolute top-3 left-3 text-xs font-medium">
          {data.category.name}
        </span>
      </div>
      {/* </Link> */}
      <div className="p-6 flex justify-between flex-1 flex-col gap-4">
        <div className="flex justify-between">
          {/* <div className="flex items-center gap-2">
            <ImBook />
            <p className="text-sm">{data.lesson} Lesson</p>
          </div> */}
          <div className="flex items-center gap-2">
            <BsStarFill className="text-yellow-500" />
            <p className="text-sm">
              {data.star}({data.rating})
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-lg font-semibold cursor-pointer hover:text-orange-f04c23">
            {data.title}
          </p>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-600 rounded-full"></div>
            <p className="text-sm">{data.teacher}</p>
          </div>
        </div>
        <div className="border-t border-gray-200 flex justify-between items-center pt-5">
          {/* <div className="flex gap-1 items-center">
            <p className={`text-red-500 text-xl font-bold`}>
              {data.price === 0 ? "Free" : "$" + data.price}
            </p>
            <p className="text-gray-500 font-medium text-sm line-through">
              {data.oldPrice === 0 ? "" : "$" + data.oldPrice}
            </p>
          </div> */}
          {/* <div className="flex gap-2 cursor-pointer items-center group">
            <p className="text-sm font-medium group-hover:text-orange-f04c23">
              Know Detail
            </p>
            <FiArrowRight className="font-bold text-xl group-hover:translate-x-1 transition-all " />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
