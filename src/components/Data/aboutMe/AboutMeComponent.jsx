import React from "react";

const AboutMeComponent = () => {
  return (
    <div className=" bg-blue300 dark:bg-blue800 rounded-3xl col-span-4 xl:col-span-3 p-8">
      <h1 className="text-base sm:text-lg md:text-xl xl:text-2xl font-semibold dark:text-gray100">Matías Cancina</h1>
      <p className="font-medium text-xs sm:text-base xl:text-lg p-4 dark:text-gray100">
        An Argentinian developer who is constantly involved in studying, enjoying
        learning new technologies, and improving the ones I already know, as
        well as helping and/or teaching with the knowledge I possess. There's always something more to learn.
      </p>
    </div>
  );
};

export default AboutMeComponent;
