import { CardInput } from "../../forms/CardInput";
import { IconButton } from "../../buttons/IconButton";
import { ImageUpload } from "../../forms/ImageUpload";
import { HiBars3BottomLeft, HiChevronDoubleLeft, HiChevronDoubleRight, HiOutlineInformationCircle, HiXMark, } from 'react-icons/hi2';
import { MouseEventHandler, useState, useEffect, useRef, FormEvent } from 'react';
import { CategoryFieldGroup, CreateNoteContainer, FieldGroup, FieldLabel, HeaderModal, MainFormSection, ModalBackground, NoteDetailsForm, SubmitButtonsGroup, TopSection, AsideAnnotationForm, AsideAnnotationFormContent } from './styled';
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
  const mobileSidebarRef = useRef<HTMLDivElement>(null);
  const [ noteTitle, setNoteTitle ] = useState<string>('');
  const [ noteCover, setNoteCover ] = useState<File | undefined>();
  const [ noteDescription, setNoteDescription ] = useState<string>('');
  const [ noteThumbnail, setNoteThumbnail ] = useState<File | undefined>();
  const [ isToShowMobileSidebar, setIsToShowMobileSidebar ] = useState<boolean>(false);

  useEffect(() => {
    show && modalRef.current?.focus();
  }, [ show ])

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(noteDescription)
  }
  
  return (
    <ModalBackground className={`${!show && 'hide-modal'}`}>
      <CreateNoteContainer
        role='dialog'
        tabIndex={-1}
        ref={modalRef}
        aria-modal={true}
        aria-hidden={show}
        onSubmit={onSubmit}
        id='createAnnotation_Modal'
        aria-labelledby='createAnnotation_TitleHeading'
      >
        <HeaderModal>
          <h2 id='createAnnotation_TitleHeading'>Criar nova anotação</h2>
          <div className="FORM_button-group">
            <IconButton
              onClick={() => {
                setIsToShowMobileSidebar(!isToShowMobileSidebar)
                mobileSidebarRef.current?.focus();
              }}
              Icon={<HiChevronDoubleLeft/>}
              attributes={{
                "title": 'Abrir informações adicionais',
                'aria-label': 'Abrir informações adicionais',
                'aria-controls': 'Adittional_Info-FORM',
                'aria-haspopup': true,
                'id': 'mobile-icon'
              }}
            />
            <IconButton
              onClick={onClose}
              Icon={<HiXMark />}
              attributes={{
                "title": 'Fechar modal',
                "aria-label": 'Fechar modal',
                "type": 'button'
              }}
            />
          </div>
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
              <TextArea name="cardNote-content" placeholder="Descreva a sua anotação..." value={noteDescription} onChange={e => setNoteDescription(e.target.value)}/>
            </FieldGroup>
          </MainFormSection>
          <AsideAnnotationForm tabIndex={0} ref={mobileSidebarRef} aria-label='Informações adicionais' onClick={() => setIsToShowMobileSidebar(false)} className={`${isToShowMobileSidebar && 'opened'}`} aria-expanded={isToShowMobileSidebar} id='Adittional_Info-FORM'>
            <AsideAnnotationFormContent className="aside-content">
              <header>
                <IconButton
                  onClick={() => setIsToShowMobileSidebar(false)}
                  Icon={<HiChevronDoubleRight />}
                  attributes={{
                    "title": 'Fechar informações adicionais',
                    'aria-label': 'Fechar informações adicionais',
                    'aria-controls': 'Adittional_Info-FORM',
                  }}
                />
              </header>
              <button onFocus={e => alert('ssk')}></button>
            </AsideAnnotationFormContent>
          </AsideAnnotationForm>
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
            >
              <>salvar anotação</>
            </Button>
          </SubmitButtonsGroup>
        </NoteDetailsForm>
      </CreateNoteContainer>
    </ModalBackground>
  );
}