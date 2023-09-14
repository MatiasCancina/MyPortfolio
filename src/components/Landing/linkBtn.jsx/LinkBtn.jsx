import React from "react";
import { Link } from "react-scroll";
import { RiArrowDownCircleFill } from "react-icons/ri";

const LinkBtn = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-32 lg:mt-28 2xl:mt-72">
      <Link smooth={true} duration={800} to="data" className="mt-2 cursor-pointer">
        <RiArrowDownCircleFill className="text-4xl md:text-5xl text-blueNextUi lg:text-gray100 dark:text-black animate-bounce" />
      </Link>
    </div>
  );
};

export default LinkBtn;
