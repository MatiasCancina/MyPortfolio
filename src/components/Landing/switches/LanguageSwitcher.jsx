import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "@/redux/actions";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";


const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "es" : "en";
    dispatch(changeLanguage(newLanguage));
  };

  return (
    <motion.div initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.8,
      ease: [0, 0.71, 0.2, 1.01],
    }} className="lg:w-12 xl:w-16 2xl:w-20 cursor-pointer">
      {language === "en" ? (
        <Button
          onClick={toggleLanguage}
          className="text-lg text-gray100"
          color="primary"
          variant="solid"
          size="sm"
        >
          En
        </Button>
      ) : (
        <Button
          onClick={toggleLanguage}
          className="text-lg text-gray100"
          color="primary"
          variant="solid"
          size="sm"
        >
          Es
        </Button>
      )}
    </motion.div>
  );
};

export default LanguageSwitcher;
