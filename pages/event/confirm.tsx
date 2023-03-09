import Head from "next/head";
import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import excel from "@/assets/images/excel.png";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import qr_pvk from "@/assets/images/QR-PVK-bank.png";
import qr_ptvh from "@/assets/images/QR-PTVH-bank.png";
import momo_ptvh from "@/assets/images/momo-tag.png";
import { useRouter } from "next/router";
import {
  getCompetitionDetail,
  getListCompetition,
} from "../api/competition/competition";

type Props = {};

const Confirm = (props: Props) => {
  const { event }: any = useSelector<any>((state) => state);
  const [id, setId] = useState();

  useEffect(() => {
    if (Object.keys(event).length > 0) {
      setId(event);
    } else setId(JSON.parse(localStorage.getItem("id") as string));
  }, [event]);

  const route = useRouter();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<any>();
  const [eventDetail, setEventDetail] = useState<any>();

  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await getListCompetition();
      setEvents(res.data.data);
    }
    fetchData();
  }, []);
  console.log(route);
  const pathName = useMemo(() => {
    return route.query.event;
  }, [route]);

  const eventItem: any = useMemo(() => {
    return events.find((event: any) => event.urlpath === pathName);
  }, [events, pathName]);

  useEffect(() => {
    async function fetchData() {
      if (eventItem) {
        const res = await getCompetitionDetail(eventItem?.examID);
        setEventDetail(res.data);
      }
    }

    fetchData();
  }, [eventItem]);

  console.log(eventDetail);

  return (
    <>
      <div className="mt-[170px] bg-gray-edeef3 min-h-screen">
        <Head>
          <title>Event Confirmation</title>
        </Head>
        <div className="max-w-screen-xl h-full mx-auto w-[95%] flex flex-col gap-16 items-center justify-start pb-32">
          <div className="flex md:flex-row flex-col justify-center items-center">
            {/* <Image src={excel} alt="" className="w-52 h-52" /> */}
            <Image
              src={`data:image/jpeg;base64, ${eventDetail?.img_createExamID_re?.imgsuccess}`}
              alt=""
              className="w-52 h-52"
              width={52}
              height={52}
            />
            <div className="font-signika text-green-600 text-5xl md:text-7xl lg:text-8xl text-center">
              Welcome! <br />
              {eventDetail?.description}
            </div>
          </div>
          <div className=" flex flex-col justify-center gap-2">
            <p className="text-3xl font-medium text-center">
              {eventDetail?.event_type === "SK"
                ? "Chúc mừng bạn đã đăng ký thành công"
                : "Chúc mừng bạn đã đăng ký thành công với mã số báo thi"}
            </p>
            {eventDetail?.event_type === "SK" ? (
              ""
            ) : (
              <span className="px-10 py-4 text-red-500 text-center font-medium text-3xl bg-gray-100">
                {id}
              </span>
            )}
          </div>

          <div className="flex flex-col h-full gap-2">
            <p>
              Phí tham gia:{" "}
              {eventDetail?.fees.toLocaleString("vi", {
                style: "currency",
                currency: "VND",
              })}
              VND/người
            </p>
            <p>
              {eventDetail?.event_type === "SK"
                ? "Bạn vui lòng chuyển khoản với nội dung: Số điện thoại đăng ký"
                : "Bạn vui lòng chuyển khoản với nội dung: Mã số báo thi + Số điện thoại đăng ký thi"}
            </p>
            <p>Thông tin chuyển khoản:</p>
            <div className="flex items-center h-full gap-4 flex-col md:flex-row">
              <div className="flex items-center gap-2 flex-col md:flex-row ">
                <Image src={qr_pvk} alt="" className="w-28 h-28" />
                <div className="text-center md:text-start">
                  <p>Ngân hàng: VPBank - Việt Nam Thịnh Vượng</p>
                  <p>STK: 112200541</p>
                  <p>Người thụ hưởng: Phạm Văn Kiểu</p>
                </div>
              </div>
              <div className="h-[2px] md:h-[100px] w-full md:w-[2px] bg-orange-f04c23"></div>
              <div className="flex gap-2">
                <Image src={qr_ptvh} alt="" className="w-28 h-28" />
                <Image src={momo_ptvh} alt="" className="w-36 object-contain" />
              </div>
            </div>
            {eventDetail?.URLsocal && (
              <>
                <p className="text-xl text-center">
                  Mời bạn tham gia nhóm để cập nhập thông tin sự kiện
                </p>
                <p className="text-xl text-center">
                  Zalo:
                  <Link
                    href={eventDetail?.URLsocal}
                    target="_blank"
                    className="text-blue-500 hover:underline"
                  >
                    {eventDetail?.URLsocal}
                  </Link>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirm;
