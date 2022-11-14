import { Container, Header, LoginButton } from "./styles";
import { useNavigate } from "react-router-dom";
import { SwitchButton } from "../../components/SwitchButton";

export const Welcome = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string): void => navigate(path);
  return (
    <Container>
      <Header>
        <SwitchButton size="30" />
      </Header>

      <img src="https://i.ibb.co/QvpzMtW/Hello-rafiki.png" alt="wellcome" />
      <h2>Olá!</h2>
      <p>Seja bem-vindo(a) ao Antecipation Calculator.</p>
      <p>
        Uma calculadora de antecipação para que as pessoas consigam saber quais
        valores receberão caso optem por antecipar o recebimento.
      </p>

      <LoginButton
        text="Calcular"
        width="17.5rem"
        height="3.125rem"
        onClick={() => handleNavigate("/main")}
      />
    </Container>
  );
};
