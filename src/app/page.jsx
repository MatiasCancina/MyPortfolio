"use client";
import LandingComponent from "@/components/Landing/LandingComponent";
import LandingComponentES from "@/components/Landing/LandingComponentES";
import LanguageSwitcher from "@/components/switches/LanguageSwitcher";
import SwitchTheme from "@/components/switches/SwitchTheme";
import { useSelector } from "react-redux";

export default function Home() {
  const language = useSelector((state) => state.language);

  return (
    <main className="flex bg-yellow-100 dark:bg-slate-700 flex-col p-24">
      <div className="flex items-center justify-between mx-[700px]">
        <SwitchTheme />
        <LanguageSwitcher />
      </div>
      {language === "en" ? <LandingComponent /> : <LandingComponentES />}
    </main>
  );
}
