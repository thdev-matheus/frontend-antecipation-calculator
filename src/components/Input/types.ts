import { FieldValues, UseFormRegister } from "react-hook-form";
import { IconType } from "react-icons";

export interface IcontainerProps {
  width?: string;
}

export interface IInputContainerProps {
  isErrored?: boolean;
}

export interface IInputProps {
  label: string;
  icon?: IconType;
  name: string;
  error?: string;
  placeholder?: string;
  type?: string;
  step?: string;
  width?: string;
  register?: UseFormRegister<FieldValues>;
}
