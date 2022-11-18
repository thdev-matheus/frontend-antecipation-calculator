import { Result } from "../../components/Result";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { BoxErrorButtons, Container, Footer } from "./styles";
import { Button } from "../../components/Button";
import { useRequestAPI } from "../../contexts/RequestAPI";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Main = () => {
  const navigate = useNavigate();
  const { handleRequest, setCalculatedData } = useRequestAPI();

  const handleNavigate = (path: string) => navigate(path);

  const request = async (endpoint: string, path: string) => {
    const data = {
      amount: 10000,
      installments: 3,
      mdr: 3,
    };

    await handleRequest({ endpoint, data });
    handleNavigate(path);
  };

  useEffect(() => {
    const data = {
      1: 1,
      15: 1,
      30: 1,
      90: 1,
    };
    setCalculatedData(data);
  }, [setCalculatedData]);

  return (
    <Container>
      <Header />
      <h1>Calculadora</h1>
      <section>
        <Form />
        <Result />
      </section>
      <Footer>
        <h3>Botões de erros</h3>
        <BoxErrorButtons>
          <Button
            text="Timeout"
            onClick={() => request("?timeout", "/error")}
          />
          <Button
            text="I. S. Error"
            onClick={() => request("?internalError", "/error")}
          />
          <Button
            text="Not fount"
            onClick={() => handleNavigate("/rota-que-nao-existe")}
          />
        </BoxErrorButtons>
      </Footer>
    </Container>
  );
};
