import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import FormContainer from "@/components/Data/socials/emailForm/DataFormComponent";

const SocialsComponent = () => {
  return (
    <div className="col-span-1 my-2 lg:my-0 row-span-1 lg:col-span-2 lg:row-span-2">
      <div className="grid gap-3 lg:gap-6 2xl:gap-9 w-full">
        <a className="row-span-1 lg:mt-0 lg:col-span-2 bg-gradient-to-b from-blue200 to-blue500 dark:from-blue800 dark:to-black rounded-3xl p-3 lg:p-8 lg:hover:scale-105 duration-150 flex justify-center items-center">
          <FormContainer />
        </a>
        <a href="https://www.linkedin.com/in/matiascancina/" target="_blank">
          <div className="lg:hover:scale-110 duration-150 row-span-1 col-span-1 flex justify-center items-center bg-gradient-to-b from-blue200 to-blue500 dark:from-blue800 dark:to-black  rounded-3xl p-3 lg:p-8">
            <FaLinkedin className="text-xl sm:text-3xl md:text-5xl xl:text-7xl cursor-pointer text-black dark:text-gray100" />
          </div>
        </a>
        <a href="https://github.com/MatiasCancina" target="_blank">
          <div className="lg:hover:scale-110 duration-150 row-span-1 col-span-1 flex justify-center items-center bg-gradient-to-b from-blue200 to-blue500 dark:from-blue800 dark:to-black  rounded-3xl p-3 lg:p-8">
            <BsGithub className="text-xl sm:text-3xl md:text-5xl xl:text-7xl cursor-pointer text-black dark:text-gray100" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default SocialsComponent;
