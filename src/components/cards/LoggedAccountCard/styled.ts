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

export const DropdownNav = styled.ul`
  right: 0;
  top: 115%;
  opacity: 1;
  width: 80vw;
  height: 340px;
  padding: 14px;
  display: flex;
  list-style: none;
  position: absolute;
  border-radius: 16px;
  flex-direction: column;
  transition: all .3s ease-in-out;
  box-shadow: ${({ theme }) => theme.shadow.main};
  background: ${({ theme }) => theme.colors.background.main };

  &[aria-hidden="true"] {
    opacity: 0;
    pointer-events: none;
  }

  @media ${({ theme }) => theme.media.tablet} {
    width: 360px;
  }
`;

export const DropdownOption = styled.li`
  width: 100%;
`;