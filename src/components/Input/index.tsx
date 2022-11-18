import { IInputProps } from "./types";
import { Container, InputContainer } from "./styles";

export const Input = ({
  label,
  icon: Icon,
  register,
  name,
  error,
  placeholder,
  ...rest
}: IInputProps) => {
  return (
    <Container>
      <div>
        {label} {!!error && <span> - {error}</span>}
      </div>
      <InputContainer isErrored={!!error}>
        {Icon && <Icon />}
        <input {...register(name)} placeholder={placeholder} {...rest} />
      </InputContainer>
    </Container>
  );
};
