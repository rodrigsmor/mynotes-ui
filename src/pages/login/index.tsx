import { HiOutlineEnvelope, HiOutlineLockClosed } from "react-icons/hi2";
import { RegistrationLayout } from "../../components/common/RegistrationLayout";
import { FieldsGroup, FieldWrapper, FieldLabel, DescriptionAnchors } from '../../components/common/RegistrationLayout/styled';
import { Input } from "../../components/forms/Input";
import { useState } from 'react';
import { Link } from "react-router-dom";
import RegistrationIllustration from '../../assets/images/illustrations/RegistrationIllustration.svg'

export function Login() {
  const [ email, setEmail ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');

  return (
    <RegistrationLayout type="login">
      <FieldsGroup>
        <img
          src={RegistrationIllustration}
          alt='illustration'
        />
        <FieldWrapper>
          <FieldLabel htmlFor='email_signup'>E-mail</FieldLabel>
          <Input
            name='email_signup'
            type='email'
            value={email}
            placeholder='marigol.justy@mail.com'
            Icon={<HiOutlineEnvelope size={20} />}
            onChange={event => setEmail(event.target.value)}
          />
        </FieldWrapper>
        <FieldWrapper>
          <FieldLabel htmlFor='password_signup'>Senha</FieldLabel>
          <Input
            name='password_signup'
            type='password'
            value={password}
            placeholder='Digite sua senha'
            Icon={<HiOutlineLockClosed size={20} />}
            onChange={event => setPassword(event.target.value)}
          />
          <DescriptionAnchors className="forget-password">
            <Link to={{
              pathname: '/account/recoverAccount',
              search: email
            }}>
              Esqueceu a senha?
            </Link>
          </DescriptionAnchors>
        </FieldWrapper>
      </FieldsGroup>
    </RegistrationLayout>
  );
}