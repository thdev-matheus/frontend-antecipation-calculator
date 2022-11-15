import { FieldValues, UseFormRegister } from "react-hook-form";

export interface IInputCheckProps {
  label: string;
  register: UseFormRegister<FieldValues>;
  name: string;
}
