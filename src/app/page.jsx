"use client";
import { DataComponent } from "@/components/Data/DataComponent";
import FooterComponent from "@/components/Footer/FooterComponent";
import LandingComponent from "@/components/Landing/LandingComponent";
import { useSelector } from "react-redux";

export default function Home() {
  return (
    <main>
      <div
        className={`flex w-full min-h-screen relative items-center justify-center bg-[url('../utils/images/photo3dlight2.jpg')] dark:bg-[url('../utils/images/photo3ddark1.jpg')] flex-col 2xl:p-24 bg-no-repeat bg-cover transition-all ease-in-out duration-500`}
      >
        <LandingComponent />
        <DataComponent />
      </div>
      <FooterComponent />
    </main>
  );
}
