import { Inter } from "@next/font/google";
import Head from "next/head";
import MainHome from "../Components/Home/MainHome/MainHome";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Super Hostel Portal</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainHome></MainHome>
      </main>
    </>
  );
}
