import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import eventRegister from "@/assets/images/register.png";
import { registerUserEvent } from "../api/event/event";
import { toast } from "react-toastify";
import SVGLoading from "@/components/common/loading/SVGLoading";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import {
  getCompetitionDetail,
  getListCompetition,
} from "../api/competition/competition";
import Link from "next/link";
import qr_pvk from "@/assets/images/QR-PVK-bank.png";
import qr_ptvh from "@/assets/images/QR-PTVH-bank.png";
import momo_ptvh from "@/assets/images/momo-tag.png";

type Props = {};
type Inputs = {
  name: string;
  phone: string;
  majob: string;
  school: string;
  email: string;
};

const Register = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

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

  const pathName = useMemo(() => {
    return route.query.id;
  }, [route]);

  const event: any = useMemo(() => {
    return events.find((event: any) => event.urlpath === pathName);
  }, [events, pathName]);

  useEffect(() => {
    async function fetchData() {
      if (event) {
        const res = await getCompetitionDetail(event?.examID);
        setEventDetail(res.data);
      }
    }

    fetchData();
  }, [event]);

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      const res = await registerUserEvent({
        e_name: data.name,
        e_email: data.email,
        e_phone: data.phone,
        e_school: data.school,
        e_specialized: data.majob,
        examID: event?.examID,
      });
      setLoading(false);
      if (res.data.status_code === 204) {
        return toast.error(res.data.detail, {
          position: "top-center",
          autoClose: 1500,
        });
      }
      dispatch({ type: "EVENT", payload: res.data.data.CandidatesID });
      localStorage.setItem("id", JSON.stringify(res.data.data.CandidatesID));

      route.push(`/event/confirm?event=${pathName}`);
    } catch (error) {
      setLoading(false);
      return toast.error("Xảy ra lỗi! Thử lại sau", {
        position: "top-center",
        autoClose: 1500,
      });
    }
  };
  return (
    <div className="mt-[170px] bg-gray-edeef3 min-h-screen">
      <Head>
        <title>Event Register</title>
      </Head>
      <div className="max-w-screen-xl h-full mx-auto w-[95%] flex flex-col gap-16  justify-start pb-32">
        <div className="lg:h-full w-full flex md:flex-row flex-col-reverse justify-center  gap-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={
              eventDetail?.event_type === "SK"
                ? "lg:w-1/3 h-full flex flex-col justify-center items-center mt-4  gap-14"
                : "lg:w-1/2 h-full flex flex-col justify-center items-center mt-4  gap-14 "
            }
          >
            <h1 className="text-[30px] font-semibold uppercase text-center">
              Đăng ký tham gia
            </h1>
            <div className="flex flex-col w-full justify-center  items-center gap-14">
              <div className="w-full flex flex-col items-center max-w-[480px]">
                <div className="w-full min-w-[200px]">
                  <Input
                    size="lg"
                    required={true}
                    type={"text"}
                    readOnly={loading}
                    label="Họ và tên"
                    register={register("name", {
                      required: "Vui lòng nhập họ và tên",
                    })}
                    id="name"
                  />
                  {errors.name?.message && (
                    <p className="text-red-500 p-0 text-sm">
                      {errors.name?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full flex flex-col items-center max-w-[480px]">
                <div className="w-full min-w-[200px]">
                  <Input
                    size="lg"
                    required={true}
                    readOnly={loading}
                    type={"tel"}
                    label="Số điện thoại"
                    register={register("phone", {
                      required: "Vui lòng nhập số điện thoại",
                    })}
                    id="phone"
                  />
                  {errors.phone?.message && (
                    <p className="text-red-500 p-0 text-sm">
                      {errors.phone?.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="w-full flex flex-col items-center max-w-[480px]">
                <div className="w-full">
                  <Input
                    size="lg"
                    required={true}
                    readOnly={loading}
                    type={"email"}
                    label="Email"
                    register={register("email", {
                      required: "Vui lòng nhập email",
                    })}
                    id="email"
                  />
                  {errors.email?.message && (
                    <p className="text-red-500 p-0 text-sm">
                      {errors.email?.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="w-full flex flex-col max-w-[480px]">
                <div className="w-full">
                  <Input
                    size="lg"
                    type={"text"}
                    readOnly={loading}
                    label="Chuyên môn"
                    register={register("majob")}
                    id="majob"
                  />
                  {errors.majob?.message && (
                    <p className="text-red-500 p-0 text-sm">
                      {errors.majob?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full flex flex-col items-center max-w-[480px]">
                <div className="w-full relative">
                  {eventDetail?.event_type === "SK" ? (
                    <>
                      <label
                        className="font-medium absolute -top-6 left-0 w-full max-w-[480px]"
                        htmlFor="school"
                      >
                        Hình thức tham gia
                      </label>
                      <select
                        className="border-2 border-gray-400 undefined px-4 py-2 false w-full rounded-md outline-orange--e45b28"
                        id="school"
                        {...register("school")}
                      >
                        <option value="Online">Online</option>
                        <option value="Offline">Offline</option>
                      </select>
                    </>
                  ) : (
                    <>
                      <Input
                        size="lg"
                        type={"text"}
                        readOnly={loading}
                        label="Đơn vị công tác"
                        register={register("school")}
                        id="school"
                      />
                      {errors.school?.message && (
                        <p className="text-red-500 p-0 text-sm">
                          {errors.school?.message}
                        </p>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
            <Button
              className={` text-white  ${
                loading ? "bg-gray-500" : "bg-blue-500 after:bg-blue-500"
              }`}
            >
              {loading && <SVGLoading size={20} />}
              Đăng ký
            </Button>

            {/* <p className="uppercase text-4xl text-yellow-600 text-center font-signika">
            Hãy sẵn sàng chinh phục để trở thành quán quân <br /> mùa đầu tiên
            của &#34;Excel talent&#34;
          </p> */}

            {eventDetail?.examID === 1 && (
              <div className="flex flex-col w-full gap-6 ">
                <p className="text-4xl text-yellow-600 font-signika text-center">
                  Đến với cuộc thi bạn sẽ nhận được
                </p>
                <div className="flex flex-col w-full gap-1">
                  <p className="text-2xl text-Slate-900 font-signika">
                    - Nâng cao kiến thức Excel phục vụ học tập và làm việc
                  </p>
                  <p className="text-2xl text-Slate-900 font-signika">
                    - Sân chơi thể thao điện tử trí tuệ
                  </p>
                  <p className="text-2xl text-Slate-900 font-signika">
                    - Giao lưu kết bạn cùng đam mê Excel
                  </p>
                  <p className="text-2xl text-Slate-900 font-signika">
                    - Công nhận thành tích, giá trị bản thân
                  </p>
                </div>
                <div className="flex flex-col w-full gap-6">
                  <p className="text-2xl text-center text-yellow-600 font-signika ">
                    HÃY SẴN SÀNG CHINH PHỤC ĐỂ TRỞ THÀNH QUÁN QUÂN MÙA ĐẦU TIÊN
                    CỦA “EXCEL TALENT”
                  </p>
                  <p className="text-2xl text-center text-Slate-900 font-signika">
                    Mời bạn tham gia nhóm ôn luyện kiến thức Excel cùng đội ngũ
                    Giảng viên - Trợ giảng KD Educode
                  </p>
                </div>
                <div>
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
                </div>
              </div>
            )}
          </form>

          <div
            className={
              eventDetail?.event_type === "SK"
                ? "lg:w-2/3 h-full py-10 items-center lg:p-0 flex items-end"
                : "lg:w-1/2 h-full py-10 lg:p-0 flex items-end"
            }
          >
            <div className="h-full w-full flex items-end  relative rounded-xl overflow-hidden">
              {/* <div className="absolute top-0 left-0 w-[320px]    rounded-lg overflow-hidden">
              <Image alt="" src={eventRegister2} className="w-full" />
            </div> */}
              <div className=" top-0 left-0 w-full h-full">
                <Image
                  src={`data:image/jpeg;base64, ${eventDetail?.img_createExamID_re?.img64}`}
                  alt=""
                  className="w-full"
                  width={140}
                  height={140}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center  h-full gap-2">
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
            {eventDetail?.event_type === "SK" && eventDetail?.URLsocal && (
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
    </div>
  );
};

export default Register;
