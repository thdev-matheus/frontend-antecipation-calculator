import { DarkModeProvider } from "./DarkMode";
import { IContextProps } from "./types";

export const Contexts = ({ children }: IContextProps) => {
  return <DarkModeProvider>{children}</DarkModeProvider>;
};
