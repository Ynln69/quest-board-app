import styled from '@emotion/styled';

export const GoogleBtnCustom = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  padding: 0 20px;

  min-width: 300px;
  width: 344px;
  height: 49px;

  color: #161616;
  text-align: center;
  font-family: 'Poppins';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;

  background: #f1f7ed;
  border-radius: 8px;

  border: none;

  cursor: pointer;

  transition-property: background-color color scale;
  transition-duration: 250ms;

  &:hover {
    color: #ffffff;
    background-color: #809079;
    scale: 1.05;
  }

  @media screen and (max-width: 768px) {
    width: 287px;
  }
`;
