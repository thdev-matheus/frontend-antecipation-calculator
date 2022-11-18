import { StyledButton } from "./styles";
import { IButtonProps } from "./types";

export const Button = ({
  text,
  width,
  height,
  type = "button",
  borderRadius,
  bgColor = "#0984e3",
  color = "#f9f9f9",
  padding = "0.5rem",
  ...rest
}: IButtonProps) => {
  return (
    <StyledButton
      width={width}
      height={height}
      borderRadius={borderRadius}
      bgColor={bgColor}
      color={color}
      padding={padding}
      {...rest}
    >
      {text}
    </StyledButton>
  );
};

Button.defautProps = {
  type: "button",
  bgColor: "#0984e3",
  color: "#f9f9f9",
  padding: "0.5rem",
};
