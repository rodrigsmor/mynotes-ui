import { CollectionsSection, GreetingsSection, OverviewContainer, RecentNotesSection, SectionPending } from "./styled";
import { AuthLayout } from "../../components/common/AuthLayout";
import { SummaryCard, SummaryCardProps } from "../../components/cards/SummaryCard";
import { HiOutlineDocumentText, HiOutlineCalendar, HiOutlineTrash } from 'react-icons/hi2';

export const Overview = () => {
  const summaryCards: Array<SummaryCardProps> = [
    {
      id: 'total',
      amount: 234,
      Icon: <HiOutlineDocumentText />,
      title: 'Total',
      colors: "primary",
    }, {
      id: 'month',
      amount: 2,
      Icon: <HiOutlineCalendar />,
      title: 'Do mês',
      colors: "success",
    }, {
      id: 'trash',
      amount: 21,
      Icon: <HiOutlineTrash />,
      title: 'Na lixeira',
      colors: "danger",
    },
  ]

  return (
    <AuthLayout>
      <OverviewContainer>
        <GreetingsSection>
          <p className="greetings-message">Olá, nome do usuário!</p>
          <p className="greetings-text">Dê uma olhada em como estão as suas anotações.</p>
          <ul>
            {summaryCards.map(({ amount, colors, id, Icon, title }) => <li key={id}><SummaryCard id={id} amount={amount} Icon={Icon} colors={colors} title={title} /></li>) }
          </ul>
        </GreetingsSection>
        <RecentNotesSection>

        </RecentNotesSection>
        <CollectionsSection>

        </CollectionsSection>
        <SectionPending>

        </SectionPending>
      </OverviewContainer>
    </AuthLayout>
  );
}