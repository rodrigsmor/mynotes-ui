import styled from 'styled-components';

export const LoggedAccountCardContainer = styled.div`
  gap: 0 12px;
  width: 249px;
  padding: 8px;
  display: flex;
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