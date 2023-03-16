import Loading from "@/components/common/loading/Loading";
import { getTotalScore } from "@/pages/api/competition/competition";
import Cookies from "js-cookie";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type Props = {};

const Answer = (props: Props) => {
  const token = Cookies.get("token");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await getTotalScore(Number(router.query.id), token);
        setLoading(false);
        setAnswers(res.data);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
    fetchData();
  }, [router, token]);

  return (
    <div className="mt-[170px] bg-gray-edeef3 min-h-screen flex items-center">
      <Head>
        <title>Answer</title>
      </Head>
      <div className="max-w-screen-xl h-screen m-auto w-[95%] flex flex-col gap-16 items-center justify-start pt-10 pb-32">
        <h1 className="text-5xl font-bold uppercase">Kết quả cuộc thi</h1>
        {loading ? (
          <Loading size={240} />
        ) : (
          <>
            {answers.length > 0 ? (
              <div className="relative h-full w-full hideSrcoll">
                <table className="w-full text-sm text-left text-gray-900 ">
                  <thead className="text-md sticky top-0 bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Mã dự thi
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Mã thí sinh
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Tên thí sinh
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Điểm trang 1
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Điểm trang 2
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Điểm trang 3
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Điểm trang 4
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Điểm trang 5
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Tổng điểm
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {answers.map((answer: any) => (
                      <>
                        <tr
                          key={answer.examnumber}
                          className="bg-white border-b "
                        >
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            {answer.examnumber}
                          </th>
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            {answer.CandidatesID}
                          </th>
                          <td className="px-6 py-4">{answer.e_name}</td>
                          <td className="px-6 py-4">{answer.game[0]?.point}</td>
                          <td className="px-6 py-4">
                            {answer.game[1]?.point ? answer.game[1]?.point : 0}
                          </td>
                          <td className="px-6 py-4">
                            {answer.game[2]?.point ? answer.game[2]?.point : 0}
                          </td>
                          <td className="px-6 py-4">
                            {answer.game[3]?.point ? answer.game[3]?.point : 0}
                          </td>
                          <td className="px-6 py-4">
                            {answer.game[4]?.point ? answer.game[4]?.point : 0}
                          </td>
                          <td className="px-6 py-4">{answer.total_score}</td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <h2 className="text-3xl text-red-500 ">Chưa có kết quả thi</h2>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Answer;
