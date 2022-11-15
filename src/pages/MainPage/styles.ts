import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  overflow: auto;

  background-color: ${(props) => props.theme.primary};

  & > h1 {
    font-size: 25pt;

    border-bottom: 2px dashed ${(props) => props.theme.darkBlue};

    color: ${(props) => props.theme.secondary};
  }

  & > div {
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    margin: 0.5rem;
  }

  @media (min-width: 1000px) {
  }
`;

export const Footer = styled.footer`
  min-height: 5rem;
  width: 90vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  & > h3 {
    font-size: 25pt;

    border-bottom: 2px dashed ${(props) => props.theme.darkBlue};

    color: ${(props) => props.theme.secondary};
  }
`;

export const BoxErrorButtons = styled.div`
  width: 90vw;

  display: flex;
  justify-content: space-around;

  margin-bottom: 1rem;

  & > h3 {
    margin-top: 2rem;
  }

  & > button {
    border-radius: 0.8rem;
    border: 3px solid ${(props) => props.theme.darkBlue};

    background-color: ${(props) => props.theme.darkBlue};
    color: ${(props) => props.theme.white};

    font-size: 14pt;
    font-weight: bold;

    transition: 0.8s;

    :hover {
      background-color: ${(props) => props.theme.lightBlue};
      border-color: ${(props) => props.theme.lightBlue};
      color: ${(props) => props.theme.darkBlue};

      transition: 0.8s;
    }
  }

  @media (min-width: 767px) {
    & > button {
      padding: 1rem;

      font-size: 18pt;
    }
  }
`;
