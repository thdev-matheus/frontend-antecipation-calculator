import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  & > label {
    font-size: 16pt;
    font-weight: bold;

    color: ${(props) => props.theme.secondary};
  }

  & > input {
    width: 1.5rem;
    height: 1.5rem;

    outline: 2px solid ${(props) => props.theme.secondary};
  }
`;
