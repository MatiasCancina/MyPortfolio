"use client";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import projects from "@/components/Data/projects/projects";
import { useCaroussel } from "@/utils/hooks/useCaroussel";

const MyCarousel = () => {
  const { position, onClickNextProjects, onClickPrevProjects } = useCaroussel();

  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-blue200 to-blue500 dark:from-blue800 dark:to-black rounded-3xl col-span-4 row-span-4 p-6">
      <IoIosArrowBack
        className="lg:hover:scale-125 duration-100 text-5xl cursor-pointer text-black dark:text-gray100"
        onClick={onClickPrevProjects}
      />
      {projects[position]}
      <IoIosArrowForward
        onClick={onClickNextProjects}
        className="lg:hover:scale-125 duration-100 text-5xl cursor-pointer text-black dark:text-gray100"
      />
    </div>
  );
};

export default MyCarousel;
