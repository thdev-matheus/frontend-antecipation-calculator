import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string): void => navigate(path);

  return (
    <Container>
      <img
        src="https://i.ibb.co/GQfvh20/Feeling-sorry-rafiki.png"
        alt="error"
      />
      <h2>
        Eita, parece que a rota que está tentando acessar não existe por aqui.
      </h2>
      <p>Mas olha, nem tudo está perdido, vamos voltar do início?</p>
      <span onClick={() => handleNavigate("/")}>voltar</span>
    </Container>
  );
};
