import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import FormContainer from "@/components/Data/socials/emailForm/FormComponent";

const SocialsComponent = () => {
  return (
    <div className="col-span-2">
      <div className="grid gap-6">
        <div className="row-span-1 col-span-2 bg-blue300 dark:bg-blue800 rounded-3xl p-8 hover:scale-105 duration-150 flex justify-center items-center">
          <FormContainer />
        </div>
        <div className="hover:scale-110 duration-150 row-span-1 col-span-1 flex justify-center items-center bg-blue300 dark:bg-blue800 rounded-3xl p-8">
          <a href="https://www.linkedin.com/in/matiascancina/" target="_blank">
            <FaLinkedin className="text-8xl cursor-pointer dark:text-gray100" />
          </a>
        </div>
        <div className="hover:scale-110 duration-150 row-span-1 col-span-1 flex justify-center items-center bg-blue300 dark:bg-blue800 rounded-3xl p-8">
          <a href="https://github.com/MatiasCancina" target="_blank">
            <BsGithub className="text-9xl cursor-pointer dark:text-gray100" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialsComponent;
