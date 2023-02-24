import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import SVGLoading from "@/components/common/loading/SVGLoading";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import eventRegister from "@/assets/images/event-register.jpg";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { convertToken, login } from "@/redux/actions/authAction";
import Cookies from "js-cookie";

type Props = {};
type Inputs = {
  name: string;
  phone: string;
  majob: string;
  school: string;
  email: string;
};

const Login = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { auth, alert }: any = useSelector<any>((state) => state);

  const token = Cookies.get("token");
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(convertToken(token));
  }, [token, dispatch]);

  useEffect(() => {
    if (alert) {
      toast.error(alert.error, {
        position: "top-center",
        autoClose: 1500,
      });
    }
    console.log(auth);
    if (auth?.user) {
      router.push("/competition/exam");
    }
  }, [alert, auth, router]);

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);

      dispatch(
        login({
          phone: data.phone,
        })
      );
      setLoading(false);
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
        <title>Login Competition</title>
      </Head>
      <div className="max-w-screen-xl h-full mx-auto w-[95%] flex flex-col gap-16 items-center justify-start pb-32">
        <h1 className="text-[42px] font-semibold uppercase">
          Đăng nhập để tham gia
        </h1>
        <div className="lg:h-full w-full lg:flex justify-center items-start gap-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="lg:w-1/2 h-full flex flex-col justify-center mt-4 items-center gap-14 "
          >
            <div className="flex flex-col w-full justify-center items-center gap-14">
              <div className="w-full flex flex-col items-center max-w-[480px]">
                <div className="w-full">
                  <Input
                    size="lg"
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
            </div>
            <Button
              className={` text-white  ${
                loading ? "bg-gray-500" : "bg-blue-500 after:bg-blue-500"
              }`}
            >
              {loading && <SVGLoading size={20} />}
              Đăng nhập
            </Button>
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

export default Login;
