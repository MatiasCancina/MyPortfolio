"use client";
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import projects from "@/components/Data/projects/projects";

const MyCarousel = () => {
  const [position, setPosition] = useState(0);

  const onClickNext = () => {
    if (position < projects.length - 1) {
      setPosition(position + 1);
    } else {
      setPosition(0);
    }
  };

  const onClickPrev = () => {
    if (position > 0) {
      setPosition(position - 1);
    } else {
      setPosition(projects.length - 1);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-blue200 to-blue500 dark:from-blue800 dark:to-black rounded-3xl col-span-4 row-span-4 p-6">
      <IoIosArrowBack
        className="lg:hover:scale-125 duration-100 text-5xl cursor-pointer text-black dark:text-gray100"
        onClick={onClickPrev}
      />
      {projects[position]}
      <IoIosArrowForward
        onClick={onClickNext}
        className="lg:hover:scale-125 duration-100 text-5xl cursor-pointer text-black dark:text-gray100"
      />
    </div>
  );
};

export default MyCarousel;
