import React from "react";
import profilePhoto from "../../../utils/images/img_perfilLaboral.jpg";
import Image from "next/image";

const ProfilePhotoComponent = () => {
  return (
    <div className="hidden col-span-1 p-4 xl:flex justify-center items-center w-full bg-blue300 dark:bg-blue800 rounded-3xl">
      <div className="hidden xl:block">
        <Image
          className="rounded-full"
          src={profilePhoto}
          width={300}
          height={300}
          alt="Profile Photo"
        />
      </div>
      <div className="hidden ">
      <Image
          className="rounded-large"
          src={profilePhoto}
          width={100}
          height={100}
          alt="Profile Photo"
        />
      </div>
    </div>
  );
};

export default ProfilePhotoComponent;
