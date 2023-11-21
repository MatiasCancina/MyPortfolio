'use client'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useCaroussel } from "@/utils/hooks/useCaroussel";
import experiences from "./experiences";

const ExperienceContainer = () => {
    const { position, onClickNextExperiences, onClickPrevExperiences } =
    useCaroussel();

  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-blue200 to-blue500 dark:from-blue800 dark:to-black rounded-3xl col-span-4 row-span-4 p-1 sm:p-6">
      {experiences.length > 1 ? (
        <>
          <IoIosArrowBack
            className="lg:hover:scale-125 duration-100 text-5xl cursor-pointer text-black dark:text-gray100"
            onClick={onClickPrevExperiences}
          />
          {experiences[position]}
          <IoIosArrowForward
            onClick={onClickNextExperiences}
            className="lg:hover:scale-125 duration-100 text-5xl cursor-pointer text-black dark:text-gray100"
          />
        </>
      ) : (
        experiences
      )}
    </div>
  )
}

export default ExperienceContainer