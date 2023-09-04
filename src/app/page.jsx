"use client";
import { DataComponent } from "@/components/Data/DataComponent";
import DataComponentES from "@/components/Data/DataComponentES";
import FooterComponent from "@/components/Footer/FooterComponent";
import LandingComponent from "@/components/Landing/LandingComponent";
import LandingComponentES from "@/components/Landing/LandingComponentES";
import { useSelector } from "react-redux";
// import Photo3D from "../utils/images/photo3d2.jpg";

export default function Home() {
  const language = useSelector((state) => state.language);

  return (
    <main>
      <div className={`flex min-h-screen relative items-center justify-center bg-[url('../utils/images/photo3d2.jpg')] dark:bg-blue1000 flex-col p-24 bg-no-repeat bg-cover transition-all ease-in-out duration-500`}>
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
