import React from "react";
import ProfilePhotoComponent from "./profilePhoto/ProfilePhotoComponent";
import AboutMeComponent from "./aboutMe/AboutMeComponent";
import TechsComponent from "./techs/TechsComponent";
import SocialsComponent from "./socials/SocialsComponent";
import ContainerProyects from "../proyects/ContainerProyects";

export const DataComponent = () => {
  return (
    <div
      id="data"
      className="grid rounded-3xl bg-sky-500/30 p-8 grid-cols-4 gap-4 mt-36"
    >
      <ProfilePhotoComponent />
      <AboutMeComponent />
      <TechsComponent />
      <SocialsComponent />
      <ContainerProyects />
    </div>
  );
};
