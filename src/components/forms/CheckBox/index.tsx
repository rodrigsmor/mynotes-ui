import { MouseEvent, MouseEventHandler } from 'react';
import { CheckBoxContainer, LabelCheckbox } from "./styled";

type CheckBoxProps = {
  id: number;
  name: string;
  value: string;
  isChecked: boolean;
  onSelection: (props: OnSelectionTypes) => void;
}

export type OnSelectionTypes = {
  id: number;
  event: MouseEvent;
}

export const CheckBox = ({ id, name, value, isChecked, onSelection }: CheckBoxProps) => {
  return (
    <CheckBoxContainer 
      role={'checkbox'} 
      className={`${isChecked && 'checked'}`} 
      aria-checked={isChecked} 
      aria-labelledby={name}
      onClick={event => onSelection({ id, event })}
    >
      <LabelCheckbox id={name}>{ value }</LabelCheckbox>
    </CheckBoxContainer>
  );
}