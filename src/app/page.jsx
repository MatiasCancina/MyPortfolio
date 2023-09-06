"use client";
import { DataComponent } from "@/components/Data/DataComponent";
import DataComponentES from "@/components/Data/DataComponentES";
import FooterComponent from "@/components/Footer/FooterComponent";
import LandingComponent from "@/components/Landing/LandingComponent";
import LandingComponentES from "@/components/Landing/LandingComponentES";
import { useSelector } from "react-redux";

export default function Home() {
  const language = useSelector((state) => state.language);

  return (
    <main>
      <div className={`flex w-full min-h-screen relative items-center justify-center bg-[url('../utils/images/photo3dlight2.jpg')] dark:bg-[url('../utils/images/photo3ddark1.jpg')] flex-col 2xl:p-24 bg-no-repeat bg-cover transition-all ease-in-out duration-500`}>
        {language === "en" ? (
          <>
            <LandingComponent />
            <DataComponent />
          </>
        ) : (
          <>
            <LandingComponentES />
            <DataComponentES />
          </>
        )}
      </div>
      <FooterComponent />
    </main>
  );
}
