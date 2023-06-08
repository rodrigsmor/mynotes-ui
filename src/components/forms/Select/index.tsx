import { HiChevronDown } from "react-icons/hi2";
import { useState, MouseEvent, KeyboardEvent, useRef } from 'react';
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

  const onSelect = (event: MouseEvent | KeyboardEvent, data: string) => {
    event.preventDefault();
    setShowOptions(false);
    setSelected(selected === data ? '' : data)
    inputRef.current?.focus();
  }

  const handleClick = (event: KeyboardEvent, data: string) => {
    if(event.key === 'Escape' || event.key === 'Enter') {
      onSelect(event, data)
    }
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
            <SelectOption key={id} role='option' tabIndex={0} onKeyDown={e => handleClick(e, value)} onClick={e => onSelect(e, value)} className={`${selected === value && 'selected'}`}>
              { value }
            </SelectOption>
          ))
        }
      </SelectOptionsWrapper>
    </SelectWrapper>
  );
}