import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { useSelector } from "react-redux";

function FooterComponent() {
  const language = useSelector((state) => state.language);

  return (
    <footer className="flex bg-blue100 dark:bg-blue1000 w-[1903px] justify-between items-center bg-gray-800 text-white py-12 px-96 text-center">
      {language === "en" ? (
        <div className="font-medium dark:text-gray100">
          © 2023 Matías Cancina. All rights reserved.
        </div>
      ) : (
        <div className="font-semibold dark:text-gray100">
          © 2023 Matías Cancina. Todos los derechos reservados.
        </div>
      )}
      <div className="flex justify-center items-center">
        <div className="p-4">
          <a href="mailto:cancinamatias@gmail.com">
            <FiMail className="text-5xl cursor-pointer hover:bg-gray-700 rounded-full p-2 dark:text-gray100" />
          </a>
        </div>
        <div className="p-4">
          <a href="https://www.linkedin.com/in/matiascancina/" target="_blank">
            <FaLinkedin className="text-5xl cursor-pointer hover:bg-gray-700 rounded-full p-2 dark:text-gray100" />
          </a>
        </div>
        <div className=" p-4">
          <a href="https://github.com/MatiasCancina" target="_blank">
            <BsGithub className="text-5xl cursor-pointer hover:bg-gray-700 rounded-full p-2 dark:text-gray100" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
