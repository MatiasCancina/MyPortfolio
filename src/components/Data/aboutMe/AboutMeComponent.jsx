import React from "react";
import { FiDownload } from "react-icons/fi";
import { Tooltip } from "@nextui-org/react";
import { useSelector } from "react-redux";

const AboutMeComponent = () => {
  const language = useSelector((state) => state.language);

  return (
    <div className="bg-blue300 dark:bg-blue800 rounded-3xl col-span-4 xl:col-span-3 p-8">
      <div className="flex items-center">
        <h1 className="text-base sm:text-lg md:text-xl xl:text-2xl font-semibold text-black dark:text-gray100">
          Matías Cancina
        </h1>
        {language === "en" ? (
          <Tooltip content={"Download Resume (English)"} color="primary">
            <a
              download
              href="/assets/Matias Cancina Resume.pdf"
              className="outline-none"
            >
              <FiDownload className="text:xl sm:text-2xl text-black dark:text-gray100 cursor-pointer lg:hover:scale-125 duration-200 mx-4" />
            </a>
          </Tooltip>
        ) : (
          <Tooltip content={"Descargar CV (Español)"} color="primary">
            <a
              className="outline-none"
              download
              href="/assets/CV Matias Cancina.pdf"
            >
              <FiDownload className="text:xl sm:text-2xl text-black dark:text-gray100 cursor-pointer lg:hover:scale-125 duration-200 mx-4" />
            </a>
          </Tooltip>
        )}
      </div>
      {language === "en" ? (
        <p className="font-medium text-xs sm:text-base xl:text-lg p-1 sm:p-4 text-black dark:text-gray100">
          I am an Argentinian
          <strong className="mx-1">Front-End Developer</strong>
          who has been making progress in the programming environment since
          2022. My passion is to create exceptional digital experiences, paying
          attention to every detail. I stand out for staying up to date with the
          latest development trends and tools.
        </p>
      ) : (
        <p className="font-medium text-xs sm:text-base xl:text-lg p-1 sm:p-4 text-black dark:text-gray100">
          Soy un
          <strong className="mx-1">Desarrollador Front-End</strong>
          argentino que viene progresando en el entorno de la programacion desde
          2022. Mi pasión es crear experiencias digitales excepcionales,
          cuidando cada detalle. Me destaco por mantenerme al día con las
          últimas tendencias y herramientas de desarrollo.
        </p>
      )}
    </div>
  );
};

export default AboutMeComponent;
