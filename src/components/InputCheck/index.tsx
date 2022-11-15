import { Container } from "./styles";
import { IInputCheckProps } from "./types";

export const InputCheck = ({ label, name, register }: IInputCheckProps) => {
  return (
    <Container>
      <label htmlFor={name}>{name}</label>
      <input type="checkbox" id={name} {...register(name)} />
    </Container>
  );
};
