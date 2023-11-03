import React from "react";
import {
  Chip,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useSelector } from "react-redux";
import { Card, CardBody, Button } from "@nextui-org/react";
import Image from "next/image";

const CertificatesComponent = ({
  name,
  nombre,
  academy,
  date,
  fecha,
  image,
}) => {
  const language = useSelector((state) => state.language);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
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
                <h1 className="flex items-center justify-center text-black dark:text-gray100 text-xs sm:text-lg md:text-xl sm:font-semibold font-bold">
                  {language === "en" ? name : nombre}
                </h1>
                <h2 className="flex items-center justify-center text-black dark:text-gray100 text-xs sm:text-md md:text-lg sm:font-normal">
                  {academy}
                </h2>
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
                className="bg-blue100 dark:bg-blue1000 text-black dark:text-gray100"
                size="5xl"
                backdrop="blur"
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex justify-center items-center gap-6">
                        <div className="text-xl sm:text-4xl text-black dark:text-gray100">
                          {language === "en" ? name : nombre}
                        </div>
                        <div className="text-xs font-light text-black dark:text-gray100">
                          {language === "en" ? date : fecha}
                        </div>
                      </ModalHeader>
                      <ModalBody>
                        <p className="sm:text-xl text-center text-black dark:text-gray100">
                          {academy}
                        </p>
                        <div className="flex justify-center items-center">
                          <Image
                            isblurred
                            src={image.src}
                            alt={name}
                            width={750}
                            height={100}
                            className="rounded-lg lg:rounded-2xl my-3"
                          />
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

export default CertificatesComponent;
