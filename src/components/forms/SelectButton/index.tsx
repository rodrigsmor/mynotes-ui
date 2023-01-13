import { SelectButtonWrapper } from "./styled";

type SelectButtonProps = {
  label: string;
  title: string;
  Icon: JSX.Element;
  isChecked: boolean;
  onSelection: React.MouseEventHandler;
}

export const SelectButton = ({ title, label, isChecked, Icon, onSelection }: SelectButtonProps) => {
  return (
    <SelectButtonWrapper
      title={title}
      role='checkbox'
      aria-label={label}
      aria-checked={isChecked}
      className={`${ isChecked && 'isSelected' }`}
      onClick={onSelection}
    >
      { Icon }
    </SelectButtonWrapper>
  );
}