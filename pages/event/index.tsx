import Event from "@/components/main/events/Event";
import Head from "next/head";
import React from "react";

type Props = {};

const Events = (props: Props) => {
  return (
    <div className="mt-[170px] bg-gray-edeef3 min-h-screen">
      <Head>
        <title>Event</title>
      </Head>
      <section className=" flex items-center pt-16 pb-32 ">
        <div className="max-w-screen-xl h-full mx-auto w-[95%] flex flex-col gap-16 items-center justify-start">
          <div className="flex flex-col justify-self-start justify-center items-center gap-3">
            <h2 className="text-[36px] leading-[1] capitalize font-bold">
              Sự kiện hiện tại
            </h2>
            <p className="">Chúng tôi có 1 sự kiện.</p>
          </div>

          <div className="flex flex-col gap-4 w-full h-full items-center relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 z-0 -translate-y-1/2 scale-125 w-full h-full bg-event bg-no-repeat bg-center bg-contain"></div>
            <Event />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
