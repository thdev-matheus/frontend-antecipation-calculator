import { Result } from "../../components/Result";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { BoxErrorButtons, Container, Footer } from "./styles";
import { Button } from "../../components/Button";

export const Main = () => {
  return (
    <Container>
      <Header />
      <h1>Calculadora</h1>
      <div>
        <Form />
        <Result />
      </div>
      {/* <Footer>
        <h3>Botões de erros</h3>
        <BoxErrorButtons>
          <Button text="Timeout" />
          <Button text="I. S. Error" />
          <Button text="Not fount" />
        </BoxErrorButtons>
      </Footer> */}
    </Container>
  );
};
