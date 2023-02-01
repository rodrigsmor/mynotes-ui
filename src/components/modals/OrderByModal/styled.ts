import styled from "styled-components";

export const OrdinationSection = styled.div`
  gap: 14px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: stretch;

  > button {
    flex-grow:1;
    width: 100%;
  }

  @media ${({ theme }) => theme.media.desktop } {
    display: grid;
    max-width: 100%;
    grid-template-columns: repeat(3, 1fr);
  }
`;