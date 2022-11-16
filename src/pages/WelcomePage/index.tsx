import { Container, NavButton } from "./styles";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";

export const Welcome = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string): void => navigate(path);
  return (
    <Container>
      <Header />

      <img src="https://i.ibb.co/QvpzMtW/Hello-rafiki.png" alt="wellcome" />
      <h2>Olá!</h2>
      <p>Seja bem-vindo(a) ao Antecipation Calculator.</p>
      <p>
        Uma calculadora de antecipação para que as pessoas consigam saber quais
        valores receberão caso optem por antecipar o recebimento.
      </p>

      <NavButton text="Calcular" onClick={() => handleNavigate("/main")} />
    </Container>
  );
};
