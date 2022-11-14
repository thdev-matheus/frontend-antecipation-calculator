import { useRequestAPI } from "../../contexts/RequestAPI";
import { Container } from "./styles";
import { Header } from "../../components/Header";

export const Error = () => {
  const { calculatedData } = useRequestAPI();
  // calculatedData.message = "Internal Server Error";
  // calculatedData.message = "Timeout";
  const statusCode =
    calculatedData.message === "Timeout"
      ? 408
      : calculatedData.message === "Internal Server Error"
      ? 500
      : null;

  const texts = {
    "408": "Parece que tá demorando pra responder aqui, tente novamente depois",
    "500": "Vixe, deu problema no servidor. ",
    null: "Oxi teve um problema aqui. Mas a gente já tá resolvendo.",
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
            : "https://i.ibb.co/Q9B6pP5/404-error-with-portals-rafiki.png"
        }
        alt="error_image"
      />
      <h2>{texts[`${statusCode}`]}</h2>
      <span>
        Enquanto eu arrumo isso, visite o meu
        <a href="https://www.linkedin.com/in/th-matheus/"> Linkedin</a> e
        conecte-se comigo!
      </span>
    </Container>
  );
};
