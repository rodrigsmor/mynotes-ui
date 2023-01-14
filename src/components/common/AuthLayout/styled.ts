import styled from "styled-components";

export const PageContainer = styled.div`
  height: max-content;
  position: relative;
  background: ${({ theme }) => theme.colors.background.light };
  
  @media ${({ theme }) => theme.media.desktop} {
    width: 100vw;
    height: 100vh;
    display: grid;
    overflow: hidden;
    max-width: 100vw;
    max-height: 100vh;
    grid-template-rows: 72px 1fr;
    grid-template-columns: 260px calc(100vw - 260px);
    grid-template-areas: 'navbar header' 'navbar body';
  }
`;

export const Body = styled.main`
  height: 0px;
  grid-area: body;

  @media ${({ theme }) => theme.media.desktop} {
    height: 100%;
    overflow-y: scroll;
  }
`;