import { useRequestAPI } from "../../contexts/RequestAPI";
import { Container } from "./styles";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";

export const Error = () => {
  const navigate = useNavigate();
  const { calculatedData } = useRequestAPI();
  const statusCode =
    calculatedData.message === "Request failed with status code 408"
      ? 408
      : calculatedData.message === "Request failed with status code 500"
      ? 500
      : null;

  const texts = {
    408: "Parece que tá demorando pra responder aqui, tente de novo depois",
    500: "Vixe, deu problema no servidor. ",
    null: "Oxe! Teve um problema aqui. Mas a gente já tá resolvendo.",
  };
  return (
    <Container>
      <Header />

      <img
        src={
          statusCode === 408
            ? "https://i.ibb.co/XCrGGgs/504-Error-Gateway-Timeout-bro.png"
            : statusCode === 500
            ? "https://i.ibb.co/k3WqnnP/500-Internal-Server-Error-cuate.png"
            : "https://i.ibb.co/wcjMkjK/404-error-with-portals-rafiki.png"
        }
        alt="error_image"
      />
      <h2>{texts[`${statusCode}`]}</h2>
      <div>
        <span>
          Enquanto eu arrumo isso, vosmicê pode ir no meu
          <a href="https://www.linkedin.com/in/th-matheus/"> Linkedin</a> e
          conectar-se comigo. que tal?
        </span>
        <span>ou vosmicê pode</span>
        <p onClick={() => navigate("/main")}>voltar</p>
      </div>
    </Container>
  );
};
