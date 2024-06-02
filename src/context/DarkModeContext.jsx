import { createContext, useContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const DarkModeProvider = createContext();

function DarkModeContext({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorage(false, "isDark");

  const toggleDarkMode = function () {
    console.log(document.documentElement);
    return setIsDarkMode((dark) => !dark);
  };

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
      } else {
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
      }
    },
    [isDarkMode]
  );

  return (
    <DarkModeProvider.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </DarkModeProvider.Provider>
  );
}

const useDarkMode = function () {
  const context = useContext(DarkModeProvider);
  if (context === undefined) throw new Error("Context is used out of provider");
  return context;
};

export { DarkModeContext, useDarkMode };
