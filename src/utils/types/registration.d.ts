export interface LoginFields {
  email?: string;
  password?: string;
}

export interface LoginFormProps {
  initialEmail?: string;
  initialPassword?: string;
}

export interface SignupFields {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export interface SignupFormProps {
  initialFullName?: string;
  initialEmail?: string;
  initialPassword?: string;
  initialConfirmPassword?: string;
}