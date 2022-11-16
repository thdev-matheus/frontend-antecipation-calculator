import { useRequestAPI } from "../../contexts/RequestAPI";
import { BoxData, BoxTitle, Container } from "./styles";
import { convertCentsToReal } from "../../utils/convert";

export const Result = () => {
  const { calculatedData } = useRequestAPI();

  return (
    <Container>
      <BoxTitle>
        <h3>Você receberá:</h3>
      </BoxTitle>

      <BoxData>
        {!!calculatedData[1] && (
          <span>
            {`Amanhã: R$ ${convertCentsToReal(calculatedData[1]).toFixed(2)}`}
          </span>
        )}
        {!!calculatedData[15] && (
          <span>
            {`Em 15 dias: R$ ${convertCentsToReal(calculatedData[15]).toFixed(
              2
            )}`}
          </span>
        )}
        {!!calculatedData[30] && (
          <span>
            {`Em 30 dias: R$ ${convertCentsToReal(calculatedData[30]).toFixed(
              2
            )}`}
          </span>
        )}
        {!!calculatedData[90] && (
          <span>
            {`Em 90 dias: R$ ${convertCentsToReal(calculatedData[90]).toFixed(
              2
            )}`}
          </span>
        )}
        {!!calculatedData[180] && (
          <span>
            {`Em 180 dias: R$ ${convertCentsToReal(calculatedData[180]).toFixed(
              2
            )}`}
          </span>
        )}
      </BoxData>
    </Container>
  );
};
