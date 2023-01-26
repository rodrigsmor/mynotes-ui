import { useReducer, FormEvent } from 'react';
import { noteCardsHome } from '../../utils/mock/index';
import { Button } from "../../components/buttons/Button";
import { ThemeEnums } from '../../utils/enums/ThemeEnums';
import { NoteCard } from "../../components/cards/NoteCard";
import { AuthLayout } from "../../components/common/AuthLayout";
import { FilterByModal } from "../../components/modals/FilterByModal";
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

function viewReducer(state: SelectState, action: SelectAction) {
  switch (action.type) {
    case SelectActionsEnums.SELECT_GRID:
      return { current: 'GRID' }
    case SelectActionsEnums.SELECT_LIST:
      return { current: 'LIST' }
    default: 
      return state;
  }
}

interface ModalStateType {
  type: string;
  showModal: boolean;
}

enum ModalActionsEnums {
  OPEN_FILTER_BY_MODAL,
  OPEN_ORDER_BY_MODAL,
  OPEN_ADD_NOTE_MODAL,
  CLOSE_MODAL,
}

interface ModalAction {
  type: ModalActionsEnums;
}

function modalReducer(state: ModalStateType, action: ModalAction) {
  switch (action.type) {
    case ModalActionsEnums.OPEN_ADD_NOTE_MODAL:
      return { type: 'ADD_NOTE', showModal: true }
    case ModalActionsEnums.OPEN_FILTER_BY_MODAL:
      return { type: 'FILTER_BY', showModal: true }
    case ModalActionsEnums.OPEN_ORDER_BY_MODAL:
      return { type: 'ORDER_BY', showModal: true }
    case ModalActionsEnums.CLOSE_MODAL:
      return { type: '', showModal: false }
    default: 
      return state;
  }
}

export const Notes = () => {
  const [ currentView, dispatch ] = useReducer(viewReducer, { current: 'LIST' });
  const [ modal, modalDispatch ] = useReducer(modalReducer, { type: '', showModal: false });

  function handleCloseModal() {
    modalDispatch({ type: ModalActionsEnums.CLOSE_MODAL});
  }

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
            <Button theme={ThemeEnums.SURFACE} onClick={e => modalDispatch({ type: ModalActionsEnums.OPEN_FILTER_BY_MODAL })} controlId={'filterBy_modal'}>
              <>
                <HiOutlineFunnel />
                <p>Filtrar por</p>
              </>
            </Button>
            <Button theme={ThemeEnums.SURFACE} onClick={e => modalDispatch({ type: ModalActionsEnums.OPEN_ORDER_BY_MODAL })} >
              <>
                <HiOutlineArrowPath />
                <p>Ordenar por</p>
              </>
            </Button>
            <Button name='add_button_desktop' theme={ThemeEnums.DEFAULT} onClick={e => modalDispatch({ type: ModalActionsEnums.OPEN_ADD_NOTE_MODAL })}>
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
                key={data.id}
                view={currentView.current}
              />
            ))
          }
        </NotesListingWrapper>
        <PaginationController />
        <FilterByModal showModal={modal.showModal && modal.type === 'FILTER_BY'} onClose={handleCloseModal} closeModal={handleCloseModal} />
      </NotesPageContent>
    </AuthLayout>
  );
}