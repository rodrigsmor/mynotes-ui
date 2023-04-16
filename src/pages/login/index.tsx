import { Link } from "react-router-dom";
import { Input } from "../../components/forms/Input";
import { HiOutlineEnvelope, HiOutlineLockClosed } from "react-icons/hi2";
import { RegistrationLayout } from "../../components/common/RegistrationLayout";
import RegistrationIllustration from '../../assets/images/illustrations/RegistrationIllustration.svg'
import { FieldsGroup, FieldWrapper, FieldLabel, DescriptionAnchors, ErrorMessage } from '../../components/common/RegistrationLayout/styled';
import { FormikProps, withFormik } from 'formik';
import { LoginFields, LoginFormProps } from '../../utils/types/registration';
import * as Yup from 'yup';

const LoginForm = withFormik<LoginFormProps, LoginFields>({
  mapPropsToValues: (props) => ({
    email: props.initialEmail,
    password: props.initialPassword
  }),
  validationSchema: Yup.object().shape({
    email: Yup
      .string()
      .email('Email invalido')
      .required('E-mail é um campo obrigatório. Preencha-o!'),
    password: Yup
      .string()
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        'Precisa ser uma senha válida!'
      )
      .required('Senha é obrigatório!')
  }),
  handleSubmit(
    { email, password }: LoginFields,
  ){
    alert('email: ' + email);
    alert('password: ' + password)
  }
})(InnerLoginForm)

function InnerLoginForm({ errors, touched, handleSubmit, handleChange, values }: LoginFormProps & FormikProps<LoginFields>) {
  const initialValues: LoginFields = {
    email: '',
    password: ''
  }

  return (
    <RegistrationLayout 
      type="login" 
      onSubmit={handleSubmit}
      initialValues={initialValues}
    >
      <FieldsGroup>
        <img
          src={RegistrationIllustration}
          alt='illustration'
        />
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
          {touched.email && errors.email && <ErrorMessage>{ errors.email }</ErrorMessage>}
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
          {touched.password && errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
          <DescriptionAnchors className="forget-password">
            <Link to={{
              pathname: '/account/recoverAccount',
              search: values.email
            }}>
              Esqueceu a senha?
            </Link>
          </DescriptionAnchors>
        </FieldWrapper>
      </FieldsGroup>
    </RegistrationLayout>
  );
}

export const Login: React.FC<{}> = () => {
  return (
    <>
      <LoginForm />
    </>
  )
}