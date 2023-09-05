import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useForm, ValidationError } from "@formspree/react";
import { FiMail } from "react-icons/fi";
import { useSelector } from "react-redux";

function FormContainer() {
  const [state, handleSubmit] = useForm("mnqkvvwe");
  const language = useSelector((state) => state.language);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  if (state.succeeded) {
    return (
      <p>
        {language === "en"
          ? "Email has been sent, thanks for contact me!"
          : "¡Correo enviado, gracias por contactarme!"}
      </p>
    );
  }

  return (
    <>
      <Button onPress={onOpen} className=" bg-blue400 dark:bg-blue600">
        {language === "en" ? (
          <p className="text-xl ">Contact Me</p>
        ) : (
          <p className="text-xl ">Contáctame</p>
        )}
        <FiMail className="text-9xl cursor-pointer" />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="bg-gray100">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <p className="text-blue500">{language === "en" ? "Contact Me!" : "¡Contactame!"}</p>
              </ModalHeader>
              <ModalBody>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col justify-center items-center"
                >
                  <div className="relative w-full inline-flex tap-highlight-transparent shadow-sm px-3 border-medium border-default-200 data-[hover=true]:border-default-400 group-data-[focus=true]:border-foreground min-h-unit-10 rounded-medium flex-col items-start justify-center gap-0 transition-background !duration-150 transition-colors motion-reduce:transition-none h-14 py-2">
                    <label
                      htmlFor="email"
                      className="block font-medium text-tiny cursor-text will-change-auto origin-top-left transition-all !duration-200 !ease-out motion-reduce:transition-none text-blue500"
                    >
                      Email
                    </label>
                    <input
                      id="Email"
                      type="email"
                      name="Email"
                      placeholder="example@email.com"
                      className="w-full h-full font-normal bg-gray100 !bg-transparent outline-none placeholder:text-foreground-500 text-small"
                    />
                  </div>
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                  <div className="relative my-3 w-full inline-flex tap-highlight-transparent shadow-sm px-3 border-medium border-default-200 data-[hover=true]:border-default-400 group-data-[focus=true]:border-foreground min-h-unit-10 rounded-medium flex-col items-start justify-center gap-0 !h-auto transition-background !duration-150 transition-colors motion-reduce:transition-none py-2">
                    <label className="block font-medium text-foreground-600 text-tiny cursor-text will-change-auto origin-top-left transition-all !duration-200 !ease-out motion-reduce:transition-none">
                      <p className="text-blue500">{language === "en" ? "Message" : "Mensaje"}</p>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full h-full font-normal !bg-transparent outline-none placeholder:text-foreground-500 text-small resize-none py-2 bg-gray100"
                    />
                  </div>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="z-0 w-full group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-medium [&>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors motion-reduce:transition-none bg-blue200 dark:bg-blue1000 text-primary-foreground"
                  >
                    <p>{language === "en" ? "Submit" : "Enviar"}</p>
                  </button>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  <p>{language === "en" ? "Close" : "Cerrar"}</p>
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default FormContainer;
