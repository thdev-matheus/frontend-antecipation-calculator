import { FaSun, FaMoon } from "react-icons/fa";
import { ISwitchButtonProps } from "./types";
import { useDarkMode } from "../../contexts/DarkMode";
import { Container } from "./styles";

export const SwitchButton = ({ size }: ISwitchButtonProps) => {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  const toggleDarkMode = (): void => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Container>
      {isDarkMode ? (
        <FaSun size={size} onClick={() => toggleDarkMode()} />
      ) : (
        <FaMoon size={size} onClick={() => toggleDarkMode()} />
      )}
    </Container>
  );
};
