import React from "react";
import ProfilePhotoComponent from "./profilePhoto/ProfilePhotoComponent";
import AboutMeComponentES from "./aboutMe/AboutMeComponentES";
import TechsComponent from "./techs/TechsComponent";
import SocialsComponent from "./socials/SocialsComponent";

const DataComponentES = () => {
  return (
    <div
      id="data"
      className="grid rounded-3xl bg-sky-500/30 p-8 grid-cols-4 gap-4 mt-36"
    >
      <ProfilePhotoComponent />
      <AboutMeComponentES />
      <TechsComponent />
      <SocialsComponent />
    </div>
  );
};

export default DataComponentES;
