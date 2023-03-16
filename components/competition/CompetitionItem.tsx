import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import moment from "moment";
import "moment/locale/vi";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setCompetitionID } from "@/redux/actions/competitionAction";
import Image from "next/image";

type Props = {
  address: any;
  image: any;
  title: any;
  timeStart: any;
  timeEnd: any;
  competitionId: any;
};

const CompetitionItem = ({
  address,
  title,
  image,
  timeStart,
  timeEnd,
  competitionId,
}: Props) => {
  const router = useRouter();
  const dispatch = useDispatch<any>();

  const handleLoginCompetition = () => {
    dispatch(setCompetitionID(competitionId));
    localStorage.setItem("competitionID", competitionId);
    router.push(`/competition/login?competitionId=${competitionId}`);
  };

  return (
    <div className="rounded-xl shadow-md py-6 px-12 flex flex-col gap-4 items-center z-10 bg-white justify-between lg:w-3/4 transition-all duration-300 hover:border-l-4  hover:border-orange-f04c23">
      <div className="flex w-full justify-between">
        <div className="flex flex-col w-full gap-4">
          <p>
            {moment(timeStart).locale("vi").format("LLLL")} {timeEnd && " - "}
            {timeEnd && moment(timeEnd).locale("vi").format("LLLL")} | {address}
          </p>
          <div className="flex justify-between">
            <h6
              onClick={handleLoginCompetition}
              className="text-2xl font-semibold cursor-pointer hover:text-orange-f04c23"
            >
              {title}
            </h6>
            <div className="flex flex-col gap-4">
              <div className="flex items-center w-full md:w-auto gap-2 group text-xl">
                <span
                  onClick={handleLoginCompetition}
                  className="hover:text-orange-f04c23 cursor-pointer font-medium"
                >
                  Bắt đầu
                </span>
                <FiArrowRight className="font-bold text-xl group-hover:translate-x-1 transition-all" />
              </div>

              <Link
                href={`/competition/answer?id=${competitionId}`}
                className="flex items-center w-full md:w-auto gap-2 group"
              >
                <span className="hover:text-orange-f04c23 cursor-pointer font-medium">
                  Xem kết quả
                </span>
                <FiArrowRight className="font-bold text-xl group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg overflow-hidden">
        {/* <Image
          src={`data:image/jpeg;base64, ${image}`}
          alt=""
          className="w-full"
          width={140}
          height={140}
        /> */}

        <Image
          src={`https://drive.google.com/uc?export=view&id=${image}`}
          alt=""
          className="w-full"
          width={2048}
          height={2048}
        />
      </div>
    </div>
  );
};

export default CompetitionItem;
