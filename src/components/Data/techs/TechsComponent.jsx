import React from "react";
import { FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiMysql
} from "react-icons/si";
import { GrNode } from "react-icons/gr";
import { RiJavascriptFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

const TechsComponent = () => {
  return (
    <div className="grid grid-cols-4 place-items-center bg-gray-400 rounded-3xl col-span-2 row-span-2 p-6">
      <RiJavascriptFill className="text-6xl" />
      <SiHtml5 className="text-6xl" />
      <SiCss3 className="text-6xl" />
      <FaReact className="text-6xl " />
      <SiRedux className="text-6xl" />
      <SiNextdotjs className="text-6xl" />
      <SiTailwindcss className="text-6xl" />
      <SiExpress className="text-6xl" />
      <GrNode className="text-6xl" />
      <FaJava className="text-6xl" />
      <BiLogoPostgresql className="text-6xl" />
      <SiMysql className="text-6xl" />
    </div>
  );
};

export default TechsComponent;
