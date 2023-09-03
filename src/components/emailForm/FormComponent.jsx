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

function FormContainer() {
  const [state, handleSubmit] = useForm("mnqkvvwe");

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <>
      <Button onPress={onOpen} className="hover:scale-110 duration-100 text-7xl cursor-pointer">
      <FiMail />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="bg-gray-100">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Contact Me
              </ModalHeader>
              <ModalBody>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col justify-center items-center"
                >
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="my-5"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                  <textarea id="message" name="message" className="my-5" />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                  <button type="submit" disabled={state.submitting}>
                    Submit
                  </button>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
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
