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
      size="lg"
      color="secondary"
      onClick={() =>
        currentTheme == "light" ? setTheme("dark") : setTheme("light")
      }
      thumbIcon={({ isSelected }) =>
        isSelected ? (
          <FaMoon className="text-2xl dark: text-white"/>
          ) : (
            <FaSun className='text-2xl' />
        )
      }
    ></Switch>
    </div>
  );
};

export default SwitchTheme;