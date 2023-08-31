import React from "react";
import { Link } from "react-scroll";
import { RiArrowDownCircleFill } from "react-icons/ri";
import styles from "./LinkBtn.module.css";

const LinkBtn = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-72">
      {/* <Link smooth={true} duration={600} to="data" className=" mt-64 ">
        <button className={styles.uiverse}>
          <div className={styles.wrapper}>
            <span className="font-bold">LEARN MORE</span>
            <div className={`${styles.circle} ${styles["circle-12"]}`}></div>
            <div className={`${styles.circle} ${styles["circle-11"]}`}></div>
            <div className={`${styles.circle} ${styles["circle-10"]}`}></div>
            <div className={`${styles.circle} ${styles["circle-9"]}`}></div>
            <div className={`${styles.circle} ${styles["circle-8"]}`}></div>
            <div className={`${styles.circle} ${styles["circle-7"]}`}></div>
            <div className={`${styles.circle} ${styles["circle-6"]}`}></div>
            <div className={`${styles.circle} ${styles["circle-5"]}`}></div>
            <div className={`${styles.circle} ${styles["circle-4"]}`}></div>
            <div className={`${styles.circle} ${styles["circle-3"]}`}></div>
            <div className={`${styles.circle} ${styles["circle-2"]}`}></div>
            <div className={`${styles.circle} ${styles["circle-1"]}`}></div>
          </div>
        </button>
      </Link> */}
      <Link smooth={true} duration={800} to="data" className="mt-2 cursor-pointer">
        <RiArrowDownCircleFill className="text-6xl dark:text-white animate-bounce" />
      </Link>
    </div>
  );
};

export default LinkBtn;
