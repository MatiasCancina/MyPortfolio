import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { useSelector } from "react-redux";
import FooterFormComponent from "../Data/socials/emailForm/FooterFormComponent";

function FooterComponent() {
  const language = useSelector((state) => state.language);

  return (
    <footer className="flex bg-blue100 dark:bg-blue1000 w-full justify-between items-center bg-gray-800 text-white py-6 lg:py-12 px-10 lg:px-96 text-center">
      {language === "en" ? (
        <div className="text-xs lg:text-base font-semibold text-black dark:text-gray100">
          © 2023 Matías Cancina. All rights reserved.
        </div>
      ) : (
        <div className="text-xs lg:text-base font-semibold text-black dark:text-gray100">
          © 2023 Matías Cancina. Todos los derechos reservados.
        </div>
      )}
      <div className="flex justify-center items-center">
      <FooterFormComponent />
        <div className="p-2 lg:p-4">
          <a href="https://www.linkedin.com/in/matiascancina/" target="_blank">
            <FaLinkedin className="text-2xl lg:text-5xl cursor-pointer hover:bg-blue1000/10 dark:hover:bg-blue100/10 rounded-large lg:p-2  text-black dark:text-gray100" />
          </a>
        </div>
        <div className="p-2 lg:p-4">
          <a href="https://github.com/MatiasCancina" target="_blank">
            <BsGithub className="text-2xl lg:text-5xl cursor-pointer hover:bg-blue1000/10 dark:hover:bg-blue100/10 rounded-large lg:p-2  text-black dark:text-gray100" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
