import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function FooterComponent() {
  return (
    <footer className="flex justify-between items-center bg-gray-800 text-white py-12 px-96 text-center">
      <div>© 2023 Matías Cancina. All rights reserved.</div>
      <div className="flex justify-center items-center">
        <div className="p-4">
          <a href="mailto:cancinamatias@gmail.com">
            <FiMail className="text-5xl cursor-pointer hover:bg-gray-700 rounded-full p-2" />
          </a>
        </div>
        <div className="p-4">
          <a href="https://www.linkedin.com/in/matiascancina/" target="_blank">
            <FaLinkedin className="text-5xl cursor-pointer hover:bg-gray-700 rounded-full p-2" />
          </a>
        </div>
        <div className=" p-4">
          <a href="https://github.com/MatiasCancina" target="_blank">
            <BsGithub className="text-5xl cursor-pointer hover:bg-gray-700 rounded-full p-2" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
