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
  competitionId: any;
};

const CompetitionItem = ({
  address,
  title,
  image,
  timeStart,
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
            {moment(timeStart).locale("vi").format("LLLL")} | {address}
          </p>
          <div className="flex justify-between">
            <h6 className="text-2xl font-semibold cursor-pointer hover:text-orange-f04c23">
              {title}
            </h6>
            <div className="flex items-center w-full md:w-auto gap-2 group">
              <span
                onClick={handleLoginCompetition}
                className="hover:text-orange-f04c23 cursor-pointer font-medium"
              >
                Bắt đầu
              </span>
              <FiArrowRight className="font-bold text-xl group-hover:translate-x-1 transition-all" />
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg overflow-hidden">
        <Image
          src={`data:image/jpeg;base64, ${image}`}
          alt=""
          className="w-full"
          width={140}
          height={140}
        />
      </div>
    </div>
  );
};

export default CompetitionItem;
