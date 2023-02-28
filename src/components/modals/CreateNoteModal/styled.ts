import styled from "styled-components";

export const ModalBackground = styled.div`
  inset: 0;
  margin: 0;
  padding: 0;
  z-index: 50;
  width: 100vw;
  height: 100vh;
  display: flex;
  position: fixed;
  max-width: 100vw;
  max-height: 100dvh;
  pointer-events: auto;
  align-items: flex-end;
  transition: .5s linear;
  justify-content: flex-end;
  backdrop-filter: blur(6px);
  background: ${({ theme }) => theme.colors.typography.main}66;
    
  > *[role^="dialog"] {
    bottom: 0;
    transition: .3s ease;
  }

  &.hide-modal {
    overflow: hidden;
    pointer-events: none;
    background: transparent;
    backdrop-filter: blur(0px);
    
    > *[role^="dialog"]  {
      bottom: -100vh;
    }
  }

  @media ${({ theme }) => theme.media.desktop } {
    opacity: 1;
    align-items: center;
    justify-content: center;
    transition: .2s ease-out;

    > *[role^="dialog"] {
      top: 0;
    }
    
    &.hide-modal {
      opacity: 0;

      > *[role^="dialog"] {
        top: -95vh;
      }
    }
  }
`;

export const CreateNoteContainer = styled.form`
  padding: 0;
  width: 100vw;
  height: 100dvh;
  overflow: hidden;
  position: relative;
  border-radius: 0px;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background.light };
  
  @media ${({ theme }) => theme.media.desktop } {
    width: 71.4%;
    height: 89.5vh;
    max-width: 71.4%;
    max-height: 89.5vh;
    border-radius: 24px;
  }
`;

export const HeaderModal = styled.header`
  width: 100%;
  display: flex;
  padding: 10px 24px;
  height: fit-content;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${({ theme }) => theme.shadow.main };
  background: ${({ theme }) => theme.colors.background.light };

  > h2 {
    color: ${({ theme }) => theme.colors.typography.main };
    font-size: ${({ theme }) => theme.typography.size.h4 };
    font-weight: ${({ theme }) => theme.typography.weight.semibold }; 
  }
  
  > .FORM_button-group {
    gap: 10px;
    display: flex;
    align-items: center;

    > .icon-button {
      width: 38px;
      height: 38px;
      min-width: 38px;
      min-height: 38px;
  
      > svg {
        width: 32px;
        height: 32px;
      }
    }
  }
  
  @media ${({ theme }) => theme.media.desktop } {
    border-radius: 24px 24px 0 0;

    > .FORM_button-group {
      > #mobile-icon {
        display: none;
      }
    }
  }
`;

export const NoteDetailsForm = styled.div`
  gap: 16px;
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: flex;
  padding: 0px 16px;
  overflow-y: auto;
  overflow-x: hidden;
  flex-direction: column;
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    width: 6px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.subtext.light }66;
    border: 2px solid ${({ theme }) => theme.colors.background.light};
  }

  @media (max-width: 1024px) {
    max-height: 100%;
    overflow: scroll;

    > fieldset:first-of-type {
      height: 20%;
    }
  }
  
  @media ${({ theme }) => theme.media.desktop } {
    display: grid;
    padding: 0px 24px 16px 24px;
    grid-template-columns: 1fr 270px;
    grid-template-rows: 23.43vh 1fr 44px;
  }
`;

export const TopSection = styled.fieldset`
  display: flex;
  padding: 0px;
  grid-row: 1 / 2;
  min-height: 120px;
  grid-column: 1 / 2;
  position: relative;
  align-items: start;
  justify-content: end;
  flex-direction: column;
  border: 0px solid transparent;

  > .upload-image-image_inputCover {
    top: 0;
    z-index: 50;
    width: 100vw;
    position: absolute;
    align-self: center;
    height: calc(100% - 34px);
  }

  > .upload-image-image_inputThumbnail {
    z-index: 51;
    width: 68px;
    height: 68px;
    overflow: hidden;
    border-radius: 24px;
    box-shadow: ${({ theme }) => theme.shadow.main};

    > label {
      border-radius: 24px;

      > span {
        display: none;
      }
    }
  }
  
  @media ${({ theme }) => theme.media.desktop } {
    padding: 0 24px;
    grid-column: 1 / 3;

    > .upload-image-image_inputCover {
      width: 71.4vw;
      min-width: 71.4vw;
    }
  }
`;

export const MainFormSection = styled.fieldset`
  gap: 20px;
  display: flex;
  grid-row: 2 / 3;
  grid-column: 1 / 2;
  flex-direction: column;
  border: 0px solid transparent;

  @media ${({ theme }) => theme.media.desktop } {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
  }
`;

export const FieldGroup = styled.div`
  gap: 4px 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  > .textArea {
    margin: 12px 0 0 0;
  }

  @media ${({ theme }) => theme.media.desktop } {
    > .textArea {
      margin: 0 0 0 34px;
    }
  }
`;

export const FieldLabel = styled.label`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.subtext.light };
  font-size: ${({ theme }) => theme.typography.size.h3 };

  &.category-label {
    font-size: ${({ theme }) => theme.typography.size.h6 };
    font-weight: ${({ theme }) => theme.typography.weight.regular };
  }

  &.label_CardContent {
    gap: 10px;
    width: 100%;

    > span {
      color: ${({ theme }) => theme.colors.typography.main };
      font-size: ${({ theme }) => theme.typography.size.h4 };
      font-weight: ${({ theme }) => theme.typography.weight.semibold };
    }
  }
`;

export const CategoryFieldGroup = styled.div`
  gap: 8px;
  display: flex;
  flex-basis: 100%;
  align-items: center;
  padding: 0 0 0 34px;

  > div {
    > .select_form-Button {
      z-index: 52;
    }
  
    > .select_form-OptionsList {
      z-index: 51;
    }
  }
`;

export const SubmitButtonsGroup = styled.footer`
  left: 0;
  bottom: 0;
  gap: 14px;
  width: 100%;
  padding: 18px;
  display: flex;
  position: absolute;
  border-radius: 16px 16px 0 0;
  box-shadow: ${({ theme }) => theme.shadow.main };
  background: ${({ theme }) => theme.colors.background.light};

  > button {
    flex-grow: 1;
  }
  
  @media ${({ theme }) => theme.media.desktop } {
    padding: 0;
    grid-row: 3 / 4;
    position: static;
    box-shadow: none;
    grid-column: 1 / 3;
    border-radius: 0px;
    justify-content: flex-end;

    > button {
      flex-grow: 0;
      width: 169px;
    }
  }
`;

export const AsideAnnotationForm = styled.section`
  top: 0;
  z-index: 53;
  display: flex;
  position: absolute;
  transition: .2s ease-out;
  justify-content: flex-end;
  backdrop-filter: blur(10px);
  background: ${({ theme }) => theme.colors.typography.light }4D;

  @media ${({ theme }) => theme.media.desktop } {
    width: 100%;
    height: 100%;
    grid-row: 2 / 3;
    position: static;
    grid-column: 2 / 3;
    background: transparent;

    > .aside-content {
      width: 100%;
    }
  }

  @media (max-width: 1023px) {
    width: 0;
    right: 0;
    height: 100dvh;
    transition-delay: .3s;

    > .aside-content {
      width: 0px;
      transition: .5s ease;
    }
    
    &.opened {
      right: 0;
      width: 100vw;
      transition-delay: 0s;
      
      > .aside-content {
        margin: 0;
        width: 89%;
        transition-delay: .3s;
      }
    }
  }
`;

export const AsideAnnotationFormContent = styled.div`
  height: 100%;
  padding: 16px;
  overflow: hidden;
  border-radius: 24px 0 0 24px;
  box-shadow: ${({ theme }) => theme.shadow.main};
  background: ${({ theme }) => theme.colors.background.dark };

  > header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    > .icon-button {
      background: ${({ theme }) => theme.colors.background.dark };
    }
  }

  @media ${({ theme }) => theme.media.desktop } {
    padding: 0;
    width: 100%;
    height: 100%;
    border-radius: 0;
    box-shadow: none;
    background: ${({ theme }) => theme.colors.background.light };

    > header {
      display: none;
    }
  }
`;

export const AsideNotesSectionsWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100%;
`;

export const AsideNotesSections = styled.section`
  gap: 14px;
  width: 100%;
  display: flex;
  flex-direction: column;

  > header {
    gap: 10px;
    width: 100%;
    display: flex;
    font-size: 24px;
    align-items: center;
    color: ${({ theme }) => theme.colors.subtext.light };
    
    > h3 {
      color: ${({ theme }) => theme.colors.typography.main};
      font-size: ${({ theme }) => theme.typography.size.h5};
      font-weight: ${({ theme }) => theme.typography.weight.semibold };
    }
  }
`;

export const CheckListContainer = styled.ul`
  gap: 8px;
  display: flex;
  list-style: none;
  flex-direction: column;
`;