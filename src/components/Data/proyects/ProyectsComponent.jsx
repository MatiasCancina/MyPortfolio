import Image from "next/image";
import React from "react";
import { Chip } from "@nextui-org/react";
import { useSelector } from "react-redux";

const ProyectsComponent = ({
  name,
  tecnologies,
  image,
  description,
  descripcion,
  date,
  fecha,
}) => {
  const language = useSelector((state) => state.language);

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center w-full">
      <div className="lg:w-1/2 w-full flex-wrap">
        <div className="flex justify-between items-center ">
          <div className="m-1 text-sm lg:text-lg font-extrabold dark:text-gray100">
            {name}
          </div>
          {language === "en" ? (
            <div className="m-1 text-xs lg:text-sm font-light dark:text-gray100">
              {date}
            </div>
          ) : (
            <div className="m-1 flex justify-center items-center text-xs lg:text-sm font-light dark:text-gray100">
              {fecha}
            </div>
          )}
        </div>
        {language === "en" ? (
          <div className="my-1 2xl:m-3 text-xs w-full lg:text-base  dark:text-gray100">
            {description}
          </div>
        ) : (
          <div className="my-1 text-xs lg:text-base dark:text-gray100">
            {descripcion}
          </div>
        )}
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center lg:px-4">
        <Image
          isBlurred
          src={image.src}
          alt={name}
          width={350}
          height={100}
          className="rounded-lg lg:rounded-2xl mt-3 lg:mt-0"
        />
        <div className="flex flex-wrap justify-center items-center mt-6">
          {tecnologies.map((t) => (
            <Chip color="primary" variant="shadow" className="flex items-center justify-center text-center m-2 text-xs lg:text-sm" key={t}>
              {t}
            </Chip>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProyectsComponent;
