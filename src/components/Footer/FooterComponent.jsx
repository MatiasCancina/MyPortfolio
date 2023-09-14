import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { useSelector } from "react-redux";
import FooterFormComponent from "../Data/socials/emailForm/FooterFormComponent";

function FooterComponent() {
  const language = useSelector((state) => state.language);

  return (
    <footer className="flex justify-center items-center bg-blue100 dark:bg-blue1000 w-full bg-gray-800 text-white py-6 lg:py-12 px-10 text-center sm:space-x-10 lg:space-x-20 2xl:space-x-40">
      {language === "en" ? (
        <div className="flex flex-col sm:flex-row justify-center items-center text-xs md:text-sm lg:text-base font-semibold text-black dark:text-gray100">
          <span>© 2023</span>
          <span className="sm:mx-1">Matías Cancina.</span>
          <span className="sm:mx-1">All rights reserved.</span>
        </div>
      ) : (
        <div className="text-xs md:text-sm lg:text-base font-semibold text-black dark:text-gray100">
          © 2023 Matías Cancina. Todos los derechos reservados.
        </div>
      )}
      <div className="flex justify-center items-center">
        <FooterFormComponent />
        <div className="p-2 lg:p-4">
          <a href="https://www.linkedin.com/in/matiascancina/" target="_blank">
            <FaLinkedin className="text-2xl lg:text-5xl cursor-pointer lg:hover:bg-blue1000/10 dark:lg:hover:bg-blue100/10 rounded-large lg:p-2  text-black dark:text-gray100" />
          </a>
        </div>
        <div className="p-2 lg:p-4">
          <a href="https://github.com/MatiasCancina" target="_blank">
            <BsGithub className="text-2xl lg:text-5xl cursor-pointer lg:hover:bg-blue1000/10 dark:lg:hover:bg-blue100/10 rounded-large lg:p-2  text-black dark:text-gray100 mx-6 sm:mx-0" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
