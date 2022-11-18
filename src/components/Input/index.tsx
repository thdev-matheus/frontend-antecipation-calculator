import { IInputProps } from "./types";
import { Container, InputContainer } from "./styles";
import { useFormUtils } from "../../contexts/FormUtils";

export const Input = ({
  label,
  icon: Icon,
  name,
  error,
  placeholder,
  ...rest
}: IInputProps) => {
  const { register } = useFormUtils();
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
