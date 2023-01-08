import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  max-width: 100vw;
  max-height: 100vh;
  grid-template-columns: 260px calc(100vw - 260px);
  background: ${({ theme }) => theme.colors.background.light };
`;