import { IInputProps } from "./types";
import { Container, InputContainer } from "./styles";
import { useFormUtils } from "../../contexts/FormUtils";

export const Input = ({
  label,
  icon: Icon,
  name,
  error,
  placeholder,
  register,
  width,
  ...rest
}: IInputProps) => {
  const { register: rg } = useFormUtils();
  return (
    <Container width={width}>
      <div>
        {label} {!!error && <span> - {error}</span>}
      </div>
      <InputContainer isErrored={!!error}>
        {Icon && <Icon />}
        {register ? (
          <input {...register(name)} placeholder={placeholder} {...rest} />
        ) : (
          <input {...rg(name)} placeholder={placeholder} {...rest} />
        )}
      </InputContainer>
    </Container>
  );
};
