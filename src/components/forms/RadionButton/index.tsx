import React from 'react';
import { LabelRadionButton, RadionContainer, RadionElement } from './styled';
import { MouseEventHandler } from 'react';

interface RadionProps {
  label: string;
  isSelected: boolean;
  onSelect: MouseEventHandler;
}

export const RadionButton: React.FC<RadionProps> = ({ label, onSelect, isSelected }) => {
  return (
    <RadionContainer 
      type='button'
      role={'radio'}
      onClick={onSelect}
      aria-checked={isSelected}
      className={`${isSelected && 'checked'}`} 
    >
      <RadionElement></RadionElement>
      <LabelRadionButton role='presentation'>{ label }</LabelRadionButton>
    </RadionContainer>
  );
}