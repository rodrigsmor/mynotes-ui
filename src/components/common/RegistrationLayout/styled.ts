import styled from 'styled-components';
import wave from '../../../assets/images/elements/wave.svg';
import { Form } from 'formik';

export const SigninPageContainer = styled.div`
  gap: 24px;
  width: 100vw;
  height: 100vh;
  display: grid;
  max-width: 100vw;
  overflow-y: scroll;
  max-height: 100dvh;
  padding: 24px 0 0 0;
  position: relative;
  grid-template-rows: 87px 1fr;
  background: ${({ theme }) => theme.colors.primary.main };

  @media ${({ theme }) => theme.media.desktop } {
    padding: 0;
    height: 100vh;
    padding: 0 48px;
    overflow: hidden;
    max-height: 100vh;
    align-items: center;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 48.25vw;

    &::before {
      content: '';
      width: 100vw;
      height: 192px;
      position: absolute;
      background-size: cover;
      background-clip: border-box;
      background-image: url(${wave});
      bottom: 0;
    }

    &.login {
      grid-template-columns: 48.25vw 1fr;

      > section {
        grid-column: 2 / 3;
      }

      > form {
        grid-column: 1 / 2;
      }

      &:before {
        transform: scaleX(-1);
      }
    }
  }
`;

export const SideSection = styled.section`
  > img {
    display: none;
  }

  > .logo {
    gap: 8px;
    grid-rows: 1 / 2;
    flex-direction: column;

    > svg {
      width: 48px;
      height: 48px;

      path {
        fill: ${({ theme }) => theme.colors.primary.dark};
      };
    }

    > figcaption {
      font-size: 24px;
      color: ${({ theme }) => theme.colors.background.light };
    }
  }

  @media ${({ theme }) => theme.media.desktop } {
    gap: 38px;
    z-index: 4;
    height: 100%;
    display: flex;
    padding: 56px 0;
    grid-row: 1 / 2;
    align-items: center;
    flex-direction: column;

    > img {
      width: 32vw;
      height: auto;
      display: block;
    }
  }
`;

export const FormCard = styled(Form)`
  gap: 28px;
  width: 100vw;
  display: flex;
  grid-rows: 2 / 3;
  padding: 28px 24px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 24px 24px 0px 0px;
  background: ${({ theme }) => theme.colors.background.light };

  > h1 {
    width: 100%;
    color: ${({ theme }) => theme.colors.typography.main };
    font-size: ${({ theme }) => theme.typography.size.h2 };
    font-weight: ${({ theme }) => theme.typography.weight.bold };
  }

  @media ${({ theme }) => theme.media.desktop } {
    width: 48.25vw;
    height: 90.25vh;
    border-radius: 24px;
    z-index: 5;

    &.login {
      height: fit-content;

      > div {
        gap: 48px;
      }
    }
  }
`;

export const FormFieldsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const FormFooter = styled.footer`
  gap: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  > button {
    width: 100%;
  }
`;

export const DescriptionAnchors = styled.p`
  width: 100%;
  max-width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.colors.subtext.light };
  font-size: ${({ theme }) => theme.typography.size.h5 };
  font-weight: ${({ theme }) => theme.typography.weight.regular };

  > a {
    text-decoration: none;
    transition: .3s ease-out;
    color: ${({ theme }) => theme.colors.primary.main };
    font-weight: ${({ theme }) => theme.typography.weight.semibold };

    &:hover {
      color: ${({ theme }) => theme.colors.primary.dark };
    }
  }

  &.forget-password {
    text-align: end;
    margin: 8px 0 0 0;

    > a {
      opacity: 1;
      color: ${({ theme }) => theme.colors.primary.dark };

      &:hover {
        opacity: 0.5;
        color: ${({ theme }) => theme.colors.primary.dark };
      }
    }
  }
`;

export const FieldsGroup = styled.fieldset`
  gap: 18px;
  width: 100%;
  display: grid;
  place-items: center;
  border: 0px solid transparent;

  > img {
    width: 58%;
    height: auto;
  }

  @media ${({ theme }) => theme.media.desktop } {
    &.signup_form {
      grid-template-columns: repeat(2, 1fr);

      > div:nth-of-type(3), 
      div:nth-of-type(4) {
        grid-column: 1 / 3;
      }
    }

    > img {
      display: none;
    }
  }
`;

export const FieldWrapper = styled.div`
  gap: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const FieldLabel = styled.label`
  width: 100%;
  color: ${({ theme }) => theme.colors.subtext.light };
  font-size: ${({ theme }) => theme.typography.size.h5 };
  font-weight: ${({ theme }) => theme.typography.weight.regular };
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.danger.main};
  font-size: ${({ theme }) => theme.typography.size.h6};
  font-weight: ${({ theme }) => theme.typography.weight.medium };
`;