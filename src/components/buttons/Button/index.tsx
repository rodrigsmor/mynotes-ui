import { Children } from "react";
import { ButtonContainer } from "./styled";
import { ThemeEnums } from '../../../utils/enums/ThemeEnums';

type ButtonProps = {
  children: JSX.Element;
  theme: ThemeEnums;
  name?: string;
}

export const Button = ({ children, theme, name }: ButtonProps) => {
  return (
    <ButtonContainer className={`${theme} ${name}`}>
      { children }
    </ButtonContainer>
  );
}