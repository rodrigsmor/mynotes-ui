import { HiXMark } from "react-icons/hi2";
import { MouseEventHandler, useState } from 'react';
import { IconButton } from "../../buttons/IconButton";
import { ImageUpload } from "../../forms/ImageUpload";
import { AnnotationThumbnailPreview, CreateNoteContainer, HeaderModal, ModalBackground, NoteDetailsForm, TopSection } from './styled';

type CreateNoteModalProps = {
  show: boolean;
  onClose: MouseEventHandler;
}

export const CreateNoteModal: React.FC<CreateNoteModalProps> = ({ show, onClose }) => {
  const [ noteCover, setNoteCover ] = useState<File>();
  
  return (
    <ModalBackground className={`${!show && 'hide-modal'}`}>
      <CreateNoteContainer
        role='dialog'
        tabIndex={1}
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
            <AnnotationThumbnailPreview
              alt='miniatura da imagem'
              src='https://sextouviajou.com.br/wp-content/uploads/2022/01/Sao-Paulo.jpg'
            />
          </TopSection>
          <section></section>
          <span></span>
        </NoteDetailsForm>
      </CreateNoteContainer>
    </ModalBackground>
  );
}