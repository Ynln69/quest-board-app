import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import logoMob from '../../images/welcome_im_m.png';
import logoDesk from '../../images/welcome_im_dt.png';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: linear-gradient(180deg, #ffffff 0%, #ffffff 25%, #bedbb0 92.19%);
  background-repeat: no-repeat;
  background-size: cover;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

export const Logo = styled.div`
  width: 124px;
  height: 124px;

  margin-bottom: 14px;

  background-image: url(${logoMob});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  @media screen and (min-width: 768px) {
    width: 162px;
    height: 162px;

    margin-bottom: 24px;

    background-image: url(${logoDesk});
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 14px;
`;

export const Icon = styled.svg`
  height: 40px;
  width: 40px;

  @media screen and (min-width: 768px) {
    height: 48px;
    width: 48px;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -1.12px;
  color: #161616;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    letter-spacing: -1.6px;
  }
`;

export const Text = styled.p`
  width: 300px;

  margin-top: 25px;

  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: -0.28px;
  text-align: center;
  color: #161616;

  @media screen and (min-width: 768px) {
    width: 473px;
  }
`;

export const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;

  margin-top: 48px;
`;

export const RegButton = styled(NavLink)`
  box-sizing: border-box;
  width: 300px;

  padding: 14px 0;

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.28px;

  background-color: #161616;
  color: #ffffff;

  text-align: center;

  border: 1px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  text-transform: none;
  transition-property: color background scale border;
  transition-duration: 300ms;

  &:hover {
    background-color: #ffffffcc;
    color: #161616;
    scale: 1.05;
    border: 1px solid #161616;
  }

  @media screen and (min-width: 768px) {
    width: 344px;
  }
`;

export const LogButton = styled(NavLink)`
  display: inline-block;
  width: 300px;

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.28px;

  color: #161616;

  text-align: center;

  border-radius: 8px;
  cursor: pointer;
  text-transform: none;
  transition-property: scale;
  transition-duration: 300ms;

  &:hover {
    scale: 1.2;
  }

  @media screen and (min-width: 768px) {
    width: 344px;
  }
`;
