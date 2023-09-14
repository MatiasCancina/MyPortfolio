import React from "react";

const AboutMeComponentES = () => {
  return (
    <div className="bg-blue300 dark:bg-blue800 rounded-3xl col-span-4 xl:col-span-3 p-8">
      <h1 className="text-base sm:text-lg md:text-xl xl:text-2xl font-semibold dark:text-gray100">
        Matías Cancina
      </h1>
      <p className="font-medium text-xs sm:text-base xl:text-lg p-1 sm:p-4 dark:text-gray100">
        Soy un
        <span className="font-semibold text-xs sm:text-base xl:text-lg p-1 sm:p-4 dark:text-gray100">
          Desarrollador Full Stack
        </span>
        con experiencia en
        <span className="font-semibold text-xs sm:text-base xl:text-lg p-1 sm:p-4 dark:text-gray100">
          Front-End
        </span>
        y
        <span className="font-semibold text-xs sm:text-base xl:text-lg p-1 sm:p-4 dark:text-gray100">
          Back-End
        </span>
        desde 2022. Mi pasión es crear experiencias digitales excepcionales,
        cuidando cada detalle. Me destaco por mantenerme al día con las últimas
        tendencias y herramientas de desarrollo.
      </p>
    </div>
  );
};

export default AboutMeComponentES;
