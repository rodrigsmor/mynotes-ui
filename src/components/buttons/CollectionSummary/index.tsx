import { HiChevronRight, HiOutlineHome } from 'react-icons/hi2';
import { collectionSummaryType } from '../../../utils/types/collection';
import { CollectionSummaryContainer } from "./styled";
import { CategoriesStyle } from '../../../utils/models/categoryStyle';
import { IconContext } from 'react-icons';

interface CollectionSummaryProps {
  props: collectionSummaryType;
}

export const CollectionSummary = (collection: CollectionSummaryProps) => {
  const { category, notesAmount, id, name } = collection.props;

  return (
    <CollectionSummaryContainer to={`/app/collections/collection/${id}`} aria-labelledby={`collection-summary_title_${id}`} category={CategoriesStyle[category].color}>
      <span className='icon'>
        <IconContext.Provider value={{ size: '24px' }}>
          { CategoriesStyle[category].Icon }
        </IconContext.Provider>
      </span>
      <div>
        <p id={`collection-summary_title_${id}`}>{ name }</p>
        <p>{ notesAmount } anotações</p>
      </div>
      <IconContext.Provider value={{ size: '18px' }}>
        <HiChevronRight />
      </IconContext.Provider>
    </CollectionSummaryContainer>
  )
}