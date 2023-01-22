import { ChangeEvent } from "react";
import { InputContainer, InputElement } from './styled';

interface InputProps {
  name: string;
  value: string;
  Icon?: JSX.Element;
  placeholder: string;
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
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={'nope'}
      />
    </InputContainer>
  );
}