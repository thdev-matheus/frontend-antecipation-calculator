import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;

  overflow: hidden auto;

  background-color: ${(props) => props.theme.primary};

  & > h1 {
    font-size: 25pt;

    border-bottom: 2px dashed ${(props) => props.theme.darkBlue};

    margin-top: 1rem;

    color: ${(props) => props.theme.secondary};
  }

  & > section {
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  @media (min-width: 1000px) {
    & > section {
      flex-direction: row;
      justify-content: center;

      align-items: flex-start;
    }
  }
`;

export const Footer = styled.footer`
  min-height: 5rem;
  width: 90vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 3rem 0;

  & > h3 {
    font-size: 25pt;

    border-bottom: 2px dashed ${(props) => props.theme.darkBlue};

    margin-bottom: 2rem;

    color: ${(props) => props.theme.secondary};
  }

  @media (min-width: 1000px) {
    margin-top: 2rem;

    & > h3 {
      margin-bottom: 2rem;
    }
  }
`;

export const BoxErrorButtons = styled.div`
  width: 90vw;

  display: flex;
  justify-content: space-around;

  padding-bottom: 1rem;

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
    padding-bottom: 3rem;
    & > button {
      padding: 1rem;

      font-size: 18pt;
    }
  }
`;
