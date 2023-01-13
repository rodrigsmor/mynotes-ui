import { IconContext } from "react-icons";
import { IconButtonContainer } from "./styled";

type IconButtonProps = {
  Icon: JSX.Element,
  className?: string,
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const IconButton = ({ Icon, onClick, className }: IconButtonProps) => {
  return (
    <IconButtonContainer
      onClick={onClick}
      className={`icon-button ${className}`}
    >
      <IconContext.Provider value={{ size: '24px' }}>
        { Icon }
      </IconContext.Provider>
    </IconButtonContainer>
  );
}