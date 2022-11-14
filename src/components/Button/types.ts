export interface IButtonProps {
  width: string;
  height: string;
  text: string;
  color?: string;
  bgColor?: string;
  onClick?: () => void;
}

export interface IStyledButtonProps {
  width: string;
  height: string;
  bgColor?: string;
  color?: string;
}
