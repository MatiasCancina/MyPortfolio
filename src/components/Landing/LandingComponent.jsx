import React from "react";
import SwitchTheme from "../switches/SwitchTheme";
import LanguageSwitcher from "../switches/LanguageSwitcher";
import LinkBtn from "./linkBtn.jsx/LinkBtn";

const LandingComponent = () => {
  return (
    <div className="flex flex-col items-center min-h-screen justify-center">
      <div className="flex absolute top-10 sm:top-20 xl:top-10 items-center gap-5 sm:gap-10">
        <SwitchTheme />
        <LanguageSwitcher />
      </div>
      <div className="flex flex-col items-center justify-center text-center 2xl:top-0">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray100 dark:text-black">
          Hi! I'm Mati
          <span className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl text-blue100 dark:text-blue1000">
            .
          </span>
        </h1>
        <span className="text-lg sm:text-xl xl:text-2xl 2xl:text-3xl font-black mt-3 sm:mt-4 xl:mt-5 2xl:mt-6 text-blue100 dark:text-blue1000">
          Full Stack Developer
        </span>
      </div>
      <LinkBtn />
    </div>
  );
};

export default LandingComponent;
