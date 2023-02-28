import { Logo } from "../Logo";
import { ReactNode, FormEvent, FormEventHandler } from 'react';
import { Link } from "react-router-dom";
import { Button } from "../../buttons/Button";
import { ThemeEnums } from "../../../utils/enums/ThemeEnums";
import { SignupFields, LoginFields, LoginFormProps } from '../../../utils/types/registration';
import RegistrationIllustration from '../../../assets/images/illustrations/RegistrationIllustration.svg';
import { DescriptionAnchors, FormCard, FormFieldsContainer, FormFooter, SideSection, SigninPageContainer } from "./styled";
import { Formik } from "formik";

interface RegistrationProps {
  type: 'login' | 'signup';
  children: ReactNode;
  initialValues: any;
  onSubmit: (props: FormEvent<HTMLFormElement>) => void;
}

export const RegistrationLayout = ({ type, children, initialValues, onSubmit }: RegistrationProps) => {

  return (
    <SigninPageContainer className={type}>
      <SideSection>
        <Logo />
        <img 
          src={RegistrationIllustration}
          alt='illustration'
        />
      </SideSection>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
      >
        <FormCard aria-labelledby='Page_Title-Auth' className={type} autoComplete="false" noValidate>
          <h1 id='Page_Title-Auth'>{type === 'login' ? 'Entrar' : 'Cadastrar'}</h1>
            <FormFieldsContainer>
              { children }
              {
                type === 'signup' && (
                  <DescriptionAnchors>
                    Ao prosseguir você estará concordando com os <Link to=''>termos de uso</Link> e <Link to=''>políticas de privacidades</Link>.
                  </DescriptionAnchors>
                )
              }
              <FormFooter>
                <Button type='submit' theme={ThemeEnums.DEFAULT}>
                  <p>{type === 'login' ? 'Conectar' : 'Criar conta'}</p>
                </Button>
                <DescriptionAnchors>
                  {
                    type === 'login'
                      ? (
                        <>
                          Não possui uma conta? Então <Link to='/auth/signup'>cadastre-se</Link>.
                        </>
                      ) : (
                        <>
                          Já possui uma conta? Então <Link to='/auth/login'>conecte-se</Link>.
                        </>
                      )
                  }
                </DescriptionAnchors>
              </FormFooter>
            </FormFieldsContainer>
        </FormCard>
      </Formik>
    </SigninPageContainer>
  )
}