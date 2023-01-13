import styled from "styled-components";

export const NotesPageContent = styled.section`
  width: 100%;
  height: 100%;
  padding: calc(68px + 28px) 16px;

  @media ${({ theme }) => theme.media.desktop } {
    padding: 24px 32px;
    max-width: 100vw;
    max-height: 100vh;
  }
`;

export const SectionHeader = styled.header`
  gap: 14px;
  width: 100%;
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

`;

export const VisualizationGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > h1 {
    color: ${({ theme }) => theme.colors.typography.main };
    font-size: ${({ theme }) => theme.typography.size.h2 };
    font-weight: ${({ theme }) => theme.typography.weight.bold };
  }

  > .listing-display-checkbox-wrapper {
    gap: 14px;
    display: flex;
    align-items: center;
  }

  @media ${({ theme }) => theme.media.desktop } {
    gap: 32px;
    width: fit-content;

    > h1 {
      font-size: ${({ theme }) => theme.typography.size.h1 };
    }
  }
`;

export const InteractionsButton = styled.div`
  gap: 18px;
  width: 100%;
  display: flex;
  max-width: 100%;

  > button {
    width: 100%;

    &.add_button_desktop {
      display: none;
    }
  }

  @media ${({ theme }) => theme.media.desktop } {
    gap: 14px;
    width: max-content;

    > button { 
      &.add_button_desktop {
        display: flex;
      }
    }
  }
`;