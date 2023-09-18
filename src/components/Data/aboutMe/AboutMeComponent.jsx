import React from "react";
import { FiDownload } from "react-icons/fi";
import { Tooltip } from "@nextui-org/react";

const AboutMeComponent = () => {
  return (
    <div className="bg-blue300 dark:bg-blue800 rounded-3xl col-span-4 xl:col-span-3 p-8">
      <div className="flex items-center">
        <h1 className="text-base sm:text-lg md:text-xl xl:text-2xl font-semibold text-black dark:text-gray100">
          Matías Cancina
        </h1>
        <Tooltip content={"Descargar CV (Español)"} color="primary">
          <a download href="/assets/CV Matias Cancina.pdf">
            <FiDownload className="text:xl sm:text-2xl text-black dark:text-gray100 cursor-pointer lg:hover:scale-125 duration-200 mx-4" />
          </a>
        </Tooltip>
      </div>
      <p className="font-medium text-xs sm:text-base xl:text-lg p-1 sm:p-4 text-black dark:text-gray100">
        I am an Argentinian
        <strong className="mx-1">Full Stack Developer</strong>
        with experience in
        <strong className="mx-1">Front-End</strong>
        and
        <strong className="mx-1">Back-End</strong>
        since 2022. My passion is to create exceptional digital experiences,
        paying attention to every detail. I stand out for staying up to date
        with the latest development trends and tools.
      </p>
    </div>
  );
};

export default AboutMeComponent;
