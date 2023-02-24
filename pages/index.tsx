import Categories from "@/components/main/category/Categories";
import Courses from "@/components/main/course/Courses";
import Events from "@/components/main/events/Events";
import Intro from "@/components/main/Intro";
import Prices from "@/components/main/price/Prices";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>KD Educode</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <main className="mt-[170px] bg-gray-edeef3 w-screen overflow-x-hidden">
        <Intro />
        {/* <Categories /> */}
        <Courses />
        <Events />
        <Prices />
      </main>
    </>
  );
}
