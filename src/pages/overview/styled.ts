import styled from "styled-components";

export const OverviewContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: calc(68px + 28px) 16px;
  
  @media ${({ theme }) => theme.media.desktop}  {
    gap: 28px;
    width: 100%;
    display: grid;
    max-width: 100%;
    padding: 24px 32px;
    overflow-x: hidden;
    grid-template-rows: repeat(1, fit-content);
    grid-template-columns: minmax(auto, 2fr) minmax(308px, 1fr);
  }
`;

export const GreetingsSection = styled.section`
  width: 100%;
  overflow: hidden;
  height: fit-content;

  > .greetings-message {
    width: 100%;
    line-clamp: 1;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.colors.typography.dark };
    font-size: ${({ theme }) => theme.typography.size.h2 };
    font-weight: ${({ theme }) => theme.typography.weight.bold};
  }

  > .greetings-text {
    text-align: justify;
    color: ${({ theme }) => theme.colors.subtext.main};
    font-size: ${({ theme }) => theme.typography.size.h5};
    font-weight: ${({ theme }) => theme.typography.weight.regular};
  }

  > ul {
    gap: 14px;
    width: 100%;
    display: flex;
    margin: 20px 0 0;
    list-style: none;

    > li {
      flex: 1;
      flex-shrink: 0;
    }
  }

  @media ${({ theme }) => theme.media.desktop} {
    max-width: 100%;
    grid-row: 1 / 2;
    grid-column: 1 / 2;

    > .greetings-message {
      font-size: ${({ theme }) => theme.typography.size.h3 };
    }

    > ul {
      gap: 18px;
    }
  }
`;

export const CollectionsSection = styled.section`
  height: 250px;

  @media ${({ theme }) => theme.media.desktop} {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    background: red;
  }
`;

export const SectionPending = styled.section`

`;

export const RecentNotesSection = styled.section`

`;