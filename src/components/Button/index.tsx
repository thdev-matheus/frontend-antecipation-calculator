import { StyledButton } from "./styles";
import { IButtonProps } from "./types";

export const Button = ({
  text,
  width,
  height,
  type,
  ...rest
}: IButtonProps) => {
  return <StyledButton {...rest}>{text}</StyledButton>;
};
