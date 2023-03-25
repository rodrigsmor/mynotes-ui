import { IconButton } from "../../buttons/IconButton";
import { HiDocumentDuplicate, HiHeart, HiLink, HiOutlineEllipsisVertical, HiPencilSquare, HiRectangleStack, HiTrash } from "react-icons/hi2";
import { NoteCardTypes } from "../../../utils/types/note-card";
import { formatFullDateTime, formatDate, formatTime } from '../../../utils/functions/formatDate';
import { NoteCardWrapper, MainInfos, NoteDetails, CoverImage, IconImage, CardTitle, CardContent, Category } from './styled';
import { Menu, OptionsProps } from "../../modals/Menu";
import { MouseEvent, MouseEventHandler } from 'react';

interface NoteCardComponentTypes {
  view: string;
  note: NoteCardTypes
}

export const NoteCard = ({ view, note }: NoteCardComponentTypes) => {
  let { id, title, category, content, coverUrl, imageUrl, lastUpdate } = note;

  const MenuOptions: Array<OptionsProps> = [
    {
      id: 0,
      Icon: <HiPencilSquare />,
      label: 'Editar anotação',
      command: '',
      onClick: (event: MouseEvent) => { event.preventDefault(); }
    }, {
      id: 1,
      Icon: <HiHeart />,
      label: 'Adicionar aos favoritos',
      command: 'CTRL + F',
      onClick: (event: MouseEvent) => { event.preventDefault(); }
    }, {
      id: 2,
      Icon: <HiRectangleStack />,
      label: 'Adicionar a coleção',
      command: 'CTRL + SHIFT + P',
      onClick: (event: MouseEvent) => { event.preventDefault(); }
    }, {
      id: 3,
      Icon: <HiDocumentDuplicate />,
      label: 'Duplicar anotação',
      command: 'CTRL + D',
      onClick: (event: MouseEvent) => { event.preventDefault(); alert('duplicar') }
    }, {
      id: 4,
      Icon: <HiLink />,
      label: 'Copiar link',
      command: 'CTRL + SHIFT + C',
      onClick: (event: MouseEvent) => { event.preventDefault(); }
    }, {
      id: 5,
      Icon: <HiTrash />,
      label: 'Apagar anotação',
      command: 'delete ou backspace',
      onClick: (event: MouseEvent) => { event.preventDefault(); }
    },
  ]

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
      <Menu
        options={MenuOptions}
        name={`NoteCard-menu-${id}`}
        date={formatDate(lastUpdate)}
        time={`${formatTime(lastUpdate)}h`}
      />
      <Category>{category}</Category>
      <NoteDetails>
        <time dateTime={lastUpdate.toDateString()}>
          {formatFullDateTime(lastUpdate)}
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
        <Menu
          options={MenuOptions}
          name={`NoteCard-menu-${id}`}
          date={formatDate(lastUpdate)}
          time={`${formatTime(lastUpdate)}h`}
        />
      </MainInfos>
      <NoteDetails>
        <time dateTime={lastUpdate.toDateString()}>
          {formatFullDateTime(lastUpdate)}
        </time>
        <Category>{category}</Category>
      </NoteDetails>
    </>
  );

  return (
    <NoteCardWrapper className={view} to={`/app/notes/${id}`}>
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