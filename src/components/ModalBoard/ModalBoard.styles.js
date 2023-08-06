import styled from '@emotion/styled';
import { ErrorMessage, Field } from 'formik';

export const StyledInputField = styled(Field)`
  width: 302px;
  padding: 14px 18px;
  margin-bottom: 24px;

  border-radius: 8px;
  border: 1px solid rgba(190, 219, 176, 0.4);
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 14px;
  outline: none;
  text-transform: capitalize;

  &:hover,
  &:focus,
  &:active {
    outline: none;
    border: 1px solid #bedbb0;
  }
`;

export const ErrorMsg = styled(ErrorMessage)`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const StyledSubtitle = styled.p`
  margin-bottom: 14px;
  color: #161616;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const IconsWrapper = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const StyledSVG = styled.svg`
  width: 18px;
  height: 18px;
  fill: #fff;
  stroke: rgba(22, 22, 22, 0.5);
`;

export const StyledRadioField = styled(Field)`
  display: none;
  &:checked + img {
    border: 1px solid rgba(190, 219, 176, 0.4);
    border-radius: 5px;
    transform: scale(1.2);
  }
  &:checked + svg {
    stroke: #161616;
  }
  &:hover + img {
    border: 1px solid #bedbb0;
    border-radius: 5px;
  }
`;

export const BgImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  width: 252px;
  height: 60px;
  margin-bottom: 40px;
`;
