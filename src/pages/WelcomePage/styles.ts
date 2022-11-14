import styled from "styled-components";
import { Button } from "../../components/Button";

export const Container = styled.section`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  overflow-x: hidden;

  text-align: center;

  background-color: ${(props) => props.theme.primary};

  & > img {
    width: 70vw;
  }

  & > h2 {
    width: 80vw;

    font-size: 25pt;

    color: ${(props) => props.theme.secondary};
  }

  & > p {
    width: 90vw;

    font-size: 16pt;
    font-weight: bold;

    color: ${(props) => props.theme.secondary};
  }

  @media (min-width: 767px) {
    & > img {
      width: 50vw;
    }

    & > h2 {
      font-size: 40pt;
    }

    & > p {
      font-size: 22pt;
    }
  }

  @media (min-width: 1000px) {
    & > img {
      width: 20vw;
    }

    & > h2 {
      width: 40vw;

      font-size: 25pt;
    }

    & > p {
      width: 40vw;

      font-size: 14pt;
    }
  }
`;

export const Header = styled.div`
  width: 90vw;
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0 0 4rem 4rem;

  background-color: ${(props) => props.theme.darkBlue};
  color: ${(props) => props.theme.white};

  @media (min-width: 767px) {
    height: 3.5rem;
  }

  @media (min-width: 1000px) {
    width: 50vw;
    height: 3rem;
  }
`;

export const LoginButton = styled(Button)`
  width: 90vw;

  border-radius: 4rem 4rem 0 0;
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

  @media (min-width: 767px) {
    height: 3.5rem;

    font-size: 25pt;
  }

  @media (min-width: 1000px) {
    width: 50vw;
    height: 3.5rem;

    font-size: 20pt;
  }
`;
