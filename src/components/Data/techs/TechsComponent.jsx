import React from "react";
import { FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiMysql,
} from "react-icons/si";
import { GrNode } from "react-icons/gr";
import { RiJavascriptFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

const TechsComponent = () => {
  return (
    <div className="grid grid-cols-4 place-items-center bg-gray-400 rounded-3xl col-span-2 row-span-2 p-6">
      <a
        href="https://developer.mozilla.org/es/docs/Web/JavaScript"
        target="_blank"
      >
        <RiJavascriptFill className="text-6xl cursor-pointer" />
      </a>
      <a
        href="https://developer.mozilla.org/es/docs/Glossary/HTML5"
        target="_blank"
      >
        <SiHtml5 className="text-6xl cursor-pointer" />
      </a>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/CSS"
        target="_blank"
      >
        <SiCss3 className="text-6xl cursor-pointer" />
      </a>
      <a
        href="https://legacy.reactjs.org/docs/getting-started.html"
        target="_blank"
      >
        <FaReact className="text-6xl cursor-pointer " />
      </a>
      <a href="https://es.redux.js.org/" target="_blank">
        <SiRedux className="text-6xl cursor-pointer" />
      </a>
      <a href="https://nextjs.org/docs" target="_blank">
        <SiNextdotjs className="text-6xl cursor-pointer" />
      </a>
      <a href="https://v2.tailwindcss.com/docs" target="_blank">
        <SiTailwindcss className="text-6xl cursor-pointer" />
      </a>
      <a href="https://expressjs.com/es/" target="_blank">
        <SiExpress className="text-6xl cursor-pointer" />
      </a>
      <a href="https://nodejs.org/en/docs" target="_blank">
        <GrNode className="text-6xl cursor-pointer" />
      </a>
      <a href="https://docs.oracle.com/en/java/" target="_blank">
        <FaJava className="text-6xl cursor-pointer" />
      </a>
      <a href="https://www.postgresql.org/docs/" target="_blank">
        <BiLogoPostgresql className="text-6xl cursor-pointer" />
      </a>
      <a href="https://dev.mysql.com/doc/" target="_blank">
        <SiMysql className="text-6xl cursor-pointer" />
      </a>
    </div>
  );
};

export default TechsComponent;
