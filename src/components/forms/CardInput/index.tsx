import { CardInputContainer } from './styled';

interface CardInputProps {
  type: string;
  name: string;
  value: string;
  label?: string;
  className?: string;
  placeholder: string;
  setValue: (value: string) => void;
  attributes?: React.InputHTMLAttributes<HTMLInputElement>;
}

export const CardInput: React.FC<CardInputProps> = ({ label, type, name, className, value, setValue, attributes, placeholder }) => {
  return (
    <CardInputContainer
      id={name}
      name={name}
      type={type}
      value={value}
      aria-label={label}
      placeholder={placeholder}
      onChange={e => setValue(e.target.value)}
      className={`card-input_Form-${name} ${className}`}
      {...attributes}
    />
  );
}