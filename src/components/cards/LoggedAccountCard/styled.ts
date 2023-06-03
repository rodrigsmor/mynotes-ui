import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LoggedAccountCardContainer = styled.div`
  gap: 0 12px;
  width: 249px;
  padding: 8px;
  display: flex;
  position: relative;
  align-items: center;
  border-radius: 16px;
  transition: .5s all ease-out;
  background:${({ theme }) => theme.colors.background.light};

  .account_card_details {
    width: 100%;
  }

  :hover {
    background: ${({ theme }) => theme.colors.background.dark };

    .icon-button {
      background: ${({ theme }) => theme.colors.background.dark };
    }
  }
`;

export const ProfilePicture = styled.img`
  width: 36px;
  height: 36px;
  min-width: 36px;
  object-fit: cover;
  border-radius: 16px;
  image-rendering: pixelated;
`;

export const UserName = styled.p`
  width: 100%;
  max-width: 100%;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.colors.typography.main};
  font-size: ${({ theme }) => theme.typography.size.h6};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
`;

export const UserEmail = styled.address`
  width: 100%;
  max-width: 100%;
  font-style: normal;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.colors.subtext.light};
  font-size: ${({ theme }) => theme.typography.size.h7};
  font-weight: ${({ theme }) => theme.typography.weight.light};
`;

export const DropdownNav = styled.nav`
  right: 0;
  top: 115%;
  gap: 14px;
  opacity: 1;
  width: 80vw;
  padding: 14px;
  display: flex;
  list-style: none;
  position: absolute;
  align-items: center;
  border-radius: 16px;
  flex-direction: column;
  transition: all .3s ease-in-out;
  box-shadow: ${({ theme }) => theme.shadow.main};
  background: ${({ theme }) => theme.colors.background.light };

  &[aria-hidden="true"] {
    opacity: 0;
    pointer-events: none;
  }

  @media ${({ theme }) => theme.media.tablet} {
    width: 280px;
  }
`;

export const DropdownOption = styled(Link)`
  gap: 10px;
  width: 100%;
  padding: 8px;
  display: flex;
  position: relative;
  border-radius: 8px;
  align-items: center;
  text-decoration: none;
  transition: all .5s ease-out;
  font-size: ${({ theme }) => theme.typography.size.h5 };
  color: ${({ theme }) => theme.colors.typography.light }CC;
  background: ${({ theme }) => theme.colors.background.light };

  &:hover {
    background: ${({ theme }) => theme.colors.background.dark };
  }
`;

export const AccountsSection = styled.section`
  gap: 14px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  &::before {
    width: 80%;
    content: '';
    height: 1px;
    display: block;
    background: ${({ theme }) => theme.colors.typography.light }1A;
  }

  > h3 {
    width: 100%;
    flex-grow: 1;
    font-size: ${({ theme }) => theme.typography.size.h6 };
    color: ${({ theme }) => theme.colors.typography.light }CC;
    font-weight: ${({ theme }) => theme.typography.weight.semibold };
  }

  > ul {
    gap: 4px;
    width: 100%;
    display: flex;
    list-style: none;
    align-items: center;
    flex-direction: column;

    > li {
      width: 100%;
      max-width: 100%;

      > .styled-button {
        padding: 0;
        width: 100%;
        height: 36px;
        border-radius: 12px;
        font-size: ${({ theme }) => theme.typography.size.h6 };
        background: transparent;
      }
    }

    &::after {
      width: 80%;
      content: '';
      height: 1px;
      display: block;
      margin: 6px 0;
      background: ${({ theme }) => theme.colors.typography.light }1A;
    }
  }

  > .styled-button {
    height: 38px;
    font-size: ${({ theme }) => theme.typography.size.h6 };
    color: ${({ theme }) => theme.colors.danger.main};
    background: ${({ theme }) => theme.colors.danger.main}0d;

    &:hover {
      background: ${({ theme }) => theme.colors.danger.light};
    }
  }
`;

export const AccountCardSummary = styled.button`
  width: 100%;
  padding: 8px;
  display: flex;
  gap: 2px 12px;
  cursor: pointer;
  min-width: 100%;
  flex-wrap: wrap;
  border-radius: 14px;
  align-items: center;
  transition: all .5s ease-out;
  border: 0px solid transparent;
  background: ${({ theme }) => theme.colors.background.light};

  > img {
    width: 28px;
    height: 28px;
    flex-shrink: 0;
    object-fit: cover;
    border-radius: 12px;
    aspect-ratio: 4 / 4;
    image-rendering: pixelated;
  }

  > div {
    flex-grow: 1;
    display: flex;
    max-width: 100%;
    overflow: hidden;
    flex-direction: column;

    p, address {
      flex-grow: 1;
      text-align: start;
    }

    p {
      font-size: ${({ theme }) => theme.typography.size.h6};
      color: ${({ theme }) => theme.colors.typography.main}cc;
      font-weight: ${({ theme }) => theme.typography.weight.medium };
    }

    address {
      font-style: normal;
      font-size: ${({ theme }) => theme.typography.size.h7 };
      color: ${({ theme }) => theme.colors.typography.light }cc;
      font-weight: ${({ theme }) => theme.typography.weight.regular };
    }
  }

  &:hover {
    background: ${({ theme }) => theme.colors.background.dark };
  }
`;