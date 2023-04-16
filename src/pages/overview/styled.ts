import styled from "styled-components";

export const OverviewContainer = styled.div`
  gap: 28px;
  width: 100%;
  display: flex;
  height: fit-content;
  flex-direction: column;
  padding: calc(68px + 28px) 16px;

  > .other-sections {
    gap: 28px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  
  @media ${({ theme }) => theme.media.desktop}  {
    width: 100%;
    display: grid;
    max-width: 100%;
    max-height: 100%;
    padding: 24px 32px;
    grid-template-rows: max-content 2fr;
    grid-template-columns: minmax(auto, 2fr) minmax(308px, 1fr);

    > .other-sections {
      grid-row: 1 / 3;
      grid-column: 2 / 3;
    }
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

export const SectionHeader = styled.header`
  width: 100%;
  display: flex;
  max-height: 100%;
  align-items: center;
  justify-content: space-between;

  > h3 {
    color: ${({ theme }) => theme.colors.subtext.dark};
    font-size: ${({ theme }) => theme.typography.size.h4};
    font-weight: ${({ theme }) => theme.typography.weight.semibold};
  }
`;

export const CollectionsSection = styled.section`
  gap: 14px;
  width: 100%;
  display: flex;
  height: fit-content;
  flex-direction: column;
  transition: all .5s ease;

  > ul {
    gap: 8px;
    width: 100%;
    display: flex;
    list-style: none;
    flex-direction: column;

    > li {
      width: 100%;
    }
  }

  @media ${({ theme }) => theme.media.desktop} {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
  }
`;

export const SectionPending = styled.section`
  gap: 14px;
  width: 100%;
  display: flex;
  flex-direction: column;

  > ul {
    gap: 10px;
    display: flex;
    flex-direction: column;

    > li {
      list-style: none;
    }
  }
`;

export const RecentNotesSection = styled.section`
  gap: 28px;
  width: 100%;
  display: flex;
  height: fit-content;
  flex-direction: column;

  > ul {
    gap: 14px;
    display: flex;
    list-style: none;
    flex-direction: column;

    > li {
      width: 100%;
    }
  }

  @media ${({ theme }) => theme.media.desktop} {
    height: 100%;
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    max-height: fit-content;
    min-height: fit-content;

    > ul {
      gap: 18px;
      min-height: 100%;
      height: fit-content;
    }
  }
`;