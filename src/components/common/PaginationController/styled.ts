import styled from 'styled-components';

export const ControllerWrapper = styled.footer`
  gap: 28px;
  width: 100%;
  display: flex;
  height: fit-content;
  align-items: center;
  justify-content: center;
`;

export const RouteIndication = styled.p`
  color: ${({ theme }) => theme.colors.subtext.light };
  font-size: ${({ theme }) => theme.typography.size.h5 };
  font-weight: ${({ theme }) => theme.typography.weight.medium };
`;