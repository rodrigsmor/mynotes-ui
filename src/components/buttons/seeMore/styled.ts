import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const ButtonStyle = css`
  gap: 8px;
  display: flex;
  cursor: pointer;
  align-items: center;
  flex-direction: row;
  text-decoration: none;
  justify-content: center;
  transition: all .5s ease;
  color: ${({ theme }) => theme.colors.primary.main };
  font-size: ${({ theme }) => theme.typography.size.h6};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
`;

export const ButtonSeeMore = styled.button`
  width: 100%;
  height: 32px;
  ${ButtonStyle};
  border-radius: 12px;
  background: transparent;
  border: 0px solid transparent;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light };
  }
`;

export const SeeMoreLink = styled(Link)`
  ${ButtonStyle}

  &:hover {
    opacity: .7;
  }
`;