export interface IButtonProps {
  width?: string;
  height?: string;
  text: string;
  color?: string;
  bgColor?: string;
  onClick?: () => void;
  type?: string;
  padding?: string;
}

export interface IStyledButtonProps {
  width?: string;
  height?: string;
  bgColor?: string;
  color?: string;
  type?: string;
  padding?: string;
}
