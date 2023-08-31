"use client";
import { DataComponent } from "@/components/Data/DataComponent";
import DataComponentES from "@/components/Data/DataComponentES";
import LandingComponent from "@/components/Landing/LandingComponent";
import LandingComponentES from "@/components/Landing/LandingComponentES";
import { useSelector } from "react-redux";

export default function Home() {
  const language = useSelector((state) => state.language);

  return (
    <main className="flex min-h-screen relative items-center justify-center  bg-yellow-100 dark:bg-slate-700 flex-col p-24">
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
    </main>
  );
}
