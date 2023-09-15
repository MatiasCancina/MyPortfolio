import React from "react";
import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";

const SwitchTheme = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

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
        onClick={() =>
          currentTheme == "light" ? setTheme("dark") : setTheme("light")
        }
        startContent={<FaMoon />}
        endContent={<FaSun />}
      ></Switch>
    </motion.div>
  );
};

export default SwitchTheme;
