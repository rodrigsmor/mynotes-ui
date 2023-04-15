import { CollectionsSection, GreetingsSection, OverviewContainer, RecentNotesSection, SectionHeader, SectionPending } from "./styled";
import { AuthLayout } from "../../components/common/AuthLayout";
import { SummaryCard, SummaryCardProps } from "../../components/cards/SummaryCard";
import { HiOutlineDocumentText, HiOutlineCalendar, HiOutlineTrash } from 'react-icons/hi2';
import { Link } from "react-router-dom";
import { SeeMore } from "../../components/buttons/seeMore";
import { collectionsSummary, noteCardsHome } from "../../utils/mock";
import { NoteCard } from "../../components/cards/NoteCard";
import { CollectionSummary } from "../../components/buttons/CollectionSummary";

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
        <RecentNotesSection aria-labelledby="section_recentNotes-title">
          <SectionHeader>
            <h3 id='section_recentNotes-title'>Suas anotações recentes</h3>
            <SeeMore isLink path="/app/notes" />
          </SectionHeader>
          <ul>
            { noteCardsHome.slice(0, 6).map((note) => (<li key={note.id}> <NoteCard note={note} view="ROW" /></li>)) }
          </ul>
        </RecentNotesSection>
        <div className="other-sections">
          <CollectionsSection aria-labelledby='section_collections-title'>
            <SectionHeader>
              <h3 id='section_collections-title'>Coleções</h3>
              <SeeMore isLink path="/app/collections" />
            </SectionHeader>
            <ul>
              {
                collectionsSummary.map((collection) => (
                  <li key={collection.id}>
                    <CollectionSummary props={collection} />
                  </li>
                ))
              }
            </ul>
          </CollectionsSection>
          <SectionPending>
            <SectionHeader>
              <h3 id='section_collections-title'>Suas pendências</h3>
            </SectionHeader>

          </SectionPending>
        </div>
      </OverviewContainer>
    </AuthLayout>
  );
}