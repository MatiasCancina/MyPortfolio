import React from "react";
import ProfilePhotoComponent from "./profilePhoto/ProfilePhotoComponent";
import AboutMeComponentES from "./aboutMe/AboutMeComponentES";
import TechsComponent from "./techs/TechsComponent";
import SocialsComponent from "./socials/SocialsComponent";
import ContainerProyects from "./projects/ContainerProjects";
import CertificatesContainer from "./certificates/CertificatesContainer";
import ExperienceContainer from "./experiences/ExperienceContainer";

const DataComponentES = () => {
  return (
    <div
      id="data"
      className="grid rounded-3xl m-4 lg:mx-52 xl:mx-72 bg-blue100/60 dark:bg-blue1000/80 p-2 md:p-8 grid-cols-1 lg:grid-cols-4 gap-1 lg:gap-6"
    >
      <ProfilePhotoComponent />
      <AboutMeComponentES />
      <SocialsComponent />
      <TechsComponent />
      <ExperienceContainer/>
      <ContainerProyects />
      <CertificatesContainer />
    </div>
  );
};

export default DataComponentES;
