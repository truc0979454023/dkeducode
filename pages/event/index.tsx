import Event from "@/components/main/events/Event";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import { getListCompetition } from "../api/competition/competition";

type Props = {};

const Events = (props: Props) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await getListCompetition();
      setEvents(res.data.data);
    }
    fetchData();
  }, []);

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
            <p className="">Hiện tại có 2 sự kiện.</p>
          </div>

          <div className="flex flex-col gap-4 w-full h-full items-center relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 z-0 -translate-y-1/2 scale-125 w-full h-full bg-event bg-no-repeat bg-center bg-contain"></div>
            {events.map((event: any) => (
              <Event
                key={event.examID}
                timeStart={event.timestart}
                timeEnd={event.timeend}
                address={event.address}
                title={event.title}
                link={event.urlpath}
                image={event.baseimg}
              />
            ))}
            {/* <Event
              time="Chủ nhật, 5 tháng 3 năm 2023 |"
              location="CoffeEsport Center"
              title="Cafe Excel. Khám phá tính năng vượt trội của excel 365"
              link="/event/cafe-excel-kham-pha-tinh-nang-vuot-troi-cua-excel-365"
            />

            <Event
              time=" Chủ Nhật, Ngày 19 tháng 3 năm 2023 | 8:00 am |"
              location="Nhà văn hóa sinh viên
            ĐHQG TP Hồ Chí Minh Esport Center Esport Center"
              title="Cuộc thi &#34;Tìm kiếm tài năng Excel &#34;"
              link="/event/cuoc-thi-tim-kiem-tai-nang-excel"
            /> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
