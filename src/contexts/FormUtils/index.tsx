import { yupResolver } from "@hookform/resolvers/yup";
import { createContext, useContext } from "react";
import { useForm } from "react-hook-form";
import { schema } from "../../schemas";
import { IFormUtilsContextData, IFormUtilsProviderData } from "./types";

const FormUtilsContext = createContext<IFormUtilsContextData>(
  {} as IFormUtilsContextData
);

export const useFormUtils = () => {
  const context = useContext(FormUtilsContext);

  return context;
};

export const FormUtilsProvider = ({ children }: IFormUtilsProviderData) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema),
  });

  return (
    <FormUtilsContext.Provider value={{ register, handleSubmit, errors }}>
      {children}
    </FormUtilsContext.Provider>
  );
};
