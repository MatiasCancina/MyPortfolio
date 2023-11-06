import React from "react";
import { FiDownload } from "react-icons/fi";
import { Tooltip } from "@nextui-org/react";

const AboutMeComponentES = () => {
  return (
    <div className="bg-blue300 dark:bg-blue800 rounded-3xl col-span-4 xl:col-span-3 p-8">
      <div className="flex items-center">
        <h1 className="text-base sm:text-lg md:text-xl xl:text-2xl font-semibold text-black dark:text-gray100">
          Matías Cancina
        </h1>
        <Tooltip content={"Descargar CV (Español)"} color="primary">
          <a
            className="outline-none"
            download href="/assets/CV Matias Cancina.pdf"
          >
            <FiDownload className="text:xl sm:text-2xl text-black dark:text-gray100 cursor-pointer lg:hover:scale-125 duration-200 mx-4" />
          </a>
        </Tooltip>
      </div>
      <p className="font-medium text-xs sm:text-base xl:text-lg p-1 sm:p-4 text-black dark:text-gray100">
        Soy un
        <strong className="mx-1">Desarrollador Full Stack</strong>
        con experiencia en
        <strong className="mx-1">Front-End</strong>y
        <strong className="mx-1">Back-End</strong>
        desde 2022. Mi pasión es crear experiencias digitales excepcionales,
        cuidando cada detalle. Me destaco por mantenerme al día con las últimas
        tendencias y herramientas de desarrollo.
      </p>
    </div>
  );
};

export default AboutMeComponentES;
