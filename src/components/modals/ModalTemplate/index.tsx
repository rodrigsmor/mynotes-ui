import { Button } from '../../buttons/Button';
import { MouseEventHandler, FormEvent, FormEventHandler, useRef, useEffect } from 'react';
import { ThemeEnums } from '../../../utils/enums/ThemeEnums';
import { ModalContainer, ModalHeader, ModalFooter, ModalCardContainer } from './styled';

export type OnSubmitProps = {
  event: FormEventHandler;
}

interface ModalTemplateProps {
  name: string;
  show: boolean;
  title: string;
  labelButton: string;
  children: JSX.Element;
  onSubmit: FormEventHandler;
  onClose: MouseEventHandler | FormEventHandler;
}

export const ModalTemplate = ({ show, children, title, name, labelButton, onClose, onSubmit }: ModalTemplateProps) => {
  const modalRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    show && modalRef.current?.focus();
  }, [ show ])

  return (
    <ModalContainer className={`${!show && 'hide-modal'}`} id={name}>
      <ModalCardContainer role={'dialog'} aria-labelledby={name} onSubmit={onSubmit} aria-hidden={show} ref={modalRef} tabIndex={-1}>
        <ModalHeader>
          <h2 id={name}>{ title }</h2>
        </ModalHeader>
        { children }
        <ModalFooter>
          <Button theme={ThemeEnums.SURFACE} onClick={onClose}>
            <p>cancelar</p>
          </Button>
          <Button type='submit' theme={ThemeEnums.DEFAULT}>
            <p>{labelButton}</p>
          </Button>
        </ModalFooter>
      </ModalCardContainer>
    </ModalContainer>
  );
}