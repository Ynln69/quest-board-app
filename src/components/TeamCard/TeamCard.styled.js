import styled from '@emotion/styled';
import { Card } from 'react-bootstrap';

export const StyledCard = styled(Card)`
  // border-radius: 40px 0 40px 0;
  border: none;
  display: flex;
  justify-content: center;
  transition: transform 0.3s;
  margin: 10px;
  width: 180px;
  height: 280px;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const StyledCardImg = styled(Card.Img)`
border-radius: 40px 0 40px 0;
box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
  width: 150px;
  height: 180px;
  object-fit: cover;
`;

export const StyledCardBody = styled(Card.Body)`
display: flex;
flex-direction: column;
align-items: center;
  text-align: center;
  width: 200px;
  gap: 8px;
`;

export const StyledCardTitle = styled(Card.Title)`
font-family: Poppins;
font-size: 16px;
font-weight: 400;
letter-spacing: -0.28px;
`;

export const StyledCardText = styled(Card.Text)`
font-size: 12px;
  color: #777;
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
`;

export const SocialIcon = styled.a`
  font-size: 1.1rem;
  margin: 0 10px;
  color: #333;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }
`;
