import { CategoriesEnums } from '../enums/CategoriesEnums';

type CategoriesFilterTypes = {
  id: number;
  name: string;
  isSelected: boolean;
  value: CategoriesEnums;
}

export const categoriesFilterModel: Array<CategoriesFilterTypes> = [
  {
    id: 1,
    name: 'WORK',
    isSelected: false,
    value: CategoriesEnums.WORK,
  }, {
    id: 2,
    name: 'STUDIES',
    isSelected: false,
    value: CategoriesEnums.STUDIES,
  }, {
    id: 3,
    name: 'TASKS',
    isSelected: false,
    value: CategoriesEnums.TASKS,
  }, {
    id: 4,
    name: 'HOME',
    isSelected: false,
    value: CategoriesEnums.HOME,
  }, {
    id: 5,
    name: 'PURCHASES',
    isSelected: false,
    value: CategoriesEnums.PURCHASES,
  }, {
    id: 6,
    name: 'SCHOOL',
    isSelected: false,
    value: CategoriesEnums.SCHOOL,
  }, {
    id: 7,
    name: 'GOALS',
    isSelected: false,
    value: CategoriesEnums.GOALS,
  }, {
    id: 8,
    name: 'PROFESSIONAL',
    isSelected: false,
    value: CategoriesEnums.PROFESSIONAL,
  }, {
    id: 9,
    name: 'PERSONAL',
    isSelected: false,
    value: CategoriesEnums.PERSONAL,
  }, {
    id: 10,
    name: 'OTHER',
    isSelected: false,
    value: CategoriesEnums.OTHER,
  },
]