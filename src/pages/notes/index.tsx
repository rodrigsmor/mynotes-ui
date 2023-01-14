import { useReducer } from "react";
import { noteCardsHome } from '../../utils/mock/index';
import { Button } from "../../components/buttons/Button";
import { ThemeEnums } from '../../utils/enums/ThemeEnums';
import { NoteCard } from "../../components/cards/NoteCard";
import { AuthLayout } from "../../components/common/AuthLayout";
import { SelectButton } from '../../components/forms/SelectButton/index';
import { PaginationController } from "../../components/common/PaginationController";
import { HiOutlineArrowPath, HiOutlineFunnel, HiOutlineQueueList, HiOutlineSquares2X2, HiPlus } from "react-icons/hi2";
import { InteractionsButton, NotesListingWrapper, NotesPageContent, SectionHeader, VisualizationGroup } from "./styled";

enum SelectActionsEnums {
  SELECT_GRID = 'SELECT_GRID',
  SELECT_LIST = 'SELECT_LIST'
}

interface SelectState {
  current: string;
}

interface SelectAction {
  type: SelectActionsEnums;
}

function reducer(state: SelectState, action: SelectAction) {
  switch (action.type) {
    case SelectActionsEnums.SELECT_GRID:
      return { current: 'GRID' }
    case SelectActionsEnums.SELECT_LIST:
      return { current: 'LIST' }
    default: 
      return state;
  }
}

export const Notes = () => {
  const [ currentView, dispatch ] = useReducer(reducer, { current: 'LIST' });

  return (
    <AuthLayout>
      <NotesPageContent>
        <SectionHeader>
          <VisualizationGroup>
            <h1>Todas anotações</h1>
            <div className='listing-display-checkbox-wrapper'>
              <SelectButton title='lista' label='mostrar como lista' isChecked={currentView.current === 'LIST'} Icon={<HiOutlineQueueList />} onSelection={e => dispatch({ type: SelectActionsEnums.SELECT_LIST })} />
              <SelectButton title='grade' label='mostrar como grade' isChecked={currentView.current === 'GRID'} Icon={<HiOutlineSquares2X2 />} onSelection={e => dispatch({ type: SelectActionsEnums.SELECT_GRID})} />
            </div>
          </VisualizationGroup>
          <InteractionsButton>
            <Button theme={ThemeEnums.SURFACE}>
              <>
                <HiOutlineFunnel />
                <p>Filtrar por</p>
              </>
            </Button>
            <Button theme={ThemeEnums.SURFACE}>
              <>
                <HiOutlineArrowPath />
                <p>Ordenar por</p>
              </>
            </Button>
            <Button name='add_button_desktop' theme={ThemeEnums.DEFAULT}>
              <>
                <HiPlus />
                <p>Criar anotação</p>
              </>
            </Button>
          </InteractionsButton>
        </SectionHeader>
        <NotesListingWrapper className={currentView.current}>
          {
            noteCardsHome.map((data) => (
              <NoteCard
                note={data}
                view={currentView.current}
              />
            ))
          }
        </NotesListingWrapper>
        <PaginationController />
      </NotesPageContent>
    </AuthLayout>
  );
}