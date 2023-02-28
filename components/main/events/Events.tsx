import React from "react";
import Event from "./Event";

type Props = {};

const Events = (props: Props) => {
  return (
    <section className="min-h-screen flex items-center py-32 bg-white ">
      <div className="max-w-screen-xl m-auto w-[95%] flex flex-col gap-16 items-center justify-center">
        <div className="flex flex-col justify-center items-center gap-3">
          <h2 className="text-[36px] leading-[1] capitalize font-bold">
            Sự kiện hiện tại
          </h2>
          <p className="">Hiện tại có 1 sự kiện dành cho bạn.</p>
        </div>

        <div className="flex flex-col gap-4 w-full h-full items-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 z-0 -translate-y-1/2 scale-125 w-full h-full bg-event bg-no-repeat bg-center bg-contain"></div>
          <Event
            time="Chủ nhật, 5 tháng 3 năm 2023 |"
            location="CoffeEsport Center"
            title="Cafe Excel. Khám phá tính năng vượt trội của excel 365"
            link="https://docs.google.com/forms/d/e/1FAIpQLScme9H8JPTGE8iiN2TGZnf-XU611DfA-p4CE3UcZPJHAZw22A/viewform?embedded=true"
          />
          <Event
            time=" Chủ Nhật, Ngày 19 tháng 3 năm 2023 | 8:00 am |"
            location="Nhà văn hóa sinh viên
            ĐHQG TP Hồ Chí Minh Esport Center Esport Center"
            title="Cuộc thi &#34;Tìm kiếm tài năng Excel &#34;"
            link="/event/cuoc-thi-tim-kiem-tai-nang-excel"
          />
        </div>
      </div>
    </section>
  );
};

export default Events;
