import { DarkModeProvider } from "./DarkMode";
import { FormUtilsProvider } from "./FormUtils";
import { RequestAPIProvider } from "./RequestAPI";
import { IContextProps } from "./types";

export const Contexts = ({ children }: IContextProps) => {
  return (
    <DarkModeProvider>
      <FormUtilsProvider>
        <RequestAPIProvider>{children}</RequestAPIProvider>
      </FormUtilsProvider>
    </DarkModeProvider>
  );
};
