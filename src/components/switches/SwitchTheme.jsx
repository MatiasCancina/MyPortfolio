import React from "react";
import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { FaSun, FaMoon } from "react-icons/fa";

const SwitchTheme = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="cursor-pointer">
      <Switch
        defaultSelected
        size="lg"
        color="secondary"
        onClick={() =>
          currentTheme == "light" ? setTheme("dark") : setTheme("light")
        }
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <FaSun className={className} />
          ) : (
            <FaMoon className="dark: text-white" />
          )
        }
      ></Switch>
    </div>
  );
};

export default SwitchTheme;
