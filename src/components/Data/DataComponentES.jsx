import React from "react";
import ProfilePhotoComponent from "./profilePhoto/ProfilePhotoComponent";
import AboutMeComponentES from "./aboutMe/AboutMeComponentES";
import TechsComponent from "./techs/TechsComponent";
import SocialsComponent from "./socials/SocialsComponent";
import ContainerProyects from "./proyects/ContainerProyects";

const DataComponentES = () => {
  return (
    <div
      id="data"
      className="grid rounded-3xl max-w-[200px] xl:max-w-[900px] 2xl:max-w-[1089px] bg-blue100/60 dark:bg-blue1000/80 p-2 md:p-8 grid-cols-4 gap-6"
    >
      <ProfilePhotoComponent />
      <AboutMeComponentES />
      <SocialsComponent />
      <TechsComponent />
      <ContainerProyects />
    </div>
  );
};

export default DataComponentES;
