import React, { useState, useEffect, useMemo } from "react";
import CourseItem from "@/components/main/courses/CourseItem";
import course1 from "@/assets/images/courses/Advanced VBA Techniques for Excel.png";
import course2 from "@/assets/images/courses/Build Modern Web Apps with React (2).png";
import course3 from "@/assets/images/courses/Build Modern Web Apps with React (3).png";
import course4 from "@/assets/images/courses/Excel Automation with VBA.png";
import course5 from "@/assets/images/courses/Build Modern Web Apps with React.png";
import course6 from "@/assets/images/courses/Excel Data Scraping with VBA and Selenium (2).png";
import course7 from "@/assets/images/courses/Excel Data Scraping with VBA and Selenium (3).png";
import course8 from "@/assets/images/courses/Excel Data Scraping with VBA and Selenium.png";
import course9 from "@/assets/images/courses/Excel Dynamic Reports with VBA & SQL.png";
import course10 from "@/assets/images/courses/Python for Data Analysis_ A Comprehensive Guide.png";

type Props = {};

const Course = (props: Props) => {
  const dataCategories = [
    { id: "all", name: "Tất cả" },
    { id: "vba", name: "VBA" },
    { id: "python", name: "Python" },
  ];

  const dataCourses = [
    {
      id: 1,
      category: { id: "vba", name: "VBA" },
      color: "purple",
      image: course1,
      lesson: 23,
      star: 4.6,
      rating: 43,
      title: "Advanced VBA Techniques for Excel",
      teacher: "Phạm Văn Kiểu",
      oldPrice: 0,
      price: 0,
    },
    {
      id: 2,
      category: { id: "vba", name: "VBA" },
      color: "blue",
      image: course2,
      lesson: 42,
      star: 4.8,
      rating: 53,
      title: "Building an Effective Internal Reporting System ",
      teacher: "Phạm Văn Kiểu",
      oldPrice: 15,
      price: 12,
    },
    {
      id: 3,
      category: { id: "python", name: "Python" },
      color: "green",
      image: course3,
      lesson: 56,
      star: 4.2,
      rating: 23,
      title: "Advandced Data Analysis & Visualization with Python",
      teacher: "Phạm Văn Kiểu",
      oldPrice: 17,
      price: 14,
    },
    {
      id: 4,
      category: { id: "vba", name: "VBA" },
      color: "yellow",
      image: course4,
      lesson: 62,
      star: 4.5,
      rating: 54,
      title: "Excel Automation with VBA",
      teacher: "Phạm Văn Kiểu",
      oldPrice: 20,
      price: 16,
    },
    {
      id: 5,
      category: { id: "python", name: "Python" },
      color: "red",
      image: course5,
      lesson: 33,
      star: 4.4,
      rating: 35,
      title: "Build Modern Web Apps with React",
      teacher: "Phạm Văn Kiểu",
      oldPrice: 25,
      price: 21,
    },
    {
      id: 6,
      category: { id: "vba", name: "VBA" },
      color: "orange",
      image: course6,
      lesson: 11,
      star: 5,
      rating: 65,
      title: "VBA Excel Power Skills: Full COurse Training",
      teacher: "Phạm Văn Kiểu",
      oldPrice: 25,
      price: 22,
    },
    {
      id: 7,
      category: { id: "python", name: "Python" },
      color: "orange",
      image: course7,
      lesson: 11,
      star: 5,
      rating: 65,
      title: "Beginner's Guide to Python Programming",
      teacher: "Phạm Văn Kiểu",
      oldPrice: 25,
      price: 22,
    },
    {
      id: 8,
      category: { id: "vba", name: "VBA" },
      color: "orange",
      image: course8,
      lesson: 11,
      star: 5,
      rating: 65,
      title: "Excel Dât Scraping with VBA and Selenium",
      teacher: "Phạm Văn Kiểu",
      oldPrice: 25,
      price: 22,
    },
    {
      id: 9,
      category: { id: "vba", name: "VBA" },
      color: "orange",
      image: course9,
      lesson: 11,
      star: 5,
      rating: 65,
      title: "Excel Dynamic Reports with VBA & SQL",
      teacher: "Phạm Văn Kiểu",
      oldPrice: 25,
      price: 22,
    },
    {
      id: 10,
      category: { id: "vba", name: "VBA" },
      color: "orange",
      image: course10,
      lesson: 11,
      star: 5,
      rating: 65,
      title: "Python for Data Anilysis",
      teacher: "Phạm Văn Kiểu",
      oldPrice: 25,
      price: 22,
    },
  ];

  const [category, setCategory] = useState<string>("all");

  const dataCoursesFilter = useMemo(() => {
    if (category === "all") return dataCourses;
    else return dataCourses.filter((data) => data.category.id === category);
  }, [category, dataCourses]);

  return (
    <div className="mt-[170px] bg-gray-edeef3 min-h-screen">
      <section className="min-h-screen flex items-center py-32 bg-gray-edeef3">
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
                <li
                  onClick={() => setCategory(d.id)}
                  className={`hover:text-orange-f04c23 ${
                    category === d.id && "text-orange-f04c23"
                  } cursor-pointer`}
                  key={d.id}
                >
                  {d.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {dataCoursesFilter?.map((data: any) => (
              <CourseItem key={data.id} data={data} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Course;
