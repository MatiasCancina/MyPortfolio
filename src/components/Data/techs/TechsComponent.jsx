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
import { Tooltip } from "@nextui-org/react";
import { FiArrowUpRight } from "react-icons/fi";

const TechsComponent = () => {
  return (
    <div className="grid grid-cols-4 lg:col-span-2 lg:row-span-2 place-items-center gap-1 sm:gap-5 md:gap-6 rounded-3xl p-3 sm:p-6 bg-gradient-to-b from-blue200 to-blue500 dark:from-blue800 dark:to-black">
      <Tooltip
        showArrow
        content={
          <div className="flex justify-center items-center">
            <p>JavaScript</p>
            <FiArrowUpRight />
          </div>
        }
        color="primary"
      >
        <a
          href="https://developer.mozilla.org/es/docs/Web/JavaScript"
          target="_blank"
        >
          <RiJavascriptFill className="hover:scale-125 duration-200 text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl cursor-pointer dark:text-gray100" />
        </a>
      </Tooltip>
      <Tooltip
        showArrow
        content={
          <div className="flex justify-center items-center">
            <p>HTML5</p>
            <FiArrowUpRight />
          </div>
        }
        color="primary"
      >
        <a
          href="https://developer.mozilla.org/es/docs/Glossary/HTML5"
          target="_blank"
        >
          <SiHtml5 className="hover:scale-125 duration-200 text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl cursor-pointer dark:text-gray100" />
        </a>
      </Tooltip>
      <Tooltip
        showArrow
        content={
          <div className="flex justify-center items-center">
            <p>CSS</p>
            <FiArrowUpRight />
          </div>
        }
        color="primary"
      >
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          target="_blank"
        >
          <SiCss3 className="hover:scale-125 duration-200 text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl cursor-pointer dark:text-gray100" />
        </a>
      </Tooltip>
      <Tooltip
        showArrow
        content={
          <div className="flex justify-center items-center">
            <p>React</p>
            <FiArrowUpRight />
          </div>
        }
        color="primary"
      >
        <a
          href="https://legacy.reactjs.org/docs/getting-started.html"
          target="_blank"
        >
          <FaReact className="hover:scale-125 duration-200 text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl cursor-pointer dark:text-gray100 " />
        </a>
      </Tooltip>
      <Tooltip
        showArrow
        content={
          <div className="flex justify-center items-center">
            <p>Redux</p>
            <FiArrowUpRight />
          </div>
        }
        color="primary"
      >
        <a href="https://es.redux.js.org/" target="_blank">
          <SiRedux className="hover:scale-125 duration-200 text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl cursor-pointer dark:text-gray100" />
        </a>
      </Tooltip>
      <Tooltip
        showArrow
        content={
          <div className="flex justify-center items-center">
            <p>NextJS</p>
            <FiArrowUpRight />
          </div>
        }
        color="primary"
      >
        <a href="https://nextjs.org/docs" target="_blank">
          <SiNextdotjs className="hover:scale-125 duration-200 text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl cursor-pointer dark:text-gray100" />
        </a>
      </Tooltip>
      <Tooltip
        showArrow
        content={
          <div className="flex justify-center items-center">
            <p>Tailwind</p>
            <FiArrowUpRight />
          </div>
        }
        color="primary"
      >
        <a href="https://v2.tailwindcss.com/docs" target="_blank">
          <SiTailwindcss className="hover:scale-125 duration-200 text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl cursor-pointer dark:text-gray100" />
        </a>
      </Tooltip>
      <Tooltip
        showArrow
        content={
          <div className="flex justify-center items-center">
            <p>ExpressJS</p>
            <FiArrowUpRight />
          </div>
        }
        color="primary"
      >
        <a href="https://expressjs.com/es/" target="_blank">
          <SiExpress className="hover:scale-125 duration-200 text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl cursor-pointer dark:text-gray100" />
        </a>
      </Tooltip>
      <Tooltip
        showArrow
        content={
          <div className="flex justify-center items-center">
            <p>NodeJS</p>
            <FiArrowUpRight />
          </div>
        }
        color="primary"
      >
        <a href="https://nodejs.org/en/docs" target="_blank">
          <GrNode className="hover:scale-125 duration-200 text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl cursor-pointer dark:text-gray100" />
        </a>
      </Tooltip>
      <Tooltip
        showArrow
        content={
          <div className="flex justify-center items-center">
            <p>Java</p>
            <FiArrowUpRight />
          </div>
        }
        color="primary"
      >
        <a href="https://docs.oracle.com/en/java/" target="_blank">
          <FaJava className="hover:scale-125 duration-200 text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl cursor-pointer dark:text-gray100" />
        </a>
      </Tooltip>
      <Tooltip
        showArrow
        content={
          <div className="flex justify-center items-center">
            <p>PostgreSQL</p>
            <FiArrowUpRight />
          </div>
        }
        color="primary"
      >
        <a href="https://www.postgresql.org/docs/" target="_blank">
          <BiLogoPostgresql className="hover:scale-125 duration-200 text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl cursor-pointer dark:text-gray100" />
        </a>
      </Tooltip>
      <Tooltip
        showArrow
        content={
          <div className="flex justify-center items-center">
            <p>MySQL</p>
            <FiArrowUpRight />
          </div>
        }
        color="primary"
      >
        <a href="https://dev.mysql.com/doc/" target="_blank">
          <SiMysql className="hover:scale-125 duration-200 text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl cursor-pointer dark:text-gray100" />
        </a>
      </Tooltip>
    </div>
  );
};

export default TechsComponent;
