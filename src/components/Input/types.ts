import { IconType } from "react-icons";

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
}
