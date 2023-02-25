import Button from "@/components/common/Button";
import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

type Props = {};

const MainHeader = ({}: Props) => {
  const [scrollY, setScrollY] = useState(0);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function (event) {
      setScrollY(this.scrollY);
    });
  }, []);

  return (
    <header
      className={`w-screen flex items-center justify-between z-30 transition-all duration-300 fixed left-0 right-0 ${
        scrollY > 20
          ? "top-0 shadow-customize bg-white h-[86px]"
          : "top-[52px] bg-gray-edeef3 h-[118px]"
      }`}
    >
      <div className="max-w-screen-xl m-auto w-[95%] flex items-center z-50 justify-between ">
        <Link href={"/"} className="cursor-pointer h-24 w-24">
          <Image src={logo} alt="DKeducode" className="h-full object-contain" />
        </Link>
        <div className="flex items-center gap-10">
          <ul className="hidden lg:flex items-center capitalize font-semibold text-md gap-10 cursor-pointer ">
            <Link href={"/"}>
              <li className="hover:text-orange-f04c23">Trang chủ</li>
            </Link>
            <Link href={"/course"}>
              <li className="hover:text-orange-f04c23">Khóa học</li>
            </Link>
            {/* <li className="hover:text-orange-f04c23">Blog</li> */}
            <Link href={"/event"}>
              <li className="hover:text-orange-f04c23">Sự kiện</li>
            </Link>
            {/* <Link href={"/competition"}>
              <li className="hover:text-orange-f04c23">Thi đấu</li>
            </Link> */}
          </ul>
          <div
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            className="h-12 w-12 bg-orange-f04c23 flex lg:hidden items-center justify-center text-white cursor-pointer"
          >
            <GiHamburgerMenu />
            <div
              className={` ${
                isOpenMenu ? "fixed" : "hidden"
              } inset-0 w-screen z-50 flex justify-end bg-[rgba(0,0,0,0.5)] `}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-gray-edeef3 w-3/4 sm:w-1/2 relative h-full animate-rightToLeft transition-all"
              >
                <ul className="lg:hidden mt-[52px] capitalize text-gray-444 p-10 flex flex-col items-center font-semibold text-md gap-10 cursor-pointer ">
                  <Link href={"/"} className="w-full">
                    <li className="hover:text-orange-f04c23 border-b w-full flex justify-center border-gray-300 px-10">
                      Trang chủ
                    </li>
                  </Link>
                  <Link href={"/course"} className="w-full">
                    <li className="hover:text-orange-f04c23 border-b w-full flex justify-center border-gray-300 px-10">
                      Khóa học
                    </li>
                  </Link>
                  {/* <li className="hover:text-orange-f04c23 border-b w-full flex justify-center border-gray-300 px-10">
                    Blog
                  </li> */}
                  <Link href={"/event"} className="w-full">
                    <li className="hover:text-orange-f04c23 border-b w-full flex justify-center border-gray-300 px-10">
                      Sự kiện
                    </li>
                  </Link>
                  {/* <Link href={"/competition"} className="w-full">
                    <li className="hover:text-orange-f04c23 border-b w-full flex justify-center border-gray-300 px-10">
                      Thi đấu
                    </li>
                  </Link> */}
                </ul>
                <div className="absolute w-full items-center flex p-4 -bottom-13 right-0 rounded-lg">
                  <input
                    type="text"
                    className="w-full pl-4 pr-10 py-4 bg-white text-gray-444 rounded-lg outline-orange-f04c23"
                    placeholder="Search..."
                  />
                  <BiSearch className="text-2xl absolute top-1/2 right-6 text-gray-444  -translate-y-1/2 cursor-pointer hover:text-orange-f04c23" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-auto items-center gap-10">
            <div className="hidden lg:block">
              <Button className="bg-blue-500 text-white after:bg-blue-500">
                Liện hệ chúng tôi
              </Button>
            </div>
            <div className="relative group">
              <BiSearch className="text-2xl hover:text-orange-f04c23" />
              <div className="absolute w-72 items-center hidden p-4 -bottom-13 right-0 bg-gray-edeef3 shadow-md rounded-lg group-hover:flex">
                <input
                  type="text"
                  className="w-full pl-4 pr-10 py-2 rounded-lg outline-orange-f04c23"
                  placeholder="Search..."
                />
                <BiSearch className="text-2xl absolute top-1/2 right-6 -translate-y-1/2 cursor-pointer hover:text-orange-f04c23" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
