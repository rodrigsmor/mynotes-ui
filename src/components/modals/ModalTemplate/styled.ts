import styled from 'styled-components';

export const ModalContainer = styled.div`
  inset: 0;
  margin: 0;
  padding: 0;
  z-index: 50;
  width: 100vw;
  height: 100dvh;
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
      bottom: -95vh;
    }
  }
  
  @media ${({ theme }) => theme.media.desktop } {
    opacity: 1;
    display: flex;
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

export const ModalCardContainer = styled.form`
  gap: 16px;
  margin: 0;
  height: 95dvh;
  width: 100vw;
  border: none;
  display: grid;
  padding: 18px;
  max-height: 100vh;
  position: relative;
  border-radius: 24px 24px 0 0;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: 30px 1fr 44px;
  background: ${({ theme }) => theme.colors.background.light };
  
  @media ${({ theme }) => theme.media.desktop } {
    margin: auto;
    width: 47.30vw;
    height: 53.88vh;
    overflow: hidden;
    min-height: 354px;
    max-width: 47.30vw;
    max-height: 53.88vh;
    border-radius: 24px;
    grid-template-rows: 30px 1fr 44px;
  }
`;

export const ModalHeader = styled.header`
  width: 100%;
  display: flex;
  grid-row: 1 / 2;
  max-width: 100%;
  height: fit-content;
  align-items: center;
  justify-content: center;

  > h2 {
    text-align: center;
    color: ${({ theme }) => theme.colors.typography.main };
    font-size: ${({ theme }) => theme.typography.size.h3 };
    font-weight: ${({ theme }) => theme.typography.weight.semibold };
  }
`;

export const ModalFooter = styled.footer`
  gap: 14px;
  width: 100%;
  display: grid;
  grid-row: 3 / 4;
  grid-template-columns: repeat(2, 1fr);
`;