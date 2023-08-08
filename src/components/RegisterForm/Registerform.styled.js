import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { ErrorMessage } from 'formik';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: linear-gradient(180deg, #ffffff 0%, #ffffff 25%, #bedbb0 92.19%);
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Wrapper = styled.div`
  background: #161616;
  border-radius: 8px;
  padding: 40px;

  @media screen and (max-width: 768px) {
    padding: 24px;
  }
`;

export const Navigate = styled.div`
  display: flex;
`;

export const RegisterLink = styled(Link)`
  margin-right: 14px;

  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: #ffffff;
`;

export const LoginLink = styled(Link)`
  left: 160px;
  top: 40px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.3);

  transition: all 500ms;

  &:hover,
  &:focus {
    color: #fff;
  }
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 14px;

  input {
    width: 287px;
    height: 49px;
    left: 40px;
    top: 107px;

    color: #ffffff;
    background-color: #1f1f1f;
    opacity: 0.4;
    border: 1px solid #bedbb0;
    padding-left: 18px;
    box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
    border-radius: 8px;

    outline: none;
    transition: all 500ms;

    &:hover,
    &:focus,
    &:active {
      opacity: 1;
      box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
    }

    @media screen and (min-width: 768px) {
      width: 326px;
    }
  }
`;
export const PasswordInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const PasswordView = styled.span`
  position: absolute;
  right: 18px;
  top: 19px;
  cursor: pointer;
`;

export const PasswordIcon = styled.img`
  width: 16.5px;
  height: 16px;
  top: 50%;
  right: 4px;
`;

export const Svg = styled.svg`
  width: 16.5px;
  height: 16px;
  top: 50%;
  right: 4px;
  fill: transparent;
`;

export const RegisterBtn = styled.button`
  width: 100%;
  height: 49px;
  margin-top: 24px;

  color: #161616;
  text-align: center;
  font-family: 'Poppins';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;

  background: #bedbb0;
  border-radius: 8px;

  border: none;

  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 287px;
  }
`;

export const ErrorText = styled(ErrorMessage)`
  font-size: 14px;
  color: #bedbb070;
  width: 287px;

  @media screen and (min-width: 768px) {
    width: 326px;
  }
`;
