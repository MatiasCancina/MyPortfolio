"use client";
import React, { useState } from "react";
import ProyectsComponent from "./ProyectsComponent";
import pigCphoto from "../../utils/images/pigCphoto.png";
import dogsPhoto from "../../utils/images/dogsPhoto.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const ContainerProyects = () => {
  let [position, setPosition] = useState(0);
  const proyect = [
    <ProyectsComponent
      name={"PigCommander Finanance App"}
      tecnologies={["NextJS", "React", "Redux Toolkit", "NodeJs"]}
      image={pigCphoto}
      description={
        "Development of a personal finance application that allows users to record their monthly income and expenses, automate expenses, record investments, set savings goals, view news and much more. In particular, my responsibilities included implementing user authentication and authorization, as well as automating and managing transactions and global state."
      }
      descripcion={'Desarrollo de una aplicación de finanzas personales que permite a los usuarios registrar sus ingresos y gastos mensuales, automatizar gastos, registrar inversiones, establecer metas de ahorro, ver noticias y mucho más. En particular, mis responsabilidades incluyeron la implementación de autenticación y autorización de usuarios, así como la automatización y gestión de transacciones y estado global.'}
      date={"Aug. 2023"}
      fecha={'Ago. 2023'}
    />,

    <ProyectsComponent
      name={"Dogs Api"}
      tecnologies={["JavaScript", "React", "Module CSS"]}
      image={dogsPhoto}
      description={
        "Development of a complete a Single Page Application SPA for dog management that allows users to manage and keep track of their faithful canine companions in a simple way. This application enables the creation, editing, and deletion of dog profiles, as well as powerful search and filtering capabilities, intuitive sorting options, all while maintaining a global state with Redux."
      }
      descripcion={'Desarrollo de una aplicación de página única SPA completa para la gestión de perros que permite a los usuarios administrar y hacer un seguimiento de sus fieles compañeros caninos de manera sencilla. Esta aplicación permite la creación, edición y eliminación de perfiles de perros, así como potentes capacidades de búsqueda y filtrado, opciones intuitivas de ordenamiento, todo ello mientras se mantiene un estado global con Redux.'}
      date={"Jul. 2023"}
      fecha={"Jul. 2023"}
    />,
  ];

  const onClickNext = () => {
    if (position < proyect.length - 1) {
      setPosition(position + 1);
    } else {
      setPosition(0);
    }
  };

  const onClickPrev = () => {
    if (position > 0) {
      setPosition(position - 1);
    } else {
      setPosition(proyect.length - 1);
    }
  };

  return (
    <div className=" flex place-items-center bg-gray-400 rounded-3xl col-span-4 row-span-4 max-h-[330px] p-6">
      <button onClick={onClickPrev} className="text-5xl">
        <IoIosArrowBack />
      </button>
      {proyect[position]}
      <button onClick={onClickNext} className="text-5xl">
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default ContainerProyects;
