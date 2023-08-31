import React from "react";
import SwitchTheme from "../switches/SwitchTheme";
import LanguageSwitcher from "../switches/LanguageSwitcher";
import LinkBtn from "./linkBtn.jsx/LinkBtn";

const LandingComponentES = () => {
  return (
    <div className="flex flex-col items-center min-h-[1000px] justify-center">
      <div className="flex absolute top-20 items-center gap-10">
        <SwitchTheme />
        <LanguageSwitcher />
      </div>{" "}
      <h1 className="text-6xl font-semibold dark:text-white">
        ¡Hola! Soy Matías Cancina
        <span className="text-8xl text-sky-500">.</span>
      </h1>
      <LinkBtn />
    </div>
  );
};

export default LandingComponentES;
