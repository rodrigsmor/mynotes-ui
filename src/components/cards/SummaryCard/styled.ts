import styled from "styled-components";

interface SummaryProps {
  colors: 'success' | 'danger' | 'primary';
}

export const SummaryCardContainer = styled.article<SummaryProps>`
  gap: 12px;
  width: 100%;
  display: flex;
  padding: 14px;
  max-width: 100%;
  align-items: center;
  border-radius: 16px;
  flex-direction: column;
  background-color: ${({ theme, colors }) => theme.colors[colors].light};

  > .icon {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    border-radius: 14px;
    color: ${({ theme, colors }) => theme.colors[colors].main};
    background-color: ${({ theme, colors }) => theme.colors[colors].light};
  }

  > .summaryCard-details {
    width: 100%;
    display: flex;
    max-width: 100%;
    overflow: hidden;
    align-items: center;
    flex-direction: column;

    > h5 {
      color: ${({ theme }) => theme.colors.subtext.light};
      font-size: ${({ theme }) => theme.typography.size.h6};
      font-weight: ${({ theme }) => theme.typography.weight.regular};
    }

    > p {
      font-size: ${({ theme }) => theme.typography.size.h4};
      color: ${({ theme, colors }) => theme.colors[colors].main};
      font-weight: ${({ theme }) => theme.typography.weight.medium};
    }
  }

  @media ${({ theme }) => theme.media.desktop } {
    gap: 18px;
    flex-direction: row;
    
    > .icon {
      height: 100%;
      height: 50px;
      flex: 1;
      max-width: 42px;
      min-height: 100%;
    }

    > .summaryCard-details {
      flex: 2;
      align-items: flex-start;

      > p {
        font-size: ${({ theme }) => theme.typography.size.h2};
      }
    }
  }
`;