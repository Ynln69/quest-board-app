import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

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
  gap: 24px;
  padding: 12px;
`;

export const Image = styled.img`
  width: 160px;

  @media screen and (min-width: 768px) {
    width: 330px;
  }
  @media screen and (min-width: 1440px) {
    width: 550px;
  }
`;

export const BackLink = styled(Link)`
  padding: 14px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #161616;
  border: 2px solid #161616;

  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.28px;

  &:hover,
  &:focus {
    color: #161616;
    background-color: #fff;
    border: 2px solid #161616;
  }
`;
