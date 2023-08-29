// import React from "react";
// import { useTheme } from "next-themes";

// const SwitchTheme = () => {
//   const { systemTheme, theme, setTheme } = useTheme();
//   const currentTheme = theme === "system" ? systemTheme : theme;

//   return (
//     <button
//       onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
//       className="bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 px-8 py-2 text-2xl md:text-4xl rounded-lg absolute bottom-32"
//     >
//       Toggle Mode
//     </button>
//   );
// };

// export default SwitchTheme;

import React from "react";
import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { FaSun, FaMoon } from "react-icons/fa";

const SwitchTheme = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="flex justify-center items-center">

    <Switch
      defaultSelected
      size="lg"
      color="secondary"
      onClick={() => (currentTheme == "dark" ? setTheme("light") : setTheme("dark"))}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <FaMoon className={className} />
          ) : (
            <FaSun className= {className}/>
        )
      }
      >
    </Switch>
      </div>
  );
};

export default SwitchTheme;
