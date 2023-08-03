import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
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
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const form = event.currentTarget;
    dispatch(
      register({
        username: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    console.log(
      form.elements.name.value,
      form.elements.email.value,
      form.elements.password.value
    );
    form.elements.name.value = '';
    form.elements.email.value = '';
    form.elements.password.value = '';
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
              <Field name="name" type="text" placeholder="Enter your name" />
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
