"use client";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import projects from "@/components/Data/projects/projects";
import { useCaroussel } from "@/utils/hooks/useCaroussel";

const MyCarousel = () => {
  const { position, onClickNext, onClickPrev } = useCaroussel(projects);

  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-blue200 to-blue500 dark:from-blue800 dark:to-black rounded-3xl col-span-4 row-span-4 p-1 sm:p-6">
      {projects.length > 1 ? (
        <>
          <IoIosArrowBack
            className="lg:hover:scale-125 duration-100 text-5xl cursor-pointer text-black dark:text-gray100"
            onClick={onClickPrev}
          />
          {projects[position]}
          <IoIosArrowForward
            onClick={onClickNext}
            className="lg:hover:scale-125 duration-100 text-5xl cursor-pointer text-black dark:text-gray100"
          />
        </>
      ) : (
        projects
      )}
    </div>
  );
};

export default MyCarousel;
