import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const ButtonStyle = css`
  gap: 8px;
  display: flex;
  align-items: center;
  flex-direction: row;
  text-decoration: none;
  transition: all .5s ease;
  color: ${({ theme }) => theme.colors.primary.main };
  font-size: ${({ theme }) => theme.typography.size.h6};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
`;

export const ButtonSeeMore = styled.button`
  width: 100%;
  ${ButtonStyle}

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