import React, { useEffect, useState } from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { CgPhone } from "react-icons/cg";
import { MdAlternateEmail } from "react-icons/md";

type Props = {};

const SubHeader = (props: Props) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", function (event) {
      setScrollY(this.scrollY);
    });
  }, []);

  return (
    <nav
      className={` ${
        scrollY > 20
          ? "-translate-y-20 bg-white"
          : "translate-y-0 bg-gray-edeef3"
      } transition-all w-screen duration-500 fixed top-0 left-0 right-0 z-40 py-2 after:absolute after:w-full after:bg-orange-400 after:z-[1] after:translate-x-[-65%] after:skew-x-[-25deg] after:top-2 after:left-2 after:min-w-[480px] after:h-full before:absolute  before:w-full before:min-w-[480px] before:z-[2] before:bg-orange-f04c23 before:translate-x-[-65%] before:skew-x-[-25deg] before:top-0 before:left-0 before:h-full`}
    >
      <div className="max-w-screen-xl w-[95%] m-auto flex justify-between  items-center ">
        <ul className="flex gap-4 items-center  text-white z-10 text-sm font-medium">
          <li className="flex items-center gap-1">
            <CgPhone className=" text-2xl" /> <p>0989830047</p>
          </li>
          <li className="hidden lg:flex items-center gap-1">
            <MdAlternateEmail className="text-2xl" />
            <p>info@kdeducode.com</p>
          </li>
        </ul>

        <div className="flex items-center gap-10 text-sm font-medium z-10">
          <p className="hidden lg:block">Thứ 2 - Chủ nhật | 8:00am - 22:00am</p>
          <ul className="flex items-center sm:gap-4 gap-1">
            <li className="h-12 w-12 cursor-pointer hover:bg-amber-800 rounded-full flex justify-center items-center hover:text-white hover:border hover:border-orange-f04c23">
              <BsInstagram className="text-lg" />
            </li>
            <li className="h-12 w-12 cursor-pointer hover:bg-blue-500 rounded-full flex justify-center items-center hover:text-white hover:border hover:border-orange-f04c23">
              <BsTwitter className="text-lg" />
            </li>
            <li className="h-12 w-12 cursor-pointer hover:bg-blue-800 rounded-full flex justify-center items-center hover:text-white hover:border hover:border-orange-f04c23">
              <FaFacebookF className="text-lg" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SubHeader;
