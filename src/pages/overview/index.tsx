import { CollectionsSection, GreetingsSection, OverviewContainer, RecentNotesSection, SectionHeader, SectionPending } from "./styled";
import { AuthLayout } from "../../components/common/AuthLayout";
import { SummaryCard, SummaryCardProps } from "../../components/cards/SummaryCard";
import { HiOutlineDocumentText, HiOutlineCalendar, HiOutlineTrash } from 'react-icons/hi2';
import { Link } from "react-router-dom";
import { SeeMore } from "../../components/buttons/seeMore";
import { noteCardsHome } from "../../utils/mock";
import { NoteCard } from "../../components/cards/NoteCard";

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
          <SectionHeader>
            <h3>Suas anotações recentes</h3>
            <SeeMore isLink path="/app/notes" />
          </SectionHeader>
          <ul>
            {
              noteCardsHome.slice(0, 3).map((note) => (<li key={note.id}> <NoteCard note={note} view="ROW" /></li>))
            }
          </ul>
        </RecentNotesSection>
        <div className="other-sections">
          <CollectionsSection>

          </CollectionsSection>
          <SectionPending>

          </SectionPending>
        </div>
      </OverviewContainer>
    </AuthLayout>
  );
}