import { Result } from "../../components/Result";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { Container } from "./styles";

export const Main = () => {
  return (
    <Container>
      <Header />
      <h1>Calculadora</h1>
      <Form />
      <Result />
    </Container>
  );
};
