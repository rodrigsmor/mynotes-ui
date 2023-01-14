import { IconButton } from "../../buttons/IconButton";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { NoteCardTypes } from "../../../utils/types/note-card";
import { formatDate } from '../../../utils/functions/formatDate';
import { NoteCardWrapper, MainInfos, NoteDetails, CoverImage, IconImage, CardTitle, CardContent, Category } from './styled';

interface NoteCardComponentTypes {
  view: string;
  note: NoteCardTypes
}

export const NoteCard = ({ view, note }: NoteCardComponentTypes) => {
  let { id, title, category, content, coverUrl, imageUrl, lastUpdate } = note;

  const GridCardView = () => (
    <>
      <CoverImage
        src={coverUrl}
        alt={`“${title}” capa`}
      />
      <IconImage
        src={imageUrl}
        className='icon-image'
        alt={`“${title}” ícone`}
      />
      <CardTitle>{title}</CardTitle>
      <CardContent>{content}</CardContent>
      <IconButton
        Icon={<HiOutlineEllipsisVertical />}
        onClick={e => alert('clique')}
      />
      <Category>{category}</Category>
      <NoteDetails>
        <time dateTime={lastUpdate.toDateString()}>
          {formatDate(lastUpdate)}
        </time>
      </NoteDetails>
    </>
  )

  const ListCardView = () => (
    <>
      <MainInfos>
        <IconImage
          src={imageUrl}
          alt={`“${title}” ícone`}
        />
        <CardTitle>{title}</CardTitle>
        <CardContent>{content}</CardContent>
        <IconButton
          Icon={<HiOutlineEllipsisVertical />}
          onClick={e => alert('clique')}
        />
      </MainInfos>
      <NoteDetails>
        <time dateTime={lastUpdate.toDateString()}>
          {formatDate(lastUpdate)}
        </time>
        <Category>{category}</Category>
      </NoteDetails>
    </>
  );

  return (
    <NoteCardWrapper className={view}>
      {
        view === 'GRID' ? (
          <GridCardView />
        ) : (
          <ListCardView />
        ) 
      }
    </NoteCardWrapper>
  );
}