import { ChangeEvent } from "react";
import { InputContainer, InputElement } from './styled';

interface InputProps {
  name: string;
  Icon?: JSX.Element;
  placeholder: string;
  value: string | undefined;
  type: 'text' | 'password' | 'email' 
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ Icon, name, type, value, onChange, placeholder }: InputProps) => {
  return (
    <InputContainer>
      { Icon }
      <InputElement 
        id={name}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete="off"
      />
    </InputContainer>
  );
}