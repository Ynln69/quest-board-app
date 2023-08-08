import styled from '@emotion/styled';
import { ErrorMessage, Field } from 'formik';

export const StyledInputField = styled(Field)`
  width: 302px;
  padding: 14px 18px;
  margin-bottom: 24px;

  border-radius: 8px;
  border: 1px solid var(--input_color);
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  opacity: 0.4;
  background-color: var(--modal_bgc);
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 14px;
  outline: none;
  text-transform: capitalize;

  &:hover,
  &:focus,
  &:active {
    outline: none;
    opacity: 1;
  }
`;

export const ErrorMsg = styled(ErrorMessage)`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const StyledSubtitle = styled.p`
  margin-bottom: 14px;
  color: var(--modal_main_color);
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
  fill: rgba(0, 0, 0, 0);
  stroke: var(--modal_second_color);
`;

export const StyledRadioField = styled(Field)`
  display: none;
  &:checked + img {
    border: 1px solid var(--modal_bgc);
    border-radius: 5px;
    transform: scale(1.2);
  }
  &:checked + svg {
    stroke: var(--modal_main_color);
  }
  &:hover + img {
    border: 1px solid var(--modal_bgc);
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
