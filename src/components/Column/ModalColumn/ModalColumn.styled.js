import styled from '@emotion/styled';
import { Field } from 'formik';

export const SvgAdd = styled.svg`
  width: 14px;
  height: 14px;
  stroke: #ffffff;
  cursor: pointer;
`;
export const BoxSvg = styled.span`
  display: inline-block;
  width: 28px;
  height: 28px;
  padding: 7px;
  border-radius: 6px;
  background: #161616;
  margin-right: 7px;
`;

export const Button = styled.button`
  min-width: 302px;
  min-height: 49px;
  display: block;
  margin-left: auto;
  margin-right: auto;

  border-radius: 8px;
  border: none;

  padding: 14px 78px;

  color: #161616;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  ine-height: normal;
  font-family: inherit;
  background: #bedbb0;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background: #9dc888;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const Input = styled(Field)`
  padding: 14px 18px;
  margin-bottom: 24px;
  border-radius: 8px;
  border: 1px solid #bedbb0;
  opacity: 0.4;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);

  color: #161616;
  font-size: 18px;
  font-weight: 500;
  width: 302px;
  height: 49px;
`;
