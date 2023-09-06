import React from "react";
import profilePhoto from "../../../utils/images/img_perfilLaboral.jpg";
import Image from "next/image";

const ProfilePhotoComponent = () => {
  return (
    <div className="col-span-1 p-4 w-56 bg-blue300 dark:bg-blue800 rounded-3xl">
      <Image
        className="rounded-full"
        src={profilePhoto}
        width={300}
        height={300}
        alt="Profile Photo"
      />
    </div>
  );
};

export default ProfilePhotoComponent;
