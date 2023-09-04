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
    <div className="grid grid-cols-4 place-items-center bg-gray-400 rounded-3xl col-span-2 row-span-2 p-6 bg-blue300 dark:bg-blue800">
      <a
        href="https://developer.mozilla.org/es/docs/Web/JavaScript"
        target="_blank"
      >
        <RiJavascriptFill className="hover:scale-125 duration-100 text-6xl cursor-pointer dark:text-gray100" />
      </a>
      <a
        href="https://developer.mozilla.org/es/docs/Glossary/HTML5"
        target="_blank"
      >
        <SiHtml5 className="hover:scale-125 duration-100 text-6xl cursor-pointer dark:text-gray100" />
      </a>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/CSS"
        target="_blank"
      >
        <SiCss3 className="hover:scale-125 duration-100 text-6xl cursor-pointer dark:text-gray100" />
      </a>
      <a
        href="https://legacy.reactjs.org/docs/getting-started.html"
        target="_blank"
      >
        <FaReact className="hover:scale-125 duration-100 text-6xl cursor-pointer dark:text-gray100 " />
      </a>
      <a href="https://es.redux.js.org/" target="_blank">
        <SiRedux className="hover:scale-125 duration-100 text-6xl cursor-pointer dark:text-gray100" />
      </a>
      <a href="https://nextjs.org/docs" target="_blank">
        <SiNextdotjs className="hover:scale-125 duration-100 text-6xl cursor-pointer dark:text-gray100" />
      </a>
      <a href="https://v2.tailwindcss.com/docs" target="_blank">
        <SiTailwindcss className="hover:scale-125 duration-100 text-6xl cursor-pointer dark:text-gray100" />
      </a>
      <a href="https://expressjs.com/es/" target="_blank">
        <SiExpress className="hover:scale-125 duration-100 text-6xl cursor-pointer dark:text-gray100" />
      </a>
      <a href="https://nodejs.org/en/docs" target="_blank">
        <GrNode className="hover:scale-125 duration-100 text-6xl cursor-pointer dark:text-gray100" />
      </a>
      <a href="https://docs.oracle.com/en/java/" target="_blank">
        <FaJava className="hover:scale-125 duration-100 text-6xl cursor-pointer dark:text-gray100" />
      </a>
      <a href="https://www.postgresql.org/docs/" target="_blank">
        <BiLogoPostgresql className="hover:scale-125 duration-100 text-6xl cursor-pointer dark:text-gray100" />
      </a>
      <a href="https://dev.mysql.com/doc/" target="_blank">
        <SiMysql className="hover:scale-125 duration-100 text-6xl cursor-pointer dark:text-gray100" />
      </a>
    </div>
  );
};

export default TechsComponent;
