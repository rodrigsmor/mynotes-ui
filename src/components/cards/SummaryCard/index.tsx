import { IconContext } from "react-icons";
import { SummaryCardContainer } from "./styled";

export type SummaryCardProps = {
  id: string;
  title: string;
  amount: number;
  Icon: JSX.Element;
  colors: 'success' | 'danger' | 'primary';
}

export const SummaryCard = ({ colors, amount, id, Icon, title }: SummaryCardProps) => {
  return (
    <SummaryCardContainer colors={colors} aria-labelledby={`summaryCard_${id}`}>
      <div className='icon'>
        <IconContext.Provider value={{ size: '28px' }}>
          { Icon }
        </IconContext.Provider>
      </div>
      <div className='summaryCard-details'>
        <h5 id={`summaryCard_${id}`}>{ title }</h5>
        <p>{ amount }</p>
      </div>
    </SummaryCardContainer>
  );
}