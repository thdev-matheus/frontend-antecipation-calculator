import styled from "styled-components";

export const SHeader = styled.div`
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
    width: 70vw;
    height: 2.5rem;
  }
`;
