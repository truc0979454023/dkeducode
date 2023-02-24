import React from "react";
import Course from "./Course";
import course1 from "@/assets/images/course-1.jpg";
import course2 from "@/assets/images/course-2.jpg";
import course3 from "@/assets/images/course-3.jpg";
import course4 from "@/assets/images/course-4.jpg";
import course5 from "@/assets/images/course-5.jpg";
import course6 from "@/assets/images/course-6.jpg";

type Props = {};

const Courses = (props: Props) => {
  const dataCategories = [
    "Tất cả",
    "Trending",
    "Phổ biến",
    "Featured",
    "Art & Design",
  ];

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
  return (
    <section className="min-h-screen flex items-center py-32 bg-white">
      <div className="max-w-screen-xl m-auto w-[95%] flex flex-col gap-16 items-center justify-center">
        <div className="flex justify-between w-full flex-col xl:flex-row gap-16">
          <div className="">
            <h2 className="text-[32px] capitalize md:text-[36px] leading-[1] font-bold">
              Các khóa học <br /> trực tuyến{" "}
              <span className="relative w-full">
                <span className="z-10">phù hợp</span>{" "}
              </span>
              cho bạn
            </h2>
            <p>
              Bạn không cần phải chiến đấu một mình, bạn đã có sự giúp đỡ của
              chúng tôi
            </p>
          </div>
          <ul className="flex flex-wrap justify-center gap-8 items-end font-medium">
            {dataCategories.map((d) => (
              <li className="hover:text-orange-f04c23 cursor-pointer" key={d}>
                {d}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {dataCourses.map((data) => (
            <Course key={data.id} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
