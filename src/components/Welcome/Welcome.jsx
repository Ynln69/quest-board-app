import axios from 'axios';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { googleRegister, logIn } from '../../redux/auth/operations';
import { GoogleBtn } from 'components/GoogleBtn/GoogleBtn';
import { showToast } from 'components/Notification/ToastNotification';
import icons from '../../images/sprite.svg';

import {
  Container,
  Wrapper,
  Logo,
  LogoWrapper,
  Icon,
  Title,
  Text,
  AuthWrapper,
  RegButton,
  LogButton,
} from './Welcome.styled';

function Welcome() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  const dispatch = useDispatch();

  const googleLogin = useGoogleLogin({
    onSuccess: codeResponse => {
      setUser(codeResponse);
    },
    onError: error => showToast('error', `Login failed. ${error.message}`),
  });

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json',
            },
          }
        )

        .then(res => {
          setProfile(res.data);

          dispatch(
            googleRegister({
              username: res.data.name,
              email: res.data.email,
              password: `${res.data.id}!Taskpro`,
            })
          );

          setTimeout(
            () =>
              dispatch(
                logIn({
                  email: res.data.email,
                  password: `${res.data.id}!Taskpro`,
                })
              ),
            500
          );
        })
        .catch(err => showToast('error', `Oops.. ${err.message}`));
    }
    // eslint-disable-next-line
  }, [user]);

  return (
    <Container>
      <Wrapper>
        <Logo />
        <LogoWrapper>
          <Icon>
            <use href={`${icons}#icon-logo-welcome`} />
          </Icon>
          <Title>TASK PRO</Title>
        </LogoWrapper>
        <Text>
          Supercharge your productivity and take control of your tasks with Task
          Pro - Don't wait, start achieving your goals now!
        </Text>
        <AuthWrapper>
          <RegButton to="auth/register">Registration</RegButton>
          <LogButton to="auth/login">Log In</LogButton>

          {!profile ? (
            <GoogleBtn
              onClick={() => googleLogin()}
              text={'Sign in with Google'}
            ></GoogleBtn>
          ) : (
            <GoogleBtn onClick={logOut} text={'Log out'}></GoogleBtn>
          )}
        </AuthWrapper>
      </Wrapper>
    </Container>
  );
}

export default Welcome;
