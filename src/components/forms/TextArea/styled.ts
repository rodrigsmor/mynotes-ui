import styled from 'styled-components';

export const TextAreaWrapper = styled.div`
  height: 340px;
  flex-grow: 1;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.primary.light };
`;