import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { IconButton } from "../../buttons/IconButton";
import { NoteCardWrapper, MainInfos, NoteDetails } from "./styled";
import { NoteCardTypes } from "../../../utils/types/note-card";
import { formatDate } from '../../../utils/functions/formatDate';

export const NoteCard = ({ id, title, category, content, coverUrl, imageUrl, lastUpdate }: NoteCardTypes) => {
  return (
    <NoteCardWrapper>
      <MainInfos>
        <img
          src={imageUrl}
          alt={`“${title}” ícone`}
        />
        <h3>{ title }</h3>
        <p>{ content }</p>
        <IconButton
          Icon={<HiOutlineEllipsisVertical />}
          onClick={e => alert('clique')}
        />
      </MainInfos>
      <NoteDetails>
        <time dateTime={lastUpdate.toDateString()}>
          { formatDate(lastUpdate) }
        </time>

        <span>
          { category }
        </span>
      </NoteDetails>
    </NoteCardWrapper>
  );
}