import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  background-color: ${(props) => props.theme.primary};

  & > img {
    width: 70vw;
  }

  & > h2 {
    width: 80vw;
    font-size: 20pt;

    text-align: center;

    color: ${(props) => props.theme.secondary};
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;

    & > span {
      width: 85vw;
      font-size: 16pt;

      text-align: center;

      color: ${(props) => props.theme.secondary};

      & > a {
        text-decoration: none;

        color: ${(props) => props.theme.error};

        cursor: pointer;

        :hover {
          transition: 0.6s;

          color: ${(props) => props.theme.darkBlue};
        }
      }
    }

    & > p {
      width: 85vw;
      font-size: 18pt;

      text-align: center;

      color: ${(props) => props.theme.error};

      cursor: pointer;

      :hover {
        transition: 0.6s;

        color: ${(props) => props.theme.darkBlue};
      }
    }
  }

  @media (min-width: 767px) {
    & > img {
      width: 60vw;
    }

    & > h2 {
      font-size: 25pt;
    }

    & > div {
      gap: 1rem;

      & > span {
        font-size: 20pt;
      }

      & > p {
        font-size: 30pt;
      }
    }
  }

  @media (min-width: 1000px) {
    & > img {
      width: 22vw;
    }
  }
`;
