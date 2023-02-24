import React from "react";
import Event from "./Event";

type Props = {};

const Events = (props: Props) => {
  return (
    <section className="min-h-screen flex items-center py-32 bg-white ">
      <div className="max-w-screen-xl m-auto w-[95%] flex flex-col gap-16 items-center justify-center">
        <div className="flex flex-col justify-center items-center gap-3">
          <h2 className="text-[36px] leading-[1]  font-bold">Current Events</h2>
          <p className="">We found 13 events available for you.</p>
        </div>

        <div className="flex flex-col gap-4 w-full h-full items-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 z-0 -translate-y-1/2 scale-125 w-full h-full bg-event bg-no-repeat bg-center bg-contain"></div>
          <Event />
        </div>
      </div>
    </section>
  );
};

export default Events;
