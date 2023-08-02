import { useState } from 'react';
import { Formik, Field } from 'formik';
import {
  Container,
  Wrapper,
  Navigate,
  RegisterLink,
  LoginLink,
  ErrorText,
  PasswordView,
  Inputs,
  PasswordInput,
  PasswordIcon,
  Svg,
  RegisterBtn,
} from './Registerform.styled';
import sprite from '../../images/sprite.svg';
import { RegisterSchema } from 'schemas/authSchemas';
import eyeHide from '../../images/eye-hide.svg';

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const newUser = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    };

    console.log(newUser);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={RegisterSchema}
        >
          <Wrapper>
            <Navigate>
              <RegisterLink to="/auth/register" underline="none">
                Registration
              </RegisterLink>
              <LoginLink to="/auth/login" underline="none">
                Log In
              </LoginLink>
            </Navigate>
            <Inputs>
              <Field
                autoFocus
                name="name"
                type="text"
                placeholder="Enter your name"
              />
              <ErrorText name="name" component="div" />
              <Field name="email" type="email" placeholder="Enter your email" />
              <ErrorText name="email" component="div" />
              <PasswordInput>
                <Field
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a password"
                />
                <ErrorText name="password" component="div" />
                <PasswordView onClick={togglePasswordVisibility}>
                  {showPassword ? (
                    <PasswordIcon src={eyeHide} />
                  ) : (
                    <Svg>
                      <use stroke="gray" href={`${sprite}#eye-password`} />
                    </Svg>
                  )}
                </PasswordView>
              </PasswordInput>
            </Inputs>
            <RegisterBtn type="submit">Register Now</RegisterBtn>
          </Wrapper>
        </Formik>
      </form>
    </Container>
  );
};
