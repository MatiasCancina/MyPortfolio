import Image from "next/image";
import React from "react";
import { Chip, Tooltip } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { Card, CardBody, Button } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { BsGithub, BsYoutube } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";

const ProjectsComponent = ({
  name,
  tecnologies,
  image,
  description,
  descripcion,
  date,
  fecha,
  frontCode,
  backCode,
  deploy,
  code,
  video,
}) => {
  const language = useSelector((state) => state.language);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="pb-3 sm:pb-0">
      <h2 className="flex justify-center flex-col items-center py-1 sm:pt-0 sm:pb-3 text-black dark:text-gray100 text-xs sm:text-lg md:text-2xl lg:text-3xl sm:font-semibold font-extrabold">
        {language === "en" ? "PROJECTS" : "PROYECTOS"}
      </h2>
      <Card
        isblurred
        className="border-none bg-blue100/70 dark:bg-blue-900 max-w-[785px]"
        shadow="lg"
      >
        <CardBody>
          <div className="flex items-center justify-center">
            <div className="w-1/2">
              <Image
                isblurred
                src={image.src}
                alt={name}
                width={650}
                height={200}
                className="justify-center items-center rounded-lg lg:rounded-2xl"
              />
            </div>

            <div className="flex justify-center items-center w-1/2">
              <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-5 md:space-y-8">
                <h1 className="text-black dark:text-gray100 text-xs sm:text-lg md:text-xl 2xl:text-2xl font-bold">
                  {name}
                </h1>
                <Button
                  onPress={onOpen}
                  size="sm"
                  variant="ghost"
                  color="primary"
                >
                  {language === "en" ? (
                    <p className="font-semibold text-xs 2xl:text-base">
                      Explore
                    </p>
                  ) : (
                    <p className="font-semibold text-xs 2xl:text-base">
                      Explorar
                    </p>
                  )}
                </Button>
                <div className="flex space-x-2">
                  {frontCode && (
                    <Tooltip
                      showArrow
                      content={
                        <div className="flex justify-center items-center">
                          <p>Front</p>
                        </div>
                      }
                      color="primary"
                      size="sm"
                    >
                      <a
                        className="outline-none"
                        href={frontCode}
                        target="_blank"
                      >
                        <BsGithub className="text:xl sm:text-2xl cursor-pointer lg:hover:scale-125 duration-200" />
                      </a>
                    </Tooltip>
                  )}
                  {backCode && (
                    <Tooltip
                      showArrow
                      content={
                        <div className="flex justify-center items-center">
                          <p>Back</p>
                        </div>
                      }
                      color="primary"
                      size="sm"
                    >
                      <a
                        className="outline-none"
                        href={backCode}
                        target="_blank"
                      >
                        <BsGithub className="text:xl sm:text-2xl cursor-pointer lg:hover:scale-125 duration-200" />
                      </a>
                    </Tooltip>
                  )}
                  {code && (
                    <a className="outline-none" href={code} target="_blank">
                      <BsGithub className="text:xl sm:text-2xl cursor-pointer lg:hover:scale-125 duration-200" />
                    </a>
                  )}
                  {deploy && (
                    <a className="outline-none" href={deploy} target="_blank">
                      <FiArrowUpRight className="text:xl sm:text-2xl cursor-pointer lg:hover:scale-125 duration-200" />
                    </a>
                  )}
                  {video && (
                    <Tooltip
                      showArrow
                      content={
                        <div className="flex justify-center items-center">
                          <p>Demo</p>
                        </div>
                      }
                      color="primary"
                      size="sm"
                    >
                      <a className="outline-none" href={video} target="_blank">
                        <BsYoutube className="text:xl sm:text-2xl cursor-pointer lg:hover:scale-125 duration-200" />
                      </a>
                    </Tooltip>
                  )}
                </div>
              </div>
              <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className="bg-blue100 dark:bg-blue1000 text-black dark:text-gray100"
                size="2xl"
                backdrop="blur"
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex justify-center items-center gap-6">
                        <div className="text-xl text-black dark:text-gray100">
                          {name}
                        </div>
                        <div className="text-xs font-light text-black dark:text-gray100">
                          {language === "en" ? date : fecha}
                        </div>
                      </ModalHeader>
                      <ModalBody>
                        <p className="text-center text-black dark:text-gray100">
                          {language === "en" ? description : descripcion}
                        </p>
                        <div className="flex justify-center items-center">
                          <Image
                            isblurred
                            src={image.src}
                            alt={name}
                            width={450}
                            height={100}
                            className="rounded-lg lg:rounded-2xl my-3"
                          />
                        </div>
                        <div className="flex flex-wrap items-center justify-center">
                          {tecnologies.map((t) => (
                            <Chip
                              color="primary"
                              variant="shadow"
                              className="flex items-center justify-center text-center m-2 text-xs lg:text-sm"
                              key={t}
                            >
                              {t}
                            </Chip>
                          ))}
                        </div>
                        <div className="flex items-center justify-center space-x-2 mt-5">
                          {frontCode && (
                            <Tooltip
                              showArrow
                              content={
                                <div className="flex justify-center items-center">
                                  <p>Front</p>
                                </div>
                              }
                              color="primary"
                              size="sm"
                            >
                              <a
                                className="outline-none"
                                href={frontCode}
                                target="_blank"
                              >
                                <BsGithub className="text-2xl cursor-pointer lg:hover:scale-125 duration-200" />
                              </a>
                            </Tooltip>
                          )}
                          {backCode && (
                            <Tooltip
                              showArrow
                              content={
                                <div className="flex justify-center items-center">
                                  <p>Back</p>
                                </div>
                              }
                              color="primary"
                              size="sm"
                            >
                              <a
                                className="outline-none"
                                href={backCode}
                                target="_blank"
                              >
                                <BsGithub className="text-2xl cursor-pointer lg:hover:scale-125 duration-200" />
                              </a>
                            </Tooltip>
                          )}
                          {code && (
                            <a
                              className="outline-none"
                              href={code}
                              target="_blank"
                            >
                              <BsGithub className="text-2xl cursor-pointer lg:hover:scale-125 duration-200" />
                            </a>
                          )}
                          {deploy && (
                            <a
                              className="outline-none"
                              href={deploy}
                              target="_blank"
                            >
                              <FiArrowUpRight className="text:xl sm:text-2xl cursor-pointer lg:hover:scale-125 duration-200" />
                            </a>
                          )}
                          {video && (
                            <Tooltip
                              showArrow
                              content={
                                <div className="flex justify-center items-center">
                                  <p>Demo</p>
                                </div>
                              }
                              color="primary"
                              size="sm"
                            >
                              <a
                                className="outline-none"
                                href={video}
                                target="_blank"
                              >
                                <BsYoutube className="text:xl sm:text-2xl cursor-pointer lg:hover:scale-125 duration-200" />
                              </a>
                            </Tooltip>
                          )}
                        </div>
                      </ModalBody>
                      <ModalFooter>
                        <Button
                          color="danger"
                          variant="light"
                          onPress={onClose}
                        >
                          Close
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectsComponent;
