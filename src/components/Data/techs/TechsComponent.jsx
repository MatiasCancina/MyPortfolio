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
    <div className="grid grid-cols-4 lg:col-span-2 lg:row-span-2 place-items-center gap-1 sm:gap-5 md:gap-6 rounded-3xl p-2 sm:p-6 bg-gradient-to-b from-[#1c263b] via-gray to-[#070606d8]">
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
          className="outline-none"
          href="https://developer.mozilla.org/es/docs/Web/JavaScript"
          target="_blank"
        >
          <RiJavascriptFill className="lg:hover:text-[#F0DB4F] lg:hover:scale-125 duration-200 text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl cursor-pointer text-gray100" />
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
          className="outline-none"
          href="https://developer.mozilla.org/es/docs/Glossary/HTML5"
          target="_blank"
        >
          <SiHtml5 className="lg:hover:text-[#e5532d] lg:hover:scale-125 duration-200 text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl cursor-pointer text-gray100" />
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
          className="outline-none"
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          target="_blank"
        >
          <SiCss3 className="lg:hover:text-[#0870c2] lg:hover:scale-125 duration-200 text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl cursor-pointer text-gray100" />
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
          className="outline-none"
          href="https://legacy.reactjs.org/docs/getting-started.html"
          target="_blank"
        >
          <FaReact className="lg:hover:text-[#1ba1cc] lg:hover:scale-125 duration-200 text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl cursor-pointer text-gray100 " />
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
        <a
          className="outline-none"
          href="https://es.redux.js.org/"
          target="_blank"
        >
          <SiRedux className="lg:hover:text-[#764abc] lg:hover:scale-125 duration-200 text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl cursor-pointer text-gray100" />
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
        <a
          className="outline-none"
          href="https://nextjs.org/docs"
          target="_blank"
        >
          <SiNextdotjs className="lg:hover:text-black lg:hover:scale-125 duration-200 text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl cursor-pointer text-gray100" />
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
        <a
          className="outline-none"
          href="https://v2.tailwindcss.com/docs"
          target="_blank"
        >
          <SiTailwindcss className="lg:hover:text-[#3ebff8] lg:hover:scale-125 duration-200 text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl cursor-pointer text-gray100" />
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
        <a
          className="outline-none"
          href="https://expressjs.com/es/"
          target="_blank"
        >
          <SiExpress className="lg:hover:text-[#393939] lg:hover:scale-125 duration-200 text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl cursor-pointer text-gray100" />
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
        <a
          className="outline-none"
          href="https://nodejs.org/en/docs"
          target="_blank"
        >
          <GrNode className="lg:hover:text-[#75b073] lg:hover:scale-125 duration-200 text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl cursor-pointer text-gray100" />
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
        <a
          className="outline-none"
          href="https://docs.oracle.com/en/java/"
          target="_blank"
        >
          <FaJava className="lg:hover:text-[#5382a1] lg:hover:scale-125 duration-200 text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl cursor-pointer text-gray100" />
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
        <a
          className="outline-none"
          href="https://www.postgresql.org/docs/"
          target="_blank"
        >
          <BiLogoPostgresql className="lg:hover:text-[#396c94] lg:hover:scale-125 duration-200 text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl cursor-pointer text-gray100" />
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
        <a
          className="outline-none"
          href="https://dev.mysql.com/doc/"
          target="_blank"
        >
          <SiMysql className="lg:hover:text-[#00758F] lg:hover:scale-125 duration-200 text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl cursor-pointer text-gray100" />
        </a>
      </Tooltip>
    </div>
  );
};

export default TechsComponent;
