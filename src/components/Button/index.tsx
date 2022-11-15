import { StyledButton } from "./styles";
import { IButtonProps } from "./types";

export const Button = ({
  text,
  width,
  height,
  type,
  ...rest
}: IButtonProps) => {
  return (
    <StyledButton width={width} height={height} {...rest}>
      {text}
    </StyledButton>
  );
};
