import React from "react";
import profilePhoto from "../../../utils/images/img_perfilLaboral.jpg";
import Image from "next/image";

const ProfilePhotoComponent = () => {
  return (
    <div className="col-span-1 p-4 w-[340px] 2xl:w-60 bg-blue300 dark:bg-blue800 rounded-3xl">
      <div className="hidden 2xl:block">
        <Image
          className="rounded-full"
          src={profilePhoto}
          width={300}
          height={300}
          alt="Profile Photo"
        />
      </div>
      <div className="2xl:hidden flex justify-center items-center">
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
