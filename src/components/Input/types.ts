import { UseFormRegister } from "react-hook-form";
import { IconType } from "react-icons";
import { FieldValues } from "react-hook-form/dist/types/fields";

export interface IInputContainerProps {
  isErrored?: boolean;
}

export interface IInputProps {
  label: string;
  icon?: IconType;
  register: UseFormRegister<FieldValues>;
  name: string;
  error?: string;
  placeholder?: string;
  type?: string;
  step?: string;
}
