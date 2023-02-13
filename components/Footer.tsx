import React from "react";
import logo from "@/assets/images/logo1.png";
import Image from "next/image";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "./common/Button";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="relative flex bg-blue-0e1133 flex-col gap-4">
      <div className="absolute gap-8 top-0 overflow-hidden w-[95%] left-1/2 rounded-xl -translate-y-1/2 -translate-x-1/2 max-w-screen-xl m-auto flex lg:flex-row flex-col lg:justify-between lg:items-center bg-blue-007aff py-4 px-8  sm:py-10 ms:px-20">
        <div className="w-full lg:w-1/2 z-10">
          <h2 className="text-3xl md:text-[36px] text-white font-bold">
            You can be your own Guiding star with our help
          </h2>
        </div>
        <div className="h-full w-1/2 flex items-center lg:justify-end z-10">
          <Button className="bg-white text-gray-444 after:bg-white">
            Get Start
          </Button>
        </div>
        <div className="h-[520px] w-[520px] absolute -top-1/2 -right-32 bg-orange-f04c23 rounded-full z-0"></div>
      </div>
      <div className="p-5 sm:p-20 mt-[144px] sm:mt-[120px] md:mt-[92px] text-white">
        <div className="max-w-screen-xl m-auto gap-10 lg:gap-4 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
          <div className="col-span-1 w-full flex flex-col pr-4 gap-8">
            <Image alt="logo" src={logo} className="w-28 h-28 -translate-x-7" />

            <p className="text-sm text-gray-400">
              Great lesson ideas and lesson plans for ESL teachers! Educators
              can customize lesson plans to best.
            </p>
            <ul className="flex items-center gap-4">
              <li className="h-12 w-12 cursor-pointer bg-amber-800 rounded-md flex justify-center items-center text-white ">
                <BsInstagram className="text-lg" />
              </li>
              <li className="h-12 w-12 cursor-pointer bg-blue-500 rounded-md flex justify-center items-center text-white ">
                <BsTwitter className="text-lg" />
              </li>
              <li className="h-12 w-12 cursor-pointer bg-blue-800 rounded-md flex justify-center items-center text-white ">
                <FaFacebookF className="text-lg" />
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-16 col-span-1 w-full justify-start">
            <div className="flex flex-col gap-6 justify-center">
              <h5 className="font-semibold text-xl">Company</h5>
              <ul className="text-sm flex flex-col gap-4 text-gray-400">
                <li className="hover:text-white cursor-pointer">About</li>
                <li className="hover:text-white cursor-pointer">Courses</li>
                <li className="hover:text-white cursor-pointer">Events</li>
                <li className="hover:text-white cursor-pointer">Instructor</li>
                <li className="hover:text-white cursor-pointer">Career</li>
                <li className="hover:text-white cursor-pointer">
                  Become a Teacher
                </li>
                <li className="hover:text-white cursor-pointer">Contact</li>
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <h5 className="font-semibold text-xl">Platform</h5>
              <ul className="text-sm flex flex-col gap-4 text-gray-400">
                <li className="hover:text-white cursor-pointer">
                  Browse Library
                </li>
                <li className="hover:text-white cursor-pointer">Library</li>
                <li className="hover:text-white cursor-pointer">Partners</li>
                <li className="hover:text-white cursor-pointer">
                  News & Blogs
                </li>
                <li className="hover:text-white cursor-pointer">FAQs</li>
                <li className="hover:text-white cursor-pointer">Tutorials</li>
              </ul>
            </div>
          </div>
          <div className="col-span-1 w-full flex flex-col gap-6">
            <h5 className="font-semibold text-xl">Subscribe</h5>
            <div className="flex">
              <input
                type="text"
                placeholder="Your Email Address"
                className="p-6 w-full rounded-tl-lg text-gray-444 rounded-bl-lg text-gr outline-orange-f04c23"
              />
              <button className="px-6 rounded-tr-lg rounded-br-lg bg-orange-f04c23">
                <AiOutlineArrowRight className="h-full text-xl font-bold hover:translate-x-1 transition-all" />
              </button>
            </div>
            <p className="text-sm text-gray-400">
              Get the latest news and updates right at your inbox.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t flex justify-center px-2 sm:px-0 text-center py-6 items-center border-gray-400">
        <p className="text-sm text-gray-400">
          © 2022 Educal, All Rights Reserved. Design By mt65200
        </p>
      </div>
    </footer>
  );
};

export default Footer;
