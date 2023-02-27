import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import eventRegister from "@/assets/images/register.png";
import { information_lookup, registerUserEvent } from "../api/event/event";
import { toast } from "react-toastify";
import SVGLoading from "@/components/common/loading/SVGLoading";
import { Router, useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Link from "next/link";

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
    formState: { errors },
  } = useForm<Inputs>();


  const {
    register: register2,
    formState: { errors: errors2 },
    handleSubmit: handleSubmit2,
  } = useForm({
    mode: "onBlur",
  });

  const route = useRouter();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<any>();

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      const res = await registerUserEvent({
        e_name: data.name,
        e_email: data.email,
        e_phone: data.phone,
        e_school: data.school,
        e_specialized: data.majob,
      });
      setLoading(false);
      if (res.data.status_code === 204) {
        return toast.error(res.data.detail, {
          position: "top-center",
          autoClose: 1500,
        });
      }
      dispatch({ type: "FEATURE", payload: res.data.data.CandidatesID });
      localStorage.setItem("id", JSON.stringify(res.data.data.CandidatesID));
      route.push("/event/confirm");
    } catch (error) {
      setLoading(false);
      return toast.error("Xảy ra lỗi! Thử lại sau", {
        position: "top-center",
        autoClose: 1500,
      });
    }
  }
  const [lookup, setLookUp] = useState({
    e_name: String,
    e_email: String,
    e_phone: String,
    e_school: String,
    e_specialized: String,
    currency_unit  : String,
    remittance_status : Boolean,
    transfer_amount : Int16Array
  });

  const onSubmits = async (data: any) => {
    try {
      setLoading(true);
      const res = await information_lookup({ lookup: data.lookup });
      if (res.data.data.status_code === 204) {
        setLoading(false);
        return toast.error(res.data.data.detail, {
          position: "top-center",
          autoClose: 1500,
        });
      } else {
        setLookUp(res.data.data)
        console.log(res.data.data)
        setLoading(false);
      }
    } catch {
      setLoading(false);
      return toast.error("Lỗi: vui lòng thử lại sau!", {
        position: "top-center",
        autoClose: 1500,
      });


    }
  }
  return (
    <div className="mt-[170px] bg-gray-edeef3 min-h-screen">
      <Head>
        <title>Event Register</title>
      </Head>
      <div className="max-w-screen-xl h-full mx-auto w-[95%] flex flex-col gap-16 items-center justify-start pb-32">
        <div className="lg:h-full w-full flex md:flex-row flex-col-reverse justify-center items-start gap-4">

          <div className="gap-8">
            <div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className=" h-full flex flex-col justify-center mt-4 items-center gap-8 "
              >
                <h1 className="text-[30px] font-semibold uppercase text-center">
                  Đăng ký tham gia
                </h1>
                <div className="flex flex-col w-full justify-center items-center gap-8">
                  <div className="w-full flex flex-col  max-w-[100%]">
                    <div className="w-full">
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
                  <div className="w-full flex flex-col  max-w-[100%]">
                    <div className="w-full">
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

                  <div className="w-full flex flex-col  max-w-[100%]">
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

                  <div className="w-full flex flex-col  max-w-[100%]">
                    <div className="w-full">
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
                    </div>
                  </div>

                  <div className="w-full flex flex-col  max-w-[100%]">
                    <div className="w-full">
                      <Input
                        size="lg"
                        type={"text"}
                        readOnly={loading}
                        label="Chuyên ngành"
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
                </div>
                <div className="flex flex-col-2 justify-evenly w-full">
                  <Button
                    className={` text-white  ${loading ? "bg-gray-500" : "bg-blue-500 after:bg-blue-500"}`}>
                    {loading && <SVGLoading size={20} />}
                    Đăng ký
                  </Button>
                </div>
              </form>
            </div>
            <div className="pt-6 pb-5">
              <form
                onSubmit={handleSubmit2(onSubmits)}
                className="sm:h-full w-full flex sm:flex-row w-full flex md:flex-row flex-col-reverse items-start gap-4 pt-6">
                <div className="w-3/4 flex flex-col  max-w-[100%]">
                  <div className="w-full">
                    <Input
                      size="lg"
                      readOnly={loading}
                      type={"text"}
                      label="Số điện thoại hoặc mã số báo thi"
                      register={register2("lookup")}
                      id="lookup"
                    />
                  </div>
                </div>
                <div className="flex flex-col-2 w-1/4">
                  <Button
                    className={` text-white  ${loading ? "bg-gray-500" : "bg-blue-500 after:bg-blue-500"}`}>
                    {loading && <SVGLoading size={20} />}
                    Tìm kiếm
                  </Button>
                </div>
              </form>
              {
                lookup.e_phone && <div className="flex flex-col-2 gap-6">
                  <div className="w-3/4">
                    <p className="p-2 text-lg">Họ và tên: {lookup.e_name}</p>
                    <p className="p-2 text-lg">Email: {lookup.e_email} </p>
                    <p className="p-2 text-lg">Số điện thoại: {lookup.e_phone} </p>
                  </div>
                  <div className="w-2/4">
                    <p className="p-2 text-lg">Đơn vị công tác: {lookup.e_school}</p>
                    <p className="p-2 text-lg">Chuyên ngành: {lookup.e_specialized} </p>
                    <p className="p-2 text-lg">Số tiền đã đóng: {lookup.transfer_amount} </p>
                    <p className="p-2 text-lg">Trạng thái: {lookup.remittance_status === true?"Đã thanh toán":"Chưa thanh toán"} </p>
                  </div>
                </div>
              }
            </div>

            <div className="flex flex-col w-full gap-6">
              <p className="text-4xl text-yellow-600 font-signika">Đến với cuộc thi bạn sẽ nhận được</p>
              <div className="flex flex-col w-full gap-1">
                <p className="text-2xl text-Slate-900 font-signika">- Nâng cao kiến thức Excel phục vụ học tập và làm việc</p>
                <p className="text-2xl text-Slate-900 font-signika">- Sân chơi thể thao điện tử trí tuệ</p>
                <p className="text-2xl text-Slate-900 font-signika">- Giao lưu kết bạn cùng đam mê Excel</p>
                <p className="text-2xl text-Slate-900 font-signika">- Công nhận thành tích, giá trị bản thân</p>
              </div>
              <div className="flex flex-col w-full gap-6">
                <p className="text-2xl text-center text-yellow-600 font-signika ">HÃY SẴN SÀNG CHINH PHỤC ĐỂ TRỞ THÀNH QUÁN QUÂN MÙA ĐẦU TIÊN CỦA “EXCEL TALENT”</p>
                <p className="text-2xl text-center text-Slate-900 font-signika">Mời bạn tham gia nhóm ôn luyện kiến thức Excel cùng đội ngũ Giảng viên - Trợ giảng KD Educode</p>
              </div>
              <div>
                <p className="text-xl text-center">
                  Mời bạn tham gia cùng các chuyên gia ôn luyện Excel để trở thành
                  Quán quân nhé!
                </p>
                <p className="text-xl text-center">
                  Zalo:
                  <Link
                    href={"https://zalo.me/g/vmupyt831"}
                    target="_blank"
                    className="text-blue-500 hover:underline"
                  >
                    https://zalo.me/g/vmupyt831
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className=" h-full py-10 lg:p-0 flex items-end">
            <div className="h-full w-full flex items-end  relative rounded-xl overflow-hidden">
              {/* <div className="absolute top-0 left-0 w-[320px]    rounded-lg overflow-hidden">
                <Image alt="" src={eventRegister2} className="w-full" />
              </div> */}
              <div className=" top-0 left-0 w-full h-full">
                <Image alt="" src={eventRegister} className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
