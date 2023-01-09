import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 72px;
  display: flex;
  padding: 0 32px;
  grid-area: header;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.background.light};
`;

export const ButtonWrappers = styled.div`
  gap: 24px;
  display: flex;
  align-items: center;
  flex-directions: row;
`;