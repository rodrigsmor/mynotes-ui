import { CategoriesEnums } from "../enums/CategoriesEnums";

export type collectionSummaryType = {
  id: number;
  name: string;
  notesAmount: number;
  category: CategoriesEnums;
}