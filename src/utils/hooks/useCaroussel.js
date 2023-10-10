import certificates from "@/components/Data/certificates/certificates";
import projects from "@/components/Data/projects/projects";
import { useState } from "react";

export const useCaroussel = () => {
  const [position, setPosition] = useState(0);

  const onClickNextProjects = () => {
    if (position < projects.length - 1) {
      setPosition(position + 1);
    } else {
      setPosition(0);
    }
  };

  const onClickPrevProjects = () => {
    if (position > 0) {
      setPosition(position - 1);
    } else {
      setPosition(projects.length - 1);
    }
  };

  const onClickNextCertificates = () => {
    if (position < certificates.length - 1) {
      setPosition(position + 1);
    } else {
      setPosition(0);
    }
  };

  const onClickPrevCertificates = () => {
    if (position > 0) {
      setPosition(position - 1);
    } else {
      setPosition(certificates.length - 1);
    }
  };

  return {
    position,
    onClickNextProjects,
    onClickPrevProjects,
    onClickNextCertificates,
    onClickPrevCertificates,
  };
};
