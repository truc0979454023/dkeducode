import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import Button from "../../common/Button";

type Props = {
  data: any;
};

const Price = ({ data }: Props) => {
  return (
    <div className="flex-1 flex flex-col gap-10 relative bg-gray-edeef3 rounded-md p-8">
      {data.tag && (
        <div className="absolute top-2 -right-3 bg-red-500 text-white px-2 py-1 text-sm rounded-t-md rounded-bl-md">
          <div className="absolute -bottom-3 -right-0 w-0 h-0 border-[6px] border-r-transparent border-b-transparent border-l-red-600 border-t-red-600"></div>
          <p>{data.tag && "Best Value"}</p>
        </div>
      )}
      <div className="flex flex-col gap-4 pb-8 border-b border-gray-300">
        <h4 className="text-2xl font-bold">{data.type}</h4>
        <p className="text-sm">Hoàn hảo cho các nhóm nhỏ</p>
        <p>
          <span className="text-6xl font-bold">{data.price}</span>.Tr / Tháng
        </p>
      </div>
      <ul className="flex flex-col gap-4">
        {data.option.map((d: any, index: number) => (
          <li key={index} className="flex items-center gap-2 group">
            <div className="h-5 w-5 rounded-full flex items-center justify-center p-1 bg-green-200 group-hover:bg-green-700 ">
              <AiOutlineCheck className="text-2xl text-green-700 font-bold group-hover:text-green-200" />
            </div>
            <p className="text-base group-hover:text-green-700">{d}</p>
          </li>
        ))}
      </ul>
      {/* <Button className="bg-blue-500 text-white after:bg-blue-500">
        {" "}
        Bắt đầu
      </Button> */}
    </div>
  );
};

export default Price;
