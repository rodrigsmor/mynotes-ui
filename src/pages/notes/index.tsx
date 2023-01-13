import { AuthLayout } from "../../components/common/AuthLayout";
import { NotesPageContent, SectionHeader, VisualizationGroup } from "./styled";
import { SelectButton } from '../../components/forms/SelectButton/index';
import { HiOutlineQueueList, HiOutlineSquares2X2 } from "react-icons/hi2";
import { useReducer } from "react";

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
        </SectionHeader>
      </NotesPageContent>
    </AuthLayout>
  );
}