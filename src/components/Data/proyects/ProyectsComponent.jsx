import Image from "next/image";
import React from "react";
import { Chip } from "@nextui-org/react";
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

const ProyectsComponent = ({
  name,
  tecnologies,
  image,
  description,
  descripcion,
  date,
  fecha,
}) => {
  const language = useSelector((state) => state.language);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-blue-900 max-w-[785px]"
      shadow="lg"
    >
      <CardBody>
        <div className="flex items-center justify-center">
          <div className="w-1/2">
            <Image
              isBlurred
              src={image.src}
              alt={name}
              width={650}
              height={200}
              className="justify-center items-center rounded-lg lg:rounded-2xl"
            />
          </div>

          <div className="flex justify-center items-center w-1/2">
              <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-5 md:space-y-8 xl:space-y-12">
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
              </div>
              <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className="bg-blue100 dark:bg-blue1000 dark:text-gray100"
                size="2xl"
                backdrop="blur"
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex justify-center items-center gap-6">
                        <div className="text-xl">{name}</div>
                        <div className="text-xs font-light dark:text-gray100">
                          {language === "en" ? date : fecha}
                        </div>
                      </ModalHeader>
                      <ModalBody>
                        <p className="text-center">
                          {language === "en" ? description : descripcion}
                        </p>
                        <div className="flex justify-center items-center">
                          <Image
                            isBlurred
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
        {/* </div> */}
      </CardBody>
    </Card>
  );
};

export default ProyectsComponent;
