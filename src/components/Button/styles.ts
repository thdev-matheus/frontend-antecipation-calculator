import styled from "styled-components";
import { IStyledButtonProps } from "./types";

export const StyledButton = styled.button<IStyledButtonProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  display: flex;
  justify-content: center;
  align-items: center;

  padding: ${(props) => props.padding};

  border-radius: ${(props) => props.borderRadius};
  border: none;

  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};

  font-size: 14pt;
  font-weight: bold;

  cursor: pointer;

  transition: 0.6s;

  :hover {
    color: ${(props) => props.theme.darkBlue || "#0984e3"};
    background-color: ${(props) => props.theme.ligthBlue || "#74b9ff"};

    transition: 0.6s;
  }
`;
