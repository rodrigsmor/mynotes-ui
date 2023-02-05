import styled from 'styled-components';

export const ImageUploadContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const UploadInputLabel = styled.label`
  gap: 8px;
  opacity: 0;
  width: 100%;
  height: 100%;
  display: flex;
  cursor: pointer;
  position: relative;
  align-items: center;
  transition: .5s ease;
  flex-direction: column;
  justify-content: center;
  backdrop-filter: blur(10px);
  font-size: ${({ theme }) => theme.typography.size.h6};
  color: ${({ theme }) => theme.colors.background.dark };
  background: ${({ theme }) => theme.colors.typography.light }99;
  font-weight: ${({ theme }) => theme.typography.weight.medium };

  &:hover {
    opacity: 1;
  }
`;

export const UploadInput = styled.input`
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: absolute;
  visibility: hidden;
`;

export const PreviewBackground = styled.img`
  left: 0;
  width: 100%;
  z-index: -1;
  height: 100%;
  object-fit: cover;
  position: absolute;
`;