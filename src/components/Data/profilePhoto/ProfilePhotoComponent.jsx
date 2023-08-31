import React from "react";
import profilePhoto from "../../../utils/images/img_perfilLaboral.jpg";
import Image from "next/image";

const ProfilePhotoComponent = () => {
  return (
    <div className="bg-gray-400 rounded-3xl p-7">
      <Image
        className="rounded-full"
        src={profilePhoto}
        width={200}
        height={200}
        alt="Profile Photo"
      />
    </div>
  );
};

export default ProfilePhotoComponent;
