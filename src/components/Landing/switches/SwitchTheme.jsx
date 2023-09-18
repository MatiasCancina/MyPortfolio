import React from "react";
import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

const SwitchTheme = () => {
  const { theme, setTheme } = useTheme();
  // const currentTheme = theme === "system" ? systemTheme : theme;
  // const themeState = useSelector((state) => state.theme.theme);
  // const dispatch = useDispatch();

  const handleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }


  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="lg:w-12 xl:w-16 2xl:w-20 cursor-pointer"
    >
      <Switch
        size="lg"
        color="primary"
        onClick={handleTheme}
        startContent={<FaMoon />}
        endContent={<FaSun />}
      ></Switch>
    </motion.div>
  );
};

export default SwitchTheme;
