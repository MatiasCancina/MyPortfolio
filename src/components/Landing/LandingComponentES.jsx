import React from "react";
import SwitchTheme from "./switches/SwitchTheme";
import LanguageSwitcher from "./switches/LanguageSwitcher";
import LinkBtn from "./linkBtn.jsx/LinkBtn";
import { motion } from "framer-motion";

const LandingComponentES = () => {
  return (
    <div className="flex flex-col items-center min-h-screen justify-center">
      <div className="flex absolute top-10 sm:top-20 xl:top-10 items-center gap-5 sm:gap-10">
        <SwitchTheme />
        <LanguageSwitcher />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray100 dark:text-black">
          ¡Hola! Soy Mati
          <span className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl text-blue100 dark:text-blue1000">
            .
          </span>
        </h1>
        <span className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl font-black mt-3 sm:mt-4 xl:mt-5 2xl:mt-6 text-blue100 dark:text-blue1000">
          Desarrollador Full Stack
        </span>
      </motion.div>
      <LinkBtn />
    </div>
  );
};

export default LandingComponentES;
