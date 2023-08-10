import styled from '@emotion/styled';

export const GoogleBtnCustom = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  padding: 0 20px;

  width: 100%;
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

  @media screen and (max-width: 768px) {
    width: 287px;
  }
`;
