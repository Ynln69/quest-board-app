import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Formik, Field } from 'formik';

import {
  Container,
  Wrapper,
  Navigate,
  ErrorText,
  PasswordView,
  Inputs,
  PasswordInput,
  PasswordIcon,
  Svg,
  RegisterLink,
  LoginLink,
  LoginBtn,
} from './LoginForm.styled';
import sprite from '../../images/sprite.svg';
import { LoginSchema } from 'schemas/authSchemas';
import eyeHide from '../../images/eye-hide.svg';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    console.log({
      email: form.elements.email.value,
      password: form.elements.password.value,
    });

    form.elements.email.value = '';
    form.elements.password.value = '';
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
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
              <Field name="email" type="email" placeholder="Enter your email" />
              <ErrorText name="email" component="div" />
              <PasswordInput>
                <Field
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Confirm a password"
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
            <LoginBtn>Log In Now</LoginBtn>
          </Wrapper>
        </Formik>
      </form>
    </Container>
  );
};
