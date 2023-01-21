import styled from 'styled-components';

export const LogoContainer = styled.figure`
  gap: 12px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    width: 28px;
    height: 28px;

    path {
      fill: ${({ theme }) => theme.colors.primary.main };
    }
  }
`;

export const BrandTypography = styled.figcaption`
  font-size: 24px;
  font-family: 'Kodchasan', sans-serif;
`;