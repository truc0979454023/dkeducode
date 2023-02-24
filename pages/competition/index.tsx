import CompetitionItem from "@/components/competition/CompetitionItem";
import Head from "next/head";
import { useEffect, useState } from "react";
import { getListCompetition } from "../api/competition/competition";

type Props = {};

const Competition = (props: Props) => {
  const [competitions, setCompetition] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await getListCompetition();
      console.log(res);
      setCompetition(res.data.data);
    }
    fetchData();
  }, []);

  return (
    <div className="mt-[170px] bg-gray-edeef3 min-h-screen">
      <Head>
        <title>Competition </title>
      </Head>
      <section className=" flex items-center pt-16 pb-32 ">
        <div className="max-w-screen-xl h-full mx-auto w-[95%] flex flex-col gap-16 items-center justify-start">
          <div className="flex flex-col justify-self-start justify-center items-center gap-3">
            <h2 className="text-[36px] leading-[1] capitalize font-bold">
              Cuộc thi hiện tại
            </h2>
            <p className="">Chúng tôi có 1 cuộc thi.</p>
          </div>

          <div className="flex flex-col gap-4 w-full h-full items-center relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 z-0 -translate-y-1/2 scale-125 w-full h-full bg-event bg-no-repeat bg-center bg-contain"></div>
            {competitions.map((competition: any) => (
              <CompetitionItem
                key={competition.examID}
                address={competition.address}
                title={competition.title}
                timeStart={competition.timestart}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// export async function getServerSideProps() {
//   const res = await getListExamSubject();
//   console.log(res);
//   return {
//     // props: {
//     //   products: res.products,
//     //   result: res.result,
//     // },
//   };
// }

export default Competition;
