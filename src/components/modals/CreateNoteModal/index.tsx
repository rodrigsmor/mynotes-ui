import { HiXMark } from "react-icons/hi2";
import { MouseEventHandler, useState, useEffect, useRef } from 'react';
import { IconButton } from "../../buttons/IconButton";
import { ImageUpload } from "../../forms/ImageUpload";
import { CreateNoteContainer, HeaderModal, ModalBackground, NoteDetailsForm, TopSection } from './styled';

type CreateNoteModalProps = {
  show: boolean;
  onClose: MouseEventHandler;
}

export const CreateNoteModal: React.FC<CreateNoteModalProps> = ({ show, onClose }) => {
  const modalRef = useRef<HTMLFormElement>(null);
  const [ noteCover, setNoteCover ] = useState<File | undefined>();
  const [ noteThumbnail, setNoteThumbnail ] = useState<File | undefined>();

  useEffect(() => {
    show && modalRef.current?.focus();
  }, [ show ])
  
  return (
    <ModalBackground className={`${!show && 'hide-modal'}`}>
      <CreateNoteContainer
        role='dialog'
        tabIndex={-1}
        ref={modalRef}
        aria-modal={true}
        aria-hidden={show}
        id='createAnnotation_Modal'
        aria-labelledby='createAnnotation_TitleHeading'
      >
        <HeaderModal>
          <h2 id='createAnnotation_TitleHeading'>Criar nova anotação</h2>
          <IconButton
            onClick={onClose}
            Icon={<HiXMark />}
            attributes={{
              "title": 'Fechar modal',
              "aria-label": 'Fechar modal',
              "type": 'button'
            }}
          />
        </HeaderModal>
        <NoteDetailsForm>
          <TopSection>
            <ImageUpload
              type='cover'
              name='image_inputCover'
              setImage={setNoteCover}
              label='Selecionar uma capa para sua anotação'
            />
            <ImageUpload
              type='thumbnail'
              name='image_inputThumbnail'
              setImage={setNoteThumbnail}
              label='Selecionar miniatura da anotação'
            />
          </TopSection>
          <section></section>
          <span></span>
        </NoteDetailsForm>
      </CreateNoteContainer>
    </ModalBackground>
  );
}