import React from "react";
import { Link } from "react-scroll";
import { RiArrowDownCircleFill } from "react-icons/ri";
import { motion } from "framer-motion";

const LinkBtn = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="flex flex-col justify-center items-center mt-32 lg:mt-28 2xl:mt-72"
    >
      <Link
        smooth={true}
        duration={800}
        to="data"
        className="mt-2 cursor-pointer"
      >
        <RiArrowDownCircleFill className="text-4xl md:text-5xl text-blueNextUi lg:text-gray100 dark:text-black animate-bounce" />
      </Link>
    </motion.div>
  );
};

export default LinkBtn;
