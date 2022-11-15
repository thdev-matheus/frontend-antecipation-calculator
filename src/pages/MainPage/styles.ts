import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding-bottom: 2rem;

  overflow: auto;

  background-color: ${(props) => props.theme.primary};

  & > h1 {
    font-size: 30pt;

    margin: 1rem 0;

    color: ${(props) => props.theme.secondary};
  }
`;
