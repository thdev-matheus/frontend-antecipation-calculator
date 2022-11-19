import { ReactNode } from "react";
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IFormUtilsContextData {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  errors: any;
}

export interface IFormUtilsProviderData {
  children: ReactNode;
}
