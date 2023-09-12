import React from "react";
import { Link } from "react-scroll";
import { RiArrowDownCircleFill } from "react-icons/ri";

const LinkBtn = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-32 2xl:mt-72">
      <Link smooth={true} duration={800} to="data" className="mt-2 cursor-pointer">
        <RiArrowDownCircleFill className="text-4xl lg:text-5xl text-gray100 dark:text-black animate-bounce" />
      </Link>
    </div>
  );
};

export default LinkBtn;
