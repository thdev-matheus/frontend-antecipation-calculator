import { Container } from "./styles";
import { IInputCheckProps } from "./types";

export const InputCheck = ({
  name,
  markCheckBox,
  ...rest
}: IInputCheckProps) => {
  return (
    <Container>
      <label htmlFor={name}>{name}</label>
      <input
        type="checkbox"
        id={name}
        {...rest}
        onChange={() => markCheckBox(+name)}
      />
    </Container>
  );
};
