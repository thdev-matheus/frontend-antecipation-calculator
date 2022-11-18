import styled, { css } from "styled-components";
import { IcontainerProps, IInputContainerProps } from "./types";

export const Container = styled.div<IcontainerProps>`
  width: ${(props) => props.width || "100%"};

  text-align: left;

  & > div {
    margin-bottom: 0.5rem;
    padding-left: 1rem;

    color: ${(props) => props.theme.secondary};
    & > span {
      color: ${(props) => props.theme.error || "red"};
    }
  }
  @media (min-width: 767px) {
    & > div {
      font-size: 18pt;
    }
  }
`;
export const InputContainer = styled.div<IInputContainerProps>`
  width: 100%;

  display: flex;

  padding: 1rem;

  border: 3px solid ${(props) => props.theme.secondary};
  border-radius: 10px;

  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};

  transition: 0.4s;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${(props) => props.theme.error || "red"};
      svg {
        color: ${(props) => props.theme.error || "red"};
      }
    `}

  & > input {
    flex: 1;
    align-items: center;

    border: none;
    outline: none;

    background: transparent;
    color: ${(props) => props.theme.secondary};

    ::placeholder {
      color: ${(props) => props.theme.secondary};
    }

    ::-webkit-inner-spin-button {
      display: none;
    }
  }

  svg {
    margin-right: 1rem;
  }

  @media (min-width: 767px) {
    & > input {
      font-size: 16pt;
    }
  }
`;
