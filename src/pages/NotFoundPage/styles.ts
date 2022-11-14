import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
  & > img {
    width: 65vw;
  }
  & > h2 {
    width: 90vw;
    font-size: 20pt;
    color: var(--gray);
    margin-bottom: 1rem;
  }
  & > p {
    width: 90vw;

    font-size: 15pt;
  }

  & > span {
    font-size: 18pt;
  }
  @media (min-width: 767px) {
    & > img {
      width: 65vw;
    }
    & > h2 {
      width: 90vw;
      font-size: 40pt;
      color: var(--gray);
      margin-bottom: 1rem;
    }
    & > p {
      width: 90vw;
      font-size: 22pt;
    }

    & > span {
      cursor: pointer;

      transition: 0.6s;

      :hover {
        color: magenta;
      }
    }
  }
  @media (min-width: 1000px) {
    & > img {
      width: 26vw;
    }
    & > h2 {
      width: 90vw;
      font-size: 40pt;
      color: var(--gray);
      margin-bottom: 1rem;
    }
    & > p {
      width: 90vw;
      font-size: 22pt;
    }
  }
`;
