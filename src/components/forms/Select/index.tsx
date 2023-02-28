import { useState, MouseEvent, useRef } from 'react';
import { HiChevronDown } from "react-icons/hi2";
import { SelectInput, SelectOption, SelectOptionsWrapper, SelectWrapper } from "./styled";

type SelectOptionsValues = {
  id: number;
  name: string;
  value: string;
}

interface SelectProps {
  name: string;
  className?: string;
  options: Array<SelectOptionsValues>;
  attributes?: React.HTMLAttributes<HTMLDivElement>
}

export const Select: React.FC<SelectProps> = ({ className, options, name, attributes }) => {
  const [ selected, setSelected ] = useState<string>('');
  const inputRef = useRef<HTMLButtonElement>(null);
  const [ showOptions, setShowOptions ] = useState<boolean>(false)

  const onSelect = (event: MouseEvent, data: string) => {
    event.preventDefault();
    setShowOptions(false);
    setSelected(selected === data ? '' : data)
    inputRef.current?.focus();
  }
  
  return (
    <SelectWrapper
      id={`select_form-${name}`}
      {...attributes}
    >
      <SelectInput ref={inputRef} className={`select_form-Button ${showOptions && 'focus'}`} aria-haspopup={true} type='button' onClick={e => setShowOptions(!showOptions)}>
        <span>{ selected || 'selecione a categoria' }</span>
        <HiChevronDown className="arrow-icon" />
      </SelectInput>
      <SelectOptionsWrapper className={`select_form-OptionsList ${showOptions && 'opened'}`} role='listbox' aria-expanded={showOptions}>
        {
          options.map(({ name, value }, id) => (
            <SelectOption key={id} role='option' tabIndex={0} onClick={e => onSelect(e, value)} className={`${selected === value && 'selected'}`}>
              { value }
            </SelectOption>
          ))
        }
      </SelectOptionsWrapper>
    </SelectWrapper>
  );
}