import Loading from "@/components/common/loading/Loading";
import CompetitionItem from "@/components/competition/CompetitionItem";
import Head from "next/head";
import { useEffect, useState } from "react";
import { getListCompetition } from "../api/competition/competition";

type Props = {};

const Competition = (props: Props) => {
  const [competitions, setCompetition] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await getListCompetition();
        setLoading(false);
        setCompetition(res.data.data);
      } catch (error) {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="mt-[170px] bg-gray-edeef3 min-h-screen">
      <Head>
        <title>Competition</title>
      </Head>
      <section className=" flex items-center pt-16 pb-32 ">
        {loading ? (
          <Loading size={240} />
        ) : (
          <div className="max-w-screen-xl h-full mx-auto w-[95%] flex flex-col gap-16 items-center justify-start">
            <div className="flex flex-col justify-self-start justify-center items-center gap-3">
              <h2 className="text-[36px] leading-[1] capitalize font-bold">
                Cuộc thi hiện tại
              </h2>
              <p className="">
                {competitions.length > 0
                  ? `Chúng tôi có ${
                      competitions.filter(
                        (competition: any) => competition?.event_type === "TD"
                      ).length
                    } cuộc thi.`
                  : "Hiện tại không có cuộc thi nào."}
              </p>
            </div>

            <div className="flex flex-col gap-4 w-full h-full items-center relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 z-0 -translate-y-1/2 scale-125 w-full h-full bg-event bg-no-repeat bg-center bg-contain"></div>
              {competitions.map(
                (competition: any) =>
                  competition.event_type === "TD" && (
                    <CompetitionItem
                      key={competition.examID}
                      image={competition.baseimg}
                      address={competition.address}
                      title={competition.title}
                      timeStart={competition.timestart}
                      timeEnd={competition.timeend}
                      competitionId={competition.examID}
                    />
                  )
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Competition;
