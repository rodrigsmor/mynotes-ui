import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { IconButton } from "../../buttons/IconButton";
import { NoteCardWrapper, MainInfos, NoteDetails } from "./styled";

export const NoteCard = () => {
  return (
    <NoteCardWrapper>
      <MainInfos>
        <img
          src={'https://thumbs.dreamstime.com/b/sunflower-happiness-beautiful-to-bring-you-peace-love-every-morning-flowers-give-me-them-energy-have-great-day-194849296.jpg'}
          alt={''}
        />
        <h3>Título</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus similique labore sed, reprehenderit aut iusto nesciunt, asperiores aliquam odio ipsum fugit rerum explicabo, odit quisquam veniam perspiciatis quam ea! Velit.</p>
        <IconButton
          Icon={<HiOutlineEllipsisVertical />}
          onClick={e => alert('clique')}
        />
      </MainInfos>
      <NoteDetails>
        <time dateTime={'2001-05-15 19:00'}>
          25 de abril, 15:35h
        </time>

        <span>
          categoria
        </span>
      </NoteDetails>
    </NoteCardWrapper>
  );
}