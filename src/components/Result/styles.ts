import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  margin-bottom: 2rem;
`;

export const BoxTitle = styled.div`
  border-bottom: 2px dashed ${(props) => props.theme.darkBlue};

  margin-top: 1rem;

  & > h3 {
    font-size: 25pt;

    color: ${(props) => props.theme.secondary};
  }
`;

export const BoxData = styled.section`
  width: 90vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  & > span {
    font-size: 16pt;
    font-weight: bold;

    color: ${(props) => props.theme.darkBlue};
  }

  @media (min-width: 767px) {
    & > span {
      font-size: 22pt;
    }
  }
`;
