import * as Yup from 'yup';
import { useState } from "react";
import { withFormik, FormikProps } from 'formik';
import { Input } from "../../components/forms/Input";
import { HiOutlineUserCircle } from "react-icons/hi";
import { HiOutlineEnvelope, HiOutlineLockClosed } from "react-icons/hi2";
import { SignupFormProps, SignupFields } from '../../utils/types/registration';
import { RegistrationLayout } from "../../components/common/RegistrationLayout";
import { ErrorMessage, FieldLabel, FieldWrapper, FieldsGroup } from "../../components/common/RegistrationLayout/styled";

const SignupForm = withFormik<SignupFormProps, SignupFields>({
  mapPropsToValues: (props) => ({
    fullName: props.initialFullName,
    email: props.initialEmail,
    password: props.initialPassword,
    confirmPassword: props.initialConfirmPassword,
  }),
  validationSchema: Yup.object().shape({
    fullName: Yup
      .string()
      .required('Informe seu nome completo!'),
    email: Yup
      .string()
      .email('Informe um e-mail válido!')
      .required('E-mail é obrigatório!'),
    password: Yup
      .string()
      .min(8, 'Deve ter no minímino 8 caracteres')
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        'Precisa conter: um caractere especial, letras maiusculas e minusculas e no mínimo 8 caracteres.'
      )
      .required('Senha é obrigatório!'),
    confirmPassword: Yup
      .string()
      .required('Esse campo não pode estar vázio!')
      .oneOf([Yup.ref('password'), null], 'As senhas precisam ser iguais!')
  }),
  handleSubmit({ fullName, confirmPassword, email, password }) {
    alert('full name' + fullName)
  }
})(InnerSignupForm)

function InnerSignupForm({
  errors, touched, handleSubmit, handleChange, values
}: SignupFormProps & FormikProps<SignupFields>) {
  const initialValues: SignupFields = {
    email: '',
    fullName: '',
    password: '',
    confirmPassword: '',
  }

  return (
    <RegistrationLayout 
      type='signup'
      onSubmit={handleSubmit}
      initialValues={initialValues}
    >
      <FieldsGroup className="signup_form">
        <FieldWrapper>
          <FieldLabel htmlFor='fullName'>Nome completo</FieldLabel>
          <Input
            name='fullName'
            type='text'
            value={values.fullName}
            placeholder='Marigold Justy'
            Icon={<HiOutlineUserCircle size={20} />}
            onChange={handleChange}
          />
          { touched.fullName && touched.fullName && <ErrorMessage>{ errors.fullName }</ErrorMessage> }
        </FieldWrapper>
        <FieldWrapper>
          <FieldLabel htmlFor='email'>E-mail</FieldLabel>
          <Input
            name='email'
            type='email'
            value={values.email}
            placeholder='marigol.justy@mail.com'
            Icon={<HiOutlineEnvelope size={20} />}
            onChange={handleChange}
          />
          {touched.email && touched.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </FieldWrapper>
        <FieldWrapper>
          <FieldLabel htmlFor='password'>Senha</FieldLabel>
          <Input
            name='password'
            type='password'
            value={values.password}
            placeholder='Digite sua senha'
            Icon={<HiOutlineLockClosed size={20} />}
            onChange={handleChange}
          />
          {touched.password && touched.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </FieldWrapper>
        <FieldWrapper>
          <FieldLabel htmlFor='confirmPassword'>Confirmar a senha</FieldLabel>
          <Input
            name='confirmPassword'
            type='password'
            value={values.confirmPassword}
            placeholder='Redigite a senha para confirmar'
            Icon={<HiOutlineLockClosed size={20} />}
            onChange={handleChange}
          />
          {touched.confirmPassword && touched.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}
        </FieldWrapper>
      </FieldsGroup>
    </RegistrationLayout>
  )
}

export const Signup: React.FC<{}> = () => {
  return (
    <>
      <SignupForm />
    </>
  );
}