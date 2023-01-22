import { HiTag } from "react-icons/hi2";
import { HiClock } from "react-icons/hi";
import { CheckBox } from "../../forms/CheckBox";
import { ModalTemplate } from "../ModalTemplate";
import { DateInput } from "../../forms/DateInput";
import { useSearchParams } from 'react-router-dom';
import { OnSelectionTypes } from '../../forms/CheckBox/index';
import { categoriesFilterModel } from '../../../utils/models/categoriesFilter';
import { MouseEventHandler, useState, ChangeEvent, FormEventHandler, useEffect } from 'react';
import { CategoriesWrapper, FilterByContent, SectionModalHeader, SectionTitleModal, FilterBySections, PeriodFields } from './styled';

interface FilterByProps {
  showModal: boolean;
  closeModal: () => void;
  onClose: MouseEventHandler;
}

interface PeriodType {
  endDate: string;
  startDate: string;
}

type SearchParamsObjectTypes = {
  endDate?: string;
  startDate?: string;
  categories?: string;
}

export const FilterByModal = ({ showModal, onClose, closeModal }: FilterByProps) => {
  let [SearchParams, setSearchParams] = useSearchParams();
  const [period, setPeriod] = useState<PeriodType>({ endDate: SearchParams.get('endDate') || '', startDate: SearchParams.get('startDate') || '' });
  const [ categoriesFilterData, setCategoriesFilterData ] = useState(categoriesFilterModel.map((data) => {
    if (SearchParams.get('categories')?.includes(data.name))
      data.isSelected = true;

    return data;
  }));

  const onSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    let searchParamsObject: SearchParamsObjectTypes = new Object({});

    if(categoriesFilterData.length > 0) {
      searchParamsObject.categories = JSON.stringify(
        categoriesFilterData
          .filter(({ isSelected }) => isSelected)
          .map(({ name }) => { return name; })
      ).replaceAll(/[^A-Za-z0-9,]/g, '')
    }

    if(period.endDate.length > 0)
      searchParamsObject.endDate = new Date(period.endDate).toISOString().split('T')[0]

    if(period.startDate.length > 0)
      searchParamsObject.startDate = new Date(period.startDate).toISOString().split('T')[0]

    Object.values(searchParamsObject).every(value => value !== '') 
      ? setSearchParams(searchParamsObject)
      : setSearchParams({})
    closeModal();
  }

  const selectCategoryFilter = ({ id, event }: OnSelectionTypes) => {
    event.preventDefault();

    let categoriesUpdated = categoriesFilterData.map((data) => {
      if(data.id === id) {
        data.isSelected = !data.isSelected;
      }

      return data;
    });

    setCategoriesFilterData(categoriesUpdated);
  }
  
  return (
    <ModalTemplate 
      show={showModal} 
      onClose={onClose} 
      title='Filtrar por' 
      name='filterBy_modal' 
      labelButton="salvar" 
      onSubmit={onSubmit}
    >
      <FilterByContent>
        <FilterBySections role={'group'}>
          <SectionModalHeader>
            <HiTag />
            <SectionTitleModal>Categoria</SectionTitleModal>
          </SectionModalHeader>
          <CategoriesWrapper>
            {
              categoriesFilterData.map(({id, name, isSelected, value}, index) => (
                <li key={index}>
                  <CheckBox
                    id={id}
                    value={value}
                    isChecked={isSelected}
                    onSelection={selectCategoryFilter}
                    name={`filterBy_checkBox-${name}`}
                  />
                </li>
              ))
            }
          </CategoriesWrapper>
        </FilterBySections>
        <FilterBySections>
          <SectionModalHeader>
            <HiClock />
            <SectionTitleModal>Período</SectionTitleModal>
          </SectionModalHeader>
          <PeriodFields>
            <DateInput 
              label='data inicial'
              name='dateInput_initialDate'
              value={period.startDate}
              setValue={(event: ChangeEvent<HTMLInputElement>) => {
                setPeriod({ ...period, startDate: event.target.value })
              }}
            />
            <DateInput 
              label='data final'
              name='dateInput_finalDate'
              value={period.endDate}
              setValue={(event: ChangeEvent<HTMLInputElement>) => {
                setPeriod({ ...period, endDate: event.target.value })
              }}
            />
          </PeriodFields>
        </FilterBySections>
      </FilterByContent>
    </ModalTemplate>
  );
}