import { ButtonHTMLAttributes, MouseEventHandler } from "react";
import { ButtonContainer, LinkButtonContainer } from "./styled";
import { ThemeEnums } from '../../../utils/enums/ThemeEnums';

type ButtonProps = {
  type?: 'submit' | 'button' | 'reset';
  name?: string;
  theme: ThemeEnums;
  controlId?: string;
  children: JSX.Element;
  onClick?: MouseEventHandler;
  hasPopup?: boolean;
  to?: string;
  props?: ButtonHTMLAttributes<HTMLButtonElement>;
}

export const Button = ({ to, type = 'button', children, theme, name, onClick, controlId, hasPopup = false, props }: ButtonProps) => {
  const Element: any = to ? LinkButtonContainer : ButtonContainer;
  
  return (
    <Element to={to} type={type} className={`${theme} ${name} styled-button`} onClick={onClick} aria-owns={controlId} aria-haspopup={hasPopup} {...props}>
      { children }
    </Element>
  );
}