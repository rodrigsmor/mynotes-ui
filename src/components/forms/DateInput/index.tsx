import { ChangeEvent } from 'react';
import { HiOutlineCalendar } from 'react-icons/hi2';
import { DateInputContainer, InputGroup, LabelDateInput, InputElement } from './styled';

type DateInputProps = {
  name: string;
  label: string;
  value: string;
  setValue: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const DateInput = ({ label, name, value, setValue }: DateInputProps) => {
  return (
    <DateInputContainer className='date-input'>
      <LabelDateInput htmlFor={name}>{ label }</LabelDateInput>
      <InputGroup>
        <HiOutlineCalendar size={18} />
        <InputElement
          id={name}
          type='date'
          onChange={setValue}
          placeholder='01/12/2023'
          value={value}
        />
      </InputGroup>
    </DateInputContainer>
  );
}