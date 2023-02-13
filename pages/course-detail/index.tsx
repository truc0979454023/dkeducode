import course1 from "@/assets/images/course-1.jpg";
import course2 from "@/assets/images/course-2.jpg";
import course3 from "@/assets/images/course-3.jpg";
import course4 from "@/assets/images/course-4.jpg";
import course5 from "@/assets/images/course-5.jpg";
import course6 from "@/assets/images/course-6.jpg";
import course_video from "@/assets/images/course-video.jpg";
import Button from "@/components/common/Button";
import Course from "@/components/main/course/Course";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { BsCheckLg, BsInstagram, BsStarFill, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaUserAlt } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { HiTag } from "react-icons/hi";
import { MdLanguage, MdOutlineDescription } from "react-icons/md";
import { RiBook3Line } from "react-icons/ri";
import { RxTriangleRight } from "react-icons/rx";

type Props = {};

const CourseDetail = (props: Props) => {
  const { query } = useRouter();
  const [courseDetail, setCourseDetail] = useState<any>({});
  const [isActiveOption, setIsActiveOption] = useState(0);

  useEffect(() => {
    setCourseDetail(dataCourses.find((data) => data.id === Number(query.id)));
  }, [query]);

  return (
    <div className="mt-[170px] bg-gray-edeef3 min-h-screen">
      <Head>
        <title>Course Detail</title>
      </Head>
      <section className="min-h-screen py-32 bg-gray-edeef3">
        <div className="max-w-screen-xl w-[95%] m-auto grid grid-cols-2 lg:grid-cols-3 gap-16 ">
          {/* left */}
          <div className="col-span-2 w-full sm:px-10 lg:px-0">
            <div className="mb-10">
              <p className="text-xs font-medium flex flex-col md:flex-row md:items-center gap-1">
                Home <RxTriangleRight /> Courses <RxTriangleRight />{" "}
                {courseDetail?.title}
              </p>
            </div>
            <div className="flex flex-col gap-10">
              <span
                className={`px-4 py-1 w-max rounded-lg bg-red-500 text-white text-xs font-medium`}
              >
                {courseDetail?.category}
              </span>

              <h1 className="text-[42px] font-bold">{courseDetail.title}</h1>

              <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-gray-500"></div>
                  <div>
                    <span className="text-sm font-medium">Teacher</span>
                    <p className="font-semibold">{courseDetail?.teacher}</p>
                  </div>
                </div>
                <div>
                  <span className="text-sm font-medium">Last Update:</span>
                  <p className="font-semibold">July 24, 2022</p>
                </div>
                <div>
                  <span className="text-sm font-medium">Review:</span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <BsStarFill className="text-yellow-500" />
                      <BsStarFill className="text-yellow-500" />
                      <BsStarFill className="text-yellow-500" />
                      <BsStarFill className="text-yellow-500" />
                      <BsStarFill className="text-yellow-500" />
                    </div>
                    <p className="font-semibold">{courseDetail?.star}</p>
                  </div>
                </div>
              </div>

              <Image
                alt="image"
                src={courseDetail?.image}
                className="w-full bg-cover"
              />

              <ul className="flex w-full">
                <li
                  className={`flex gap-1 cursor-pointer flex-1 py-4 justify-center border ${
                    isActiveOption === 0
                      ? "bg-orange-f04c23 text-white"
                      : "bg-gray-200"
                  } border-gray-300 rounded-tl-lg rounded-bl-lg items-center `}
                >
                  <MdOutlineDescription className="text-xl" />{" "}
                  <p className="font-medium hidden md:block">Description</p>
                </li>
                <li className="flex  gap-1 cursor-pointer flex-1 py-4 justify-center border border-gray-300  items-center bg-gray-200">
                  <RiBook3Line className="text-xl" />{" "}
                  <p className="font-medium hidden md:block"> Curriculum</p>
                </li>
                <li className="flex  gap-1 cursor-pointer flex-1 py-4 justify-center border border-gray-300  items-center bg-gray-200">
                  <BsStarFill className="text-xl" />{" "}
                  <p className="font-medium hidden md:block">Reviews</p>
                </li>
                <li className="flex  gap-1 cursor-pointer flex-1 py-4 justify-center border border-gray-300 rounded-tr-lg rounded-br-lg items-center bg-gray-200">
                  <FaUserAlt className="text-xl" />{" "}
                  <p className="font-medium hidden md:block">Members</p>
                </li>
              </ul>

              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-2xl">Course Overview</h3>
                <p>
                  Only a quid me old mucker squiffy tomfoolery grub cheers ruddy
                  cor blimey guvnor in my flat, up the duff Eaton car boot up
                  the kyver pardon you A bit of how's your father David skive
                  off sloshed, don't get shirty with me chip shop vagabond
                  crikey bugger Queen's English chap. Matie boy nancy boy bite
                  your arm off up the kyver old no biggie fantastic boot, David
                  have it show off show off pick your nose and blow off lost the
                  plot porkies bits and bobs only a quid bugger all mate,
                  absolutely bladdered bamboozled it's your round don't get
                  shirty with me down the pub well. Give us a bell bits and bobs
                  Charles he lost his bottle super my lady cras starkers bite
                  your arm off Queen's English, pardon me horse play Elizabeth a
                  blinding shot chinwag knees up do one David, blag cup of tea
                  Eaton so I said bleeding haggle James Bond cup of char. Gosh
                  William ummm I'm telling crikey burke I don't want no agro A
                  bit of how's your father bugger all mate off his nut that,
                  what a plonker cuppa owt to do with me nancy boy show off show
                  off pick your nose and blow off spiffing good time lavatory me
                  old mucker, chimney pot what a load of rubbish boot squiffy
                  lost the plot brolly wellies excuse my french.
                </p>
                <div className="flex gap-2 items-center">
                  <HiTag className="text-orange-f04c23 text-xl" />
                  <ul className="flex gap-1 text-sm">
                    <li className="hover:text-orange-f04c23 cursor-pointer font-medium">
                      Big data,
                    </li>
                    <li className="hover:text-orange-f04c23 cursor-pointer font-medium">
                      Data analysis,
                    </li>
                    <li className="hover:text-orange-f04c23 cursor-pointer font-medium">
                      Data modeling
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <h4 className="text-2xl font-semibold">
                  What is the Target Audience?
                </h4>
                <ul className="flex flex-col gap-3">
                  <li className="flex gap-4">
                    <BsCheckLg className="text-lg font-bold text-black" />
                    <p>Business's managers, leaders</p>
                  </li>
                  <li className="flex gap-4">
                    <BsCheckLg className="text-lg font-bold text-black" />
                    <p>
                      Downloadable lectures, code and design assets for all
                      projects
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <BsCheckLg className="text-lg font-bold text-black" />
                    <p>
                      Anyone who is finding a chance to get the promotion
                    </p>{" "}
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-8">
                <h4 className="text-2xl font-semibold">Other Instructors</h4>
                <ul className="flex flex-col md:flex-row gap-8 md:gap-16">
                  <li className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-gray-500"></div>
                    <div>
                      <p className="font-semibold">Eleanor Fant</p>
                      <span className="text-sm">Instructor</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-gray-500"></div>
                    <div>
                      <p className="font-semibold">Lauren Stamps</p>
                      <span className="text-sm">Teacher</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-gray-500"></div>
                    <div>
                      <p className="font-semibold">Jonquil Von</p>
                      <span className="text-sm">Associate</span>
                    </div>
                  </li>
                </ul>

                <div className="flex flex-col gap-2">
                  <h5 className="font-semibold">Share:</h5>
                  <ul className="flex items-center gap-4">
                    <li className="h-10 w-10 cursor-pointer bg-amber-800 rounded-md flex justify-center items-center text-white ">
                      <BsInstagram className="text-lg" />
                    </li>
                    <li className="h-10 w-10 cursor-pointer bg-blue-500 rounded-md flex justify-center items-center text-white ">
                      <BsTwitter className="text-lg" />
                    </li>
                    <li className="h-10 w-10 cursor-pointer bg-blue-800 rounded-md flex justify-center items-center text-white ">
                      <FaFacebookF className="text-lg" />
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-8">
                <div>
                  <h3 className="font-bold text-[36px]">Related Course</h3>
                  <p>
                    You don't have to struggle alone, you've got our assistance
                    and help.
                  </p>
                </div>
                <div className="grid grid-col-1 md:grid-cols-2 gap-6">
                  <Course data={dataCourses[1]} />
                  <Course data={dataCourses[2]} />
                </div>

                <div className="flex gap-2 justify-center">
                  <div className="h-4 w-4 rounded-full bg-orange-f04c23"></div>
                  <div className="h-4 w-4 rounded-full bg-gray-300"></div>
                  <div className="h-4 w-4 rounded-full bg-gray-300"></div>
                  <div className="h-4 w-4 rounded-full bg-gray-300"></div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-2 lg:col-span-1 w-full  flex flex-col gap-6">
            <div className="rounded-lg h-max bg-white p-4 shadow-lg">
              <div className="flex flex-col gap-6">
                <Image
                  alt=""
                  src={course_video}
                  className="w-full rounded-lg"
                />
                <div className="flex justify-between items-center">
                  <div className="flex gap-4 items-center">
                    <p className="text-3xl font-semibold">
                      {courseDetail.price === 0
                        ? "Free"
                        : "$" + courseDetail.price}
                    </p>
                    <p className="line-through font-medium">
                      {courseDetail.oldPrice === 0
                        ? ""
                        : "$" + courseDetail.oldPrice}
                    </p>
                  </div>

                  <div>
                    {courseDetail.price !== 0 && courseDetail.oldPrice && (
                      <p className="text-red-500 font-semibold text-sm p-2 rounded-lg b">
                        {Math.ceil(
                          ((courseDetail.oldPrice - courseDetail.price) * 100) /
                            courseDetail.oldPrice
                        )}
                        % OFF
                      </p>
                    )}
                  </div>
                </div>

                <ul className="flex flex-col ">
                  <li className="border-b border-gray-200 flex items-center gap-3 text-sm p-4">
                    <AiFillHome className="text-xl text-orange-f04c23" />
                    <p className="font-medium">Intructor:</p>
                    <p> Eleanor Fant</p>
                  </li>
                  <li className="border-b border-gray-200 flex items-center gap-3 text-sm p-4">
                    <RiBook3Line className="text-xl text-orange-f04c23" />
                    <p className="font-medium">Lectures: </p>
                    <p> 14</p>
                  </li>
                  <li className="border-b border-gray-200 flex items-center gap-3 text-sm p-4">
                    <BiTimeFive className="text-xl text-orange-f04c23" />
                    <p className="font-medium">Duration:</p>
                    <p>6 Weeks</p>
                  </li>
                  <li className="border-b border-gray-200 flex items-center gap-3 text-sm p-4">
                    <FaUserAlt className="text-xl text-orange-f04c23" />
                    <p className="font-medium">Enrolled:</p>
                    <p>20 students</p>
                  </li>
                  <li className="border-b border-gray-200 flex items-center gap-3 text-sm p-4">
                    <MdLanguage className="text-xl text-orange-f04c23" />
                    <p className="font-medium">Language :</p>
                    <p>English</p>
                  </li>
                </ul>

                <div className="flex justify-center w-full">
                  <Button backgroundColor="bg-blue-500">
                    Enroll{" "}
                    <FiArrowRight className="font-bold text-xl group-hover:translate-x-1 transition-all " />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;

const dataCourses = [
  {
    id: 1,
    category: "Art & Design",
    color: "purple",
    image: course1,
    lesson: 23,
    star: 4.6,
    rating: 43,
    title: "Become a product Manager learn the skills & job.",
    teacher: "Jim Séchen",
    oldPrice: 0,
    price: 0,
  },
  {
    id: 2,
    category: "Art & Design",
    color: "blue",
    image: course2,
    lesson: 42,
    star: 4.8,
    rating: 53,
    title: "Fundamentals of music theory Learn new.",
    teacher: "Barry Tone",
    oldPrice: 15,
    price: 12,
  },
  {
    id: 3,
    category: "Development",
    color: "green",
    image: course3,
    lesson: 56,
    star: 4.2,
    rating: 23,
    title: "The business Intelligence analyst Course 2022.",
    teacher: "Elon Gated",
    oldPrice: 17,
    price: 14,
  },
  {
    id: 4,
    category: "Maketing ",
    color: "yellow",
    image: course4,
    lesson: 62,
    star: 4.5,
    rating: 54,
    title: "Build your media and Public presence.",
    teacher: "Eleanor Fant",
    oldPrice: 20,
    price: 16,
  },
  {
    id: 5,
    category: "Audio & Music",
    color: "red",
    image: course5,
    lesson: 33,
    star: 4.4,
    rating: 35,
    title: "Become a product Manager learn the skills & job.",
    teacher: "Pelican Steve",
    oldPrice: 25,
    price: 21,
  },
  {
    id: 6,
    category: "UX Design",
    color: "orange",
    image: course6,
    lesson: 11,
    star: 5,
    rating: 65,
    title: "Creative writing through Storytelling.",
    teacher: "Shahnewaz Sakil",
    oldPrice: 25,
    price: 22,
  },
];
