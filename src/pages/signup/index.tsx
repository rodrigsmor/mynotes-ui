import { useState } from "react";
import { FieldLabel, FieldWrapper, FieldsGroup } from "../../components/common/RegistrationLayout/styled";
import { Input } from "../../components/forms/Input";
import { HiOutlineUserCircle } from "react-icons/hi";
import { RegistrationLayout } from "../../components/common/RegistrationLayout";
import { HiOutlineEnvelope, HiOutlineLockClosed } from "react-icons/hi2";

export function Signup() {
  const [email, setEmail] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  return (
    <RegistrationLayout type='signup'>
      <FieldsGroup className="signup_form">
        <FieldWrapper>
          <FieldLabel htmlFor=''>Nome completo</FieldLabel>
          <Input
            name='fullName_signup'
            type='text'
            value={fullName}
            placeholder='Marigold Justy'
            Icon={<HiOutlineUserCircle size={20} />}
            onChange={event => setFullName(event.target.value)}
          />
        </FieldWrapper>
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
        </FieldWrapper>
        <FieldWrapper>
          <FieldLabel htmlFor='confirmPassword_signup'>Confirmar a senha</FieldLabel>
          <Input
            name='confirmPassword_signup'
            type='password'
            value={confirmPassword}
            placeholder='Redigite a senha para confirmar'
            Icon={<HiOutlineLockClosed size={20} />}
            onChange={event => setConfirmPassword(event.target.value)}
          />
        </FieldWrapper>
      </FieldsGroup>
    </RegistrationLayout>
  )
}