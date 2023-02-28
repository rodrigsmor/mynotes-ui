import { ChangeEvent } from "react";
import { TextAreaWrapper } from "./styled";

interface TextAreaProps {
  name: string;
  value: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea: React.FC<TextAreaProps> = ({ name, placeholder, value, onChange }) => {
  return (
    <TextAreaWrapper
      id={name}
      value={value}
      onChange={onChange}
      className='textArea'
      placeholder={placeholder}
    >

    </TextAreaWrapper>
  );
}