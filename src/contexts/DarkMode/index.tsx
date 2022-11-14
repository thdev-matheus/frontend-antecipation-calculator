import { createContext, useState, useContext } from "react";
import { IDarkModeContextData, IDarkModeProviderData } from "./types";

const DarkModeContext = createContext<IDarkModeContextData>(
  {} as IDarkModeContextData
);

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);

  return context;
};

export const DarkModeProvider = ({ children }: IDarkModeProviderData) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
