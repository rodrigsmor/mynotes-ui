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
  background: ${({ theme }) => theme.colors.background.light };
  
  @media ${({ theme }) => theme.media.desktop } {
    width: 71.4vw;
    height: 89.5vh;
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
  
  @media ${({ theme }) => theme.media.desktop } {
    border-radius: 24px 24px 0 0;
  }
`;

export const NoteDetailsForm = styled.div`
  gap: 16px;
  width: 100%;
  height: 100%;
  display: grid;
  padding: 0px 18px;
  grid-template-rows: 20% 1fr 1fr;
  grid-template-columns: 100%;
  
  > section {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    background: green;
  }
  
  > span {
    grid-row: 3 / 4;
    grid-column: 1 / 2;
    background: blue;
  }
  
  @media ${({ theme }) => theme.media.desktop } {
    padding: 0px 24px;
    grid-template-rows: 30% 1fr;
    grid-template-columns: 1fr 270px;

    > section {
      grid-row: 2 / 3;
      grid-column: 1 / 2;
      background: green;
    }
    
    > span {
      grid-row: 2 / 3;
      grid-column: 2 / 3;
      background: blue;
    }
  }
`;

export const TopSection = styled.fieldset`
  display: flex;
  padding: 0px;
  grid-row: 1 / 2;
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