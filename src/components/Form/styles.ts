import styled from "styled-components";

export const Container = styled.form`
  width: 80vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  & > button {
    width: 100%;

    margin-top: 1rem;
    border-radius: 0.8rem;
    border: 3px solid ${(props) => props.theme.darkBlue};

    background-color: ${(props) => props.theme.darkBlue};
    color: ${(props) => props.theme.white};

    font-size: 16pt;
    font-weight: bold;

    transition: 0.8s;

    :hover {
      background-color: ${(props) => props.theme.lightBlue};
      border-color: ${(props) => props.theme.lightBlue};
      color: ${(props) => props.theme.darkBlue};

      transition: 0.8s;
    }
  }
`;

export const BoxChecks = styled.fieldset`
  width: 100%;

  display: flex;
  justify-content: space-between;
  gap: 0.5rem;

  border: 3px solid ${(props) => props.theme.secondary};
  border-radius: 0.5rem;

  padding: 0.5rem;

  & > legend {
    padding-left: 0.5rem;

    font-size: 14pt;

    color: ${(props) => props.theme.secondary};
  }
`;
