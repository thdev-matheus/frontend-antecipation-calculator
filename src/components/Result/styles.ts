import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const BoxTitle = styled.div`
  border-bottom: 2px dashed ${(props) => props.theme.darkBlue};

  & > h3 {
    font-size: 25pt;

    color: ${(props) => props.theme.darkBlue};
  }
`;

export const BoxData = styled.section`
  width: 90vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  & > span {
    font-size: 18pt;
    font-weight: bold;

    color: ${(props) => props.theme.darkBlue};
  }
`;
