import { IconContext } from "react-icons";
import { IconButtonContainer } from "./styled";

type IconButtonProps = {
  Icon: JSX.Element,
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const IconButton = ({ Icon, onClick }: IconButtonProps) => {
  return (
    <IconButtonContainer
      onClick={onClick}
      className='icon-button'
    >
      <IconContext.Provider value={{ size: '24px' }}>
        { Icon }
      </IconContext.Provider>
    </IconButtonContainer>
  );
}