"use client";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";
import Photo3D from '../../../utils/images/photo3d2.jpg'

const SocialsComponent = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-gray-400 rounded-3xl p-8">
        <FiMail className="text-7xl" />
      </div>
      <div className="flex justify-center items-center bg-gray-400 rounded-3xl p-8">
        <FaLinkedin className="text-7xl" />
      </div>
      <div className="flex justify-center items-center bg-gray-400 rounded-3xl p-8">
        <BsGithub className="text-9xl" />
      </div>
      <div className="flex justify-center items-center bg-gray-400 rounded-3xl">
        <Image src={Photo3D} alt='photo' className="w-[260px] rounded-3xl"/>
      </div>
    </>
  );
};

export default SocialsComponent;
