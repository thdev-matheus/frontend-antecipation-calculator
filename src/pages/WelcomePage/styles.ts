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

    margin-bottom: -2rem;
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
      width: 35vw;

      margin-bottom: -5rem;
    }

    & > h2 {
      width: 70vw;

      font-size: 25pt;
    }

    & > p {
      width: 70vw;

      font-size: 14pt;
    }
  }
`;

export const NavButton = styled(Button)`
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
    width: 70vw;
    height: 2.5rem;

    font-size: 18pt;
  }
`;
