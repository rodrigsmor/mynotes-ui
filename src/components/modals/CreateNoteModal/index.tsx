import { HiXMark } from "react-icons/hi2";
import { MouseEventHandler } from "react";
import { IconButton } from "../../buttons/IconButton";
import { AnnotationCoverPreview, AnnotationThumbnailPreview, CreateNoteContainer, HeaderModal, ModalBackground, NoteDetailsForm, TopSection } from './styled';

type CreateNoteModalProps = {
  show: boolean;
  onClose: MouseEventHandler;
}

export const CreateNoteModal: React.FC<CreateNoteModalProps> = ({ show, onClose }) => {
  return (
    <ModalBackground className={`${!show && 'hide-modal'}`}>
      <CreateNoteContainer
        role='dialog'
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
            <AnnotationCoverPreview
              alt='cover da imagem'
              src='https://images.unsplash.com/photo-1595864968156-b643d9028611?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&w=1000&q=80' 
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