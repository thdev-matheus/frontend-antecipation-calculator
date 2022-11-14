import styled from "styled-components";
import { IStyledButtonProps } from "./types";

export const StyledButton = styled.button<IStyledButtonProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;

  color: ${(props) => props.color || "#407BFF"};
  background-color: ${(props) => props.bgColor || "#f9f9f9"};

  cursor: pointer;
`;
