import { CardInput } from "../../forms/CardInput";
import { IconButton } from "../../buttons/IconButton";
import { ImageUpload } from "../../forms/ImageUpload";
import { HiBars3BottomLeft, HiOutlineInformationCircle, HiXMark } from "react-icons/hi2";
import { MouseEventHandler, useState, useEffect, useRef } from 'react';
import { CategoryFieldGroup, CreateNoteContainer, FieldGroup, FieldLabel, HeaderModal, MainFormSection, ModalBackground, NoteDetailsForm, SubmitButtonsGroup, TopSection } from './styled';
import { Select } from "../../forms/Select";
import { categoriesFilterModel } from '../../../utils/models/categoriesFilter';
import { TextArea } from "../../forms/TextArea";
import { Button } from "../../buttons/Button";
import { ThemeEnums } from '../../../utils/enums/ThemeEnums';

type CreateNoteModalProps = {
  show: boolean;
  onClose: MouseEventHandler;
}

export const CreateNoteModal: React.FC<CreateNoteModalProps> = ({ show, onClose }) => {
  const modalRef = useRef<HTMLFormElement>(null);
  const [ noteTitle, setNoteTitle ] = useState<string>('');
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
          <MainFormSection>
            <FieldGroup>
              <FieldLabel htmlFor='cardNote-title' title='título da anotação' aria-label='título da anotação'>
                <HiOutlineInformationCircle />
              </FieldLabel>
              <CardInput type='text' placeholder="Dê um título para sua anotação" value={noteTitle} setValue={setNoteTitle} name='cardNote-title' label="" />
              <CategoryFieldGroup>
                <FieldLabel
                  htmlFor="select_form-Category"
                  className='category-label'
                >
                  categoria:
                </FieldLabel>
                <Select
                  name='Category'
                  options={categoriesFilterModel}
                />
              </CategoryFieldGroup>
            </FieldGroup>
            <FieldGroup>
              <FieldLabel className='label_CardContent' htmlFor='cardNote-content' title='Conteúdo da anotação' aria-label='Conteúdo da anotação'>
                <HiBars3BottomLeft />
                <span>Descrição</span>
              </FieldLabel>
              <TextArea />
            </FieldGroup>
          </MainFormSection>
          <section></section>
          <SubmitButtonsGroup>
            <Button
              type="reset"
              hasPopup={false}
              theme={ThemeEnums.SURFACE}
              controlId="createAnnotation_Modal"
              onClick={e => console.log(e)}
            >
              <>cancelar</>
            </Button>
            <Button
              type="submit"
              hasPopup={false}
              theme={ThemeEnums.DEFAULT}
              controlId="createAnnotation_Modal"
              onClick={e => console.log(e)}
            >
              <>salvar anotação</>
            </Button>
          </SubmitButtonsGroup>
        </NoteDetailsForm>
      </CreateNoteContainer>
    </ModalBackground>
  );
}