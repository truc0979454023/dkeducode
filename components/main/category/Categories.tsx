import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Category from "./Category";

import banner_img_1 from "@/assets/images/banner-img-1.png";
import banner_img_2 from "@/assets/images/banner-img-2.png";
import ArtDesign from "@/assets/svg/ArtDesign";
import DataScience from "@/assets/svg/DataScience";
import Finance from "@/assets/svg/Finance";
import HomeSVG from "@/assets/svg/HomeSVG";
import LifeStyle from "@/assets/svg/LifeStyle";
import MaketingSVG from "@/assets/svg/MaketingSVG";
import Image from "next/image";
import Button from "../../common/Button";

type Props = {};

const Categories = (props: Props) => {
  const data = [
    {
      icons: <ArtDesign />,
      name: "Excel cơ bản",
      content: "Fun & Challenging",
    },
    {
      icons: <DataScience />,
      name: "Excel nâng cao",
      content: "Data is Everything",
    },
    {
      icons: <Finance />,
      name: "Master Excel",
      content: "Fun & Challenging",
    },
    {
      icons: <HomeSVG />,
      name: "Excel 365",
      content: "Data is Everything",
    },
    {
      icons: <LifeStyle />,
      name: "VBA tự động hóa Excel  ",
      content: "New Skills, New You",
    },
    {
      icons: <MaketingSVG />,
      name: "VBA Master",
      content: "Improve your business",
    },
  ];

  return (
    <section className="min-h-screen flex items-center py-32 bg-white">
      <div className="max-w-screen-xl h-full m-auto w-[95%] flex flex-col gap-10 items-center justify-center">
        <div className="flex flex-col md:flex-row justify-between w-full md:items-center gap-4 md:gap-0">
          <h3 className="text-[32px] md:text-[36px] leading-[1] font-bold">
            Khám phá
            <br />
            Các khóa học nổi tiếng của chúng tôi
          </h3>
          <div className="flex gap-2 items-center group">
            <p className="group-hover:text-orange-f04c23 cursor-pointer font-medium">
              Xem tất cả các khóa học
            </p>
            <FiArrowRight className="font-bold text-xl group-hover:translate-x-1 transition-all " />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full ">
          {data.map((d) => (
            <Category
              key={d.name}
              icons={d.icons}
              name={d.name}
              content={d.content}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-10">
          <div className="relative bg-banner-1 w-full h-full rounded-lg bg-no-repeat bg-cover bg-center bg-fixed px-10 py-12">
            <div className="flex justify-between items-center">
              <div className="flex flex-col z-10 gap-2 w-full lg:w-2/3 sm:w-2/3 md:w-full relative">
                <span className="py-1 px-4 w-max bg-red-500 rounded-2xl text-white">
                  Free
                </span>
                <h2 className="font-bold text-2xl hover:text-orange-f04c23">
                  Germany Foundation Document
                </h2>
                <div className="mt-6">
                  <Button>View Course</Button>
                </div>
              </div>
              <Image
                alt="banner-img-1"
                src={banner_img_1}
                className="h-full hidden sm:block md:hidden lg:block object-contain absolute z-0 right-0 top-4"
              />
            </div>
          </div>

          <div className="relative bg-banner-2 w-full h-full rounded-lg bg-no-repeat bg-cover bg-center bg-fixed px-10 py-12">
            <div className="flex justify-between items-center ">
              <div className="flex flex-col gap-2 z-10 w-full lg:w-2/3 relative">
                <span className="py-1 px-4 w-max bg-green-500 rounded-2xl text-white">
                  New
                </span>
                <h2 className="font-bold text-2xl hover:text-orange-f04c23">
                  Online Courses <br /> From Eduka University
                </h2>
                <div className="mt-6">
                  <Button>Find Out More</Button>
                </div>
              </div>
              <Image
                alt="banner-img-1"
                src={banner_img_2}
                className="h-full hidden sm:block md:hidden lg:block  object-contain absolute z-0 right-0 top-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
