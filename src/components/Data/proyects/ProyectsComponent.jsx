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
    <div className="flex justify-center items-center">
      <div className="w-1/2 p-4">
        <div className="flex justify-between items-center ">
          <div className="m-2 text-lg font-extrabold dark:text-gray100">{name}</div>
          {language === "en" ? (
            <div className="m-2 text-sm font-light dark:text-gray100">{date}</div>
          ) : (
            <div className="m-2 dark:text-gray100">{fecha}</div>
          )}
        </div>
        {language === "en" ? (
          <div className="m-2 dark:text-gray100">{description}</div>
        ) : (
          <div className="m-2 dark:text-gray100">{descripcion}</div>
        )}
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center p-4">
        <Image
          isBlurred
          src={image.src}
          alt={name}
          width={500}
          height={100}
          className="rounded-2xl"
        />
        <div className="flex mt-6">
          {tecnologies.map((t) => (
            <Chip color="primary" variant="flat" className="m-2" key={t}>
              {t}
            </Chip>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProyectsComponent;
