import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;

  overflow-x: hidden;

  text-align: center;

  & > img {
    width: 65vw;
  }

  & > h2 {
    width: 90vw;

    margin-bottom: 1rem;

    font-size: 20pt;

    color: ${(props) => props.theme.secondary};
  }

  & > p {
    width: 90vw;

    font-size: 15pt;

    color: ${(props) => props.theme.secondary};
  }

  & > span {
    margin-top: 1rem;

    font-size: 18pt;

    color: ${(props) => props.theme.darkBlue};
  }

  @media (min-width: 767px) {
    & > img {
      width: 50vw;
    }

    & > h2 {
      font-size: 40pt;

      color: ${(props) => props.theme.secondary};
    }

    & > p {
      font-size: 30pt;
    }

    & > span {
      font-size: 30pt;

      cursor: pointer;

      transition: 0.6s;

      color: ${(props) => props.theme.error};

      :hover {
        transition: 0.6s;

        color: ${(props) => props.theme.darkBlue};
      }
    }
  }

  @media (min-width: 1000px) {
    & > img {
      width: 26vw;
    }

    & > h2 {
      width: 90vw;

      font-size: 20pt;

      color: ${(props) => props.theme.secondary};
    }

    & > p {
      width: 90vw;

      font-size: 18pt;
    }

    & > span {
      font-size: 20pt;
    }
  }
`;
