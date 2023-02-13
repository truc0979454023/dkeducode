import React from "react";
import { FiArrowRight } from "react-icons/fi";

type Props = {};

const Event = (props: Props) => {
  return (
    <div className="rounded-xl shadow-md py-6 px-12 flex flex-col md:flex-row gap-4 items-center z-10 bg-white justify-between lg:w-3/4 transition-all duration-300 hover:border-l-4  hover:border-orange-f04c23">
      <div className="flex flex-col gap-4">
        <p>Jun 14, 2022 | 12:00 am - 2:30 pm | New York</p>
        <h6 className="text-2xl font-semibold cursor-pointer hover:text-orange-f04c23">
          Digital transformation conference
        </h6>
      </div>
      <div className="flex items-center w-full md:w-auto gap-2 group">
        <p className="hover:text-orange-f04c23 cursor-pointer font-medium">
          View More
        </p>
        <FiArrowRight className="font-bold text-xl group-hover:translate-x-1 transition-all " />
      </div>
    </div>
  );
};

export default Event;
