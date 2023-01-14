import { CategoriesEnums } from "../enums/CategoriesEnums";

type NoteCardTypes = {
  id: number;
  title: string;
  content: string;
  coverUrl: string;
  imageUrl: string;
  lastUpdate: Date;
  category: CategoriesEnums;
}