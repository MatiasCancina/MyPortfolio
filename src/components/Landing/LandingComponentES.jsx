import React from "react";
import SwitchTheme from "../switches/SwitchTheme";
import LanguageSwitcher from "../switches/LanguageSwitcher";
import LinkBtn from "./linkBtn.jsx/LinkBtn";

const LandingComponentES = () => {
  return (
    <div className="flex flex-col items-center min-h-[950px] justify-center">
      <div className="flex absolute top-20 items-center gap-10">
        <SwitchTheme />
        <LanguageSwitcher />
      </div>
      <div className="flex flex-col items-center justify-center">
        <>
          <h1 className="text-6xl font-bold text-gray100 dark:text-black">
            ¡Hola! Soy Matías Cancina
            <span className="text-8xl text-blue100 dark:text-blue1000">.</span>
          </h1>
        </>
        <span className="text-xl font-black mt-4 text-blue100 dark:text-blue1000">
          Desarollador Full Stack
        </span>
      </div>
      <LinkBtn />
    </div>
  );
};

export default LandingComponentES;
