import { DarkModeProvider } from "./DarkMode";
import { RequestAPIProvider } from "./RequestAPI";
import { IContextProps } from "./types";

export const Contexts = ({ children }: IContextProps) => {
  return (
    <DarkModeProvider>
      <RequestAPIProvider>{children}</RequestAPIProvider>
    </DarkModeProvider>
  );
};
