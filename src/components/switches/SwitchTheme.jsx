import React from "react";
import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { FaSun, FaMoon } from "react-icons/fa";

const SwitchTheme = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="lg:w-12 xl:w-16 2xl:w-20 cursor-pointer">
      <Switch
      size="lg"
      color="primary"
      onClick={() =>
        currentTheme == "light" ? setTheme("dark") : setTheme("light")
      }
      startContent={<FaMoon />}
      endContent={<FaSun />}
    ></Switch>
    </div>
  );
};

export default SwitchTheme;