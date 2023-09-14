import React from "react";

const AboutMeComponent = () => {
  return (
    <div className="bg-blue300 dark:bg-blue800 rounded-3xl col-span-4 xl:col-span-3 p-8">
      <h1 className="text-base sm:text-lg md:text-xl xl:text-2xl font-semibold dark:text-gray100">
        Matías Cancina
      </h1>
      <p className="font-medium text-xs sm:text-base xl:text-lg p-1 sm:p-4 dark:text-gray100">
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
