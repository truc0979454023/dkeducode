import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import eventRegister from "@/assets/images/register.png";
import { registerUserEvent } from "../api/event/event";
import { toast } from "react-toastify";
import SVGLoading from "@/components/common/loading/SVGLoading";
import { Router, useRouter } from "next/router";
import { useDispatch } from "react-redux";

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
  };
  return (
    <div className="mt-[170px] bg-gray-edeef3 min-h-screen">
      <Head>
        <title>Event Register</title>
      </Head>
      <div className="max-w-screen-xl h-full mx-auto w-[95%] flex flex-col gap-16 items-center justify-start pb-32">
        <div className="lg:h-full w-full flex md:flex-row flex-col-reverse justify-center items-start gap-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="lg:w-1/2 h-full flex flex-col justify-center mt-4 items-center gap-14 "
          >
            <h1 className="text-[42px] font-semibold uppercase text-center">
              Đăng ký tham gia
            </h1>
            <div className="flex flex-col w-full justify-center items-center gap-14">
              <div className="w-full flex flex-col items-center max-w-[480px]">
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
              <div className="w-full flex flex-col items-center max-w-[480px]">
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

              <div className="w-full flex flex-col items-center max-w-[480px]">
                <div className="w-full">
                  <Input
                    size="lg"
                    type={"text"}
                    readOnly={loading}
                    label="Trường"
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

              <div className="w-full flex flex-col items-center max-w-[480px]">
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
            <Button
              className={` text-white  ${
                loading ? "bg-gray-500" : "bg-blue-500 after:bg-blue-500"
              }`}
            >
              {loading && <SVGLoading size={20} />}
              Đăng ký
            </Button>

            <p className="uppercase text-4xl text-yellow-600 text-center font-signika">
              Hãy sẵn sàng chinh phục để trở thành quán quân <br /> mùa đầu tiên
              của &#34;Excel talent&#34;
            </p>
          </form>

          <div className="lg:w-1/2 h-full py-10 lg:p-0 flex items-end">
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
