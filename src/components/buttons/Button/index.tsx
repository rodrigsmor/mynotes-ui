import { MouseEventHandler } from "react";
import { ButtonContainer } from "./styled";
import { ThemeEnums } from '../../../utils/enums/ThemeEnums';

type ButtonProps = {
  type?: 'submit' | 'button' | 'reset';
  name?: string;
  theme: ThemeEnums;
  controlId?: string;
  children: JSX.Element;
  onClick?: MouseEventHandler;
  hasPopup?: boolean;
}

export const Button = ({ type = 'button', children, theme, name, onClick, controlId, hasPopup = false }: ButtonProps) => {
  return (
    <ButtonContainer type={type} className={`${theme} ${name}`} onClick={onClick} aria-owns={controlId} aria-haspopup={hasPopup}>
      { children }
    </ButtonContainer>
  );
}