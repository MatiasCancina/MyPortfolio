import React from "react";
import ProfilePhotoComponent from "./profilePhoto/ProfilePhotoComponent";
import AboutMeComponent from "./aboutMe/AboutMeComponent";
import TechsComponent from "./techs/TechsComponent";
import SocialsComponent from "./socials/SocialsComponent";
import ContainerProyects from "./proyects/ContainerProyects";

export const DataComponent = () => {
  return (
    <div
      id="data"
      className="grid rounded-3xl xl:max-w-[900px] 2xl:max-w-[1089px] bg-blue100/40 dark:bg-blue1000/40 p-8 grid-cols-4 gap-6 "
    >
      <ProfilePhotoComponent />
      <AboutMeComponent />
      <SocialsComponent />
      <TechsComponent />
      <ContainerProyects />
    </div>
  );
};
