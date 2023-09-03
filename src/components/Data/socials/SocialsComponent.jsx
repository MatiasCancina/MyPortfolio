"use client";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";
import Photo3D from "../../../utils/images/photo3d2.jpg";
import FormContainer from "@/components/emailForm/FormComponent";

const SocialsComponent = () => {
  return (
    <>
      <div className="flex flex-col justify-center bg-gray-400 rounded-3xl p-8">
        <div className="flex justify-center items-center">
          {/* <a href="mailto:cancinamatias@gmail.com"> */}
            {/* <FiMail className="hover:scale-110 duration-100 text-7xl cursor-pointer" /> */}
        <FormContainer/>
          {/* </a> */}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-gray-400 rounded-3xl p-8">
        <a href="https://www.linkedin.com/in/matiascancina/" target="_blank">
          <FaLinkedin className="hover:scale-110 duration-100 text-7xl cursor-pointer" />
        </a>
      </div>
      <div className="flex flex-col justify-center items-center bg-gray-400 rounded-3xl p-8">
        <a href="https://github.com/MatiasCancina" target="_blank">
          <BsGithub className="hover:scale-110 duration-100 text-9xl cursor-pointer" />
        </a>
      </div>
      <div className="flex justify-center items-center bg-gray-400 rounded-3xl">
        <Image src={Photo3D} alt="photo" className="w-[260px] rounded-3xl" />
      </div>
    </>
  );
};

export default SocialsComponent;
