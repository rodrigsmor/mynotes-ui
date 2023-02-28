import { HiCheck } from "react-icons/hi2";
import { CheckElement, CheckInputWrapper, InputCheckbox } from "./styled"
import { useState } from 'react';

type CheckInputItemProps = {
  id: number;
  value: string;
  isChecked: boolean;
  setValue: (value: string) => void;
  setIsChecked: (value: boolean) => void;
  deleteItem: () => void;
}

export const CheckInputItem = ({ id, value, setValue, isChecked, setIsChecked, deleteItem }: CheckInputItemProps) => {
  const [ isInputDisabled, setIsInputDisabled ] = useState<boolean>(false);
  
  return (
    <CheckInputWrapper
      onDoubleClick={event => {
        event.preventDefault()
        setIsInputDisabled(false)
      }}
    >
      <CheckElement
        role='checkbox'
        aria-checked={isChecked}
        className={`${isChecked ? 'checked' : 'default'}`}
        onClick={e => setIsChecked(!isChecked)}
      >
        {isChecked && <HiCheck />}
      </CheckElement>
      {
        isInputDisabled ? (
          <p
            onDoubleClick={event => {
              event.preventDefault()
              alert('ms')
              setIsInputDisabled(false)
            }}
          >
            { value }
          </p>
        ) : (
          <InputCheckbox
            value={value}
            aria-label='Item'
            placeholder='Digite o valor...'
            onChange={event => {
              if(!isInputDisabled)
                setValue(event.target.value)
            }}
            disabled={isInputDisabled}
            onBlur={event => {
              if(value.length < 1)
                deleteItem();
              else
                setIsInputDisabled(true)
            }}
            className={`${isInputDisabled ? 'disabled' : 'enabled'}`}
          />
        )
      }
    </CheckInputWrapper>
  )
}