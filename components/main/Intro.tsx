import intro_image1 from "@/assets/images/hero-1.jpg";
import intro_image2 from "@/assets/images/hero-sm-1.jpg";
import Image from "next/image";
import Button from "../common/Button";

type Props = {};

const Intro = (props: Props) => {
  return (
    <section className="min-h-screen bg-gray-edeef3 w-full ">
      <div className="min-h-[calc(100vh-170px)] m-auto flex items-end w-[95%] max-w-screen-xl gap-8 lg:gap-0 md:flex-row flex-col">
        <div className="flex-1 flex flex-col gap-4 text-center md:text-left mt-14 md:mb-14">
          <p className="text-[36px] lg:text-[48px]">Access 2700+</p>
          <p className="text-[42px] lg:text-[52px] leading-[1] font-bold">
            Online Tutorial From Top Instructor.
          </p>
          <p className="text-xl lg:text-2xl">
            Meet university,and cultural institutions, who&lsquo;ll share their
            experience.
          </p>
          <div className="flex justify-center md:justify-start">
            <Button>View all course</Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center sm:justify-between gap-8 relative mb-14 md:mb-0">
          <div className="">
            <Image
              alt="bg-1"
              src={intro_image1}
              className="rounded-tl-[36px] rounded-br-[36px] m-auto sm:m-0 w-3/4 md:w-full"
            />
          </div>
          <div className="hidden lg:block pt-10">
            <Image
              alt="bg-1"
              src={intro_image2}
              className="rounded-tr-[36px] rounded-bl-[36px]"
            />
          </div>

          <div className="absolute right-0 bottom-5 sm:bottom-20 p-4 rounded-lg shadow-md bg-white animate-bounce">
            <p className="whitespace-nowrap text-xs sm:text-base">
              Tomorrow is our
            </p>
            <p className="whitespace-nowrap font-bold text-sm sm:text-base">
              “When I Grow Up” Spirit Day!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
