import { OrdinationSection } from './styled';
import { CheckBox } from '../../forms/CheckBox';
import { ModalTemplate } from "../ModalTemplate";
import { useSearchParams } from 'react-router-dom';
import { RadionButton } from '../../forms/RadionButton'
import { HiArrowsUpDown, HiOutlineArrowPath } from 'react-icons/hi2';
import { SearchParamsObjectTypes } from '../../../utils/types/search-params';
import { MouseEventHandler, FormEventHandler, useState, useEffect, MouseEvent } from 'react';
import { CategoriesWrapper, FilterByContent, FilterBySections, SectionModalHeader, SectionTitleModal } from "../FilterByModal/styled";

interface OrderByProps {
  showModal: boolean;
  closeModal: () => void;
  onClose: MouseEventHandler;
}

interface onSelectProps {
  event: MouseEvent;
  value: 'changeDate' | 'creationDate' | 'title' | '';
}

export const OrderByModal: React.FC<OrderByProps> = ({ closeModal, onClose, showModal }) => {
  const [SearchParams, setSearchParams] = useSearchParams();
  const [ ordination, setOrdination ] = useState<'ASC' | 'DESC'>('ASC');
  const [orderBy, setOrderBy] = useState<'changeDate' | 'creationDate' | 'title' | string>('');
  
  useEffect(() => {
    SearchParams.get('orderBy') && setOrderBy(SearchParams?.get('orderBy') || '')
    SearchParams.get('ordination') && setOrdination('DESC')
  }, [ SearchParams ])

  const onSubmit: FormEventHandler = (event) => {
    event.preventDefault();
  
    let searchParamsObject: SearchParamsObjectTypes = new Object({});

    if(orderBy !== '')
      searchParamsObject.orderBy = orderBy;

    if (ordination !== 'ASC')
      searchParamsObject.ordination = ordination;

    SearchParams.forEach((value, id) => {
      if(id !== 'orderBy')
        searchParamsObject[id] = value;
    })

    Object.values(searchParamsObject).every(values => values !== '')
      ? setSearchParams(searchParamsObject)
      : setSearchParams({})

    closeModal();
  }

  const onSelect = ({ event, value }: onSelectProps) => {
    event.preventDefault();

    if(orderBy === value)
      setOrderBy('')
    else
      setOrderBy(value)
  }

  return (
    <ModalTemplate
      show={showModal}
      onClose={onClose}
      title="Ordenar por"
      name="orderBy_Modal"
      labelButton="salvar"
      onSubmit={onSubmit}
    >
      <FilterByContent>
        <FilterBySections role={'group'}>
          <SectionModalHeader>
            <HiOutlineArrowPath />
            <SectionTitleModal>Tipo</SectionTitleModal>
          </SectionModalHeader>
          <CategoriesWrapper>
            <CheckBox
              id={0}
              value='ascendente'
              name='orderBy_checkbox-ASC'
              isChecked={ordination === 'ASC'}
              onSelection={() => setOrdination('ASC')}
            />
            <CheckBox
              id={0}
              value='decrescente'
              name='orderBy_checkbox-DESC'
              isChecked={ordination === 'DESC'}
              onSelection={() => setOrdination('DESC')}
            />
          </CategoriesWrapper>
        </FilterBySections>
        <FilterBySections>
          <SectionModalHeader>
            <HiArrowsUpDown />
            <SectionTitleModal>Ordenação</SectionTitleModal>
          </SectionModalHeader>
          <OrdinationSection role='radiogroup'>
            <RadionButton label='Data de criação' isSelected={orderBy === 'creationDate'} onSelect={event => onSelect({ event, value: 'creationDate' })} />
            <RadionButton label='Data de alteração' isSelected={orderBy === 'changeDate'} onSelect={event => onSelect({ event, value: 'changeDate' })} />
            <RadionButton label='Título da anotação' isSelected={orderBy === 'title'} onSelect={event => onSelect({ event, value: 'title'})} />
          </OrdinationSection>
        </FilterBySections>
      </FilterByContent>
    </ModalTemplate>
  );
}