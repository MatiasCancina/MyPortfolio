"use client";
import React, { useState } from "react";
import proyects from "@/components/Data/proyects/proyects";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const ContainerProyects = () => {
  let [position, setPosition] = useState(0);

  const onClickNext = () => {
    if (position < proyects.length - 1) {
      setPosition(position + 1);
    } else {
      setPosition(0);
    }
  };

  const onClickPrev = () => {
    if (position > 0) {
      setPosition(position - 1);
    } else {
      setPosition(proyects.length - 1);
    }
  };

  return (
    <div className="flex items-center justify-center bg-blue300 dark:bg-blue800 rounded-3xl col-span-4 row-span-4 p-6">
      <IoIosArrowBack
        className="lg:hover:scale-125 duration-100 text-5xl cursor-pointer text-black dark:text-gray100"
        onClick={onClickPrev}
      />
      {proyects[position]}
      <IoIosArrowForward
        onClick={onClickNext}
        className="lg:hover:scale-125 duration-100 text-5xl cursor-pointer text-black dark:text-gray100"
      />
    </div>
  );
};

export default ContainerProyects;
