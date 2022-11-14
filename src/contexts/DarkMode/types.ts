import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IDarkModeContextData {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}

export interface IDarkModeProviderData {
  children: ReactNode;
}
