export interface ButtonProps {
  href: string;
  text: string;
  btnType: string;
  target?: string;
  download?: boolean;
  arrow?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
