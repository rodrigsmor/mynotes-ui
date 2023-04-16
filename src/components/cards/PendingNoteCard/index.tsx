import { CategoriesEnums } from "../../../utils/enums/CategoriesEnums";
import { formatDate, formatTime } from "../../../utils/functions/formatDate";
import { CategoriesStyle } from "../../../utils/models/categoryStyle";
import { Category } from "../NoteCard/styled";
import { PendingNoteCardWrapper } from "./styled";

export interface PendingNotesProps {
  id: number;
  date: Date;
  name: string;
  category: CategoriesEnums;
}

export const PendingNoteCard = ({ id, date, name, category }: PendingNotesProps) => {
  return (
    <PendingNoteCardWrapper to={`/app/notes/${id}`}>
      <time dateTime={date.toDateString()}>
        { formatDate(date) } <br/>
        <span>{formatTime(date)}h</span>
      </time>
      <div>
        <p>{ name }</p>
        <Category color={CategoriesStyle[category].color}>{ category }</Category>
      </div>
    </PendingNoteCardWrapper>
  );
}