import HomeSVG from "@/assets/svg/HomeSVG";
import React from "react";

type Props = {
  icons: React.ReactNode;
  name: string;
  content: string;
};

const Category = ({ icons, name, content }: Props) => {
  return (
    <div className="flex items-center gap-8 bg-white border-2 border-gray-300 rounded-lg p-4 group hover:bg-orange-f04c23">
      <div className="w-10 h-10">{icons}</div>
      <div>
        <p className="font-bold text-lg group-hover:text-white">{name}</p>
        <p className="text-sm font-medium group-hover:text-white">{content}</p>
      </div>
    </div>
  );
};

export default Category;
