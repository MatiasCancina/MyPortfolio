import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "@/redux/actions";
import { Button } from "@nextui-org/react";

const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "es" : "en";
    dispatch(changeLanguage(newLanguage));
  };

  return (
    <div className="lg:w-12 xl:w-16 2xl:w-20 cursor-pointer">
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
    </div>
  );
};

export default LanguageSwitcher;
