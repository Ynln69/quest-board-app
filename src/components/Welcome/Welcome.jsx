import React from 'react';
import icons from '../../images/sprite.svg';
import { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { GoogleBtn } from 'components/GoogleBtn/GoogleBtn';

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
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  const dispatch = useDispatch();

  const login = useGoogleLogin({
    onSuccess: codeResponse => {
      setUser(codeResponse);
    },
    onError: error => console.log('Login Failed:', error),
  });

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  useEffect(() => {
    if (user) {
      // console.log(user.access_token);
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
          // console.log(res.data);
          setProfile(res.data);
          dispatch(
            register({
              username: profile.name,
              email: profile.email,
              password: user.access_token,
            })
          );
        })
        .catch(err => console.log(err));
    }
    // eslint-disable-next-line
  }, [user]);

  return (
    <Container>
      <Wrapper>
        <Logo />
        <LogoWrapper>
          <Icon>
            <use href={`${icons}#icon-logo`} />
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
          {profile ? (
            <div>
              <img src={profile.picture} alt="user avatar" />
              <h3>User Logged in</h3>
              <p>Name: {profile.name}</p>
              <p>Email Address: {profile.email}</p>
              <br />
              <br />
              <GoogleBtn onClick={logOut} text={'Log out'}></GoogleBtn>
            </div>
          ) : (
            <GoogleBtn
              onClick={() => login()}
              text={'Sign in with Google'}
            ></GoogleBtn>
          )}
        </AuthWrapper>
      </Wrapper>
    </Container>
  );
}

export default Welcome;
