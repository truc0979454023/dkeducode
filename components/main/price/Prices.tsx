import React, { useState } from "react";
import Price from "./Price";

type Props = {};

const data = [
  {
    tag: false,
    type: "Gold",
    price: 39,
    option: ["Course Discussions", "Content Library", "1-hour Mentorship"],
  },
  {
    tag: true,
    type: "Diamond",
    price: 79,
    option: [
      "Course Discussions",
      "Content Library",
      "1-hour Mentorship",
      "Online Course",
    ],
  },
];

const Prices = (props: Props) => {
  const [optionPrice, setOptionPrice] = useState(0);

  return (
    <section className="min-h-screen flex items-start pb-52 bg-white ">
      <div className="max-w-screen-xl mx-auto w-[95%] flex flex-col gap-16 items-center justify-start">
        <div className="flex flex-col justify-center items-center gap-3">
          <h2 className="text-[36px] leading-[1] text-center font-bold">
            Simple <br /> All Inclusive Pricing
          </h2>
          <p className="">No contracts. No surprise fees.</p>
        </div>
        <div className="rounded-lg">
          <button
            onClick={() => setOptionPrice(0)}
            className={` ${
              optionPrice === 0 ? "bg-orange-f04c23 text-white" : "bg-white"
            } p-2 rounded-tl-md rounded-bl-md border-2 border-r-0 border-gray-300 `}
          >
            Monthly Plan
          </button>
          <button
            onClick={() => setOptionPrice(1)}
            className={` ${
              optionPrice === 1 ? "bg-orange-f04c23  text-white" : "bg-white"
            } p-2 rounded-tr-md rounded-br-md border-2 border-l-0 border-gray-300 `}
          >
            Annual Plan
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-6 w-full max-w-[95%] h-full items-center md:items-start justify-center">
          {data.map((d, index) => (
            <Price key={index} data={d} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prices;
