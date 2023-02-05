import { IconContext } from "react-icons";
import { IconButtonContainer } from "./styled";

type IconButtonProps = {
  Icon: JSX.Element,
  iconSize?: string;
  className?: string,
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  attributes?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export const IconButton = ({ Icon, onClick, iconSize = '24px', className, attributes }: IconButtonProps) => {  
  return (
    <IconButtonContainer
      onClick={onClick}
      className={`icon-button ${className}`}
      {...attributes}
    >
      <IconContext.Provider value={{ size: iconSize }}>
        { Icon }
      </IconContext.Provider>
    </IconButtonContainer>
  );
}