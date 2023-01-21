import styled from 'styled-components';

export const SearchbarContainer = styled.form`
  gap: 12px;
  width: 43.5%;
  height: 42px;
  padding: 0 14px;
  display: flex;
  align-items: center;
  border-radius: 16px;
  flex-direction: row-reverse;
  color: ${({ theme }) => theme.colors.subtext.light };
  background: ${({ theme }) => theme.colors.surface.main };

  label {
    display: none;
  }
`;

export const SearchButton = styled.button`
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  background: transparent;
  border: 0px solid transparent;
  color: ${({ theme }) => theme.colors.subtext.light };
`;

export const Field = styled.input`
  width: 100%;
  background: transparent;
  border: 0px solid transparent;
  outline: none;
  color: ${({ theme }) => theme.colors.subtext.light};
  font-size: ${({ theme }) => theme.typography.size.h5};
  font-weight: ${({ theme }) => theme.typography.weight.light };

  ::placeholder {
    color: ${({ theme }) => theme.colors.subtext.light };
    font-size: ${({ theme }) => theme.typography.size.h5};
    font-weight: ${({ theme }) => theme.typography.weight.light };
  }
`;