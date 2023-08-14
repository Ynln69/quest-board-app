import styled from '@emotion/styled';
import { Field } from 'formik';

export const TitleInput = styled(Field)`
  width: 100%;
  height: 49px;
  margin-bottom: 14px;
  border: 1px solid var(--input_color);
  padding-left: 18px;
  border-radius: 8px;
  transition: all 300ms;
  outline: none;
  opacity: 0.4;

  color: var(--modal_main_color);
  background-color: var(--modal_bgc);
  font-size: 14px;
  &:hover,
  &:focus,
  &:active {
    opacity: 1;
    background-color: var(--modal_bgc);
  }
`;

export const DescriptionInput = styled(Field)`
  width: 100%;
  height: 154px;
  padding: 14px 18px;
  margin-bottom: 24px;
  border: 1px solid var(--input_color);
  border-radius: 8px;
  resize: none;
  outline: none;
  opacity: 0.4;
  font-display: block;
  color: var(--modal_main_color);
  background-color: var(--modal_bgc);
  font-family: 'Poppins';
  font-size: 14px;
  transition: all 300ms;
  &:hover,
  &:focus,
  &:active {
    opacity: 1;
    background-color: var(--modal_bgc);
  }
`;

export const ModalText = styled.p`
  color: rgba(22, 22, 22, 0.5);
  font-size: 12px;
  margin-bottom: 4px;
  @media (min-width: 768px) {
  }
`;

export const RadioButtonWrap = styled.div`
  display: flex;
  gap: 8px;
  margin: 0px 0px 14px 0px;
`;

export const RadioButtonInput = styled(Field)`
  position: relative;

  &::after {
    content: '';
    width: 14px;
    height: 14px;
    border-radius: 14px;
    display: inline-block;
    visibility: visible;
    top: -0.5px;
    left: -0.5px;
    position: absolute;
    background-color: ${({ backgroundColor }) => backgroundColor || '#fff'};
  }

  &:checked::after {
    content: '';
    top: 0px;
    left: 0px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    display: inline-block;
    visibility: visible;
    position: absolute;
    background-color: ${({ backgroundColor }) => backgroundColor || '#fff'};
    border: 2px solid white;
    box-shadow: 0 0 0 1px ${({ backgroundColor }) => backgroundColor || '#fff'};
  }

  margin: 0px;
`;

export const CalendarWrap = styled.div`
  margin-bottom: 40px;
`;

export const ModalTitle = styled.h1`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 24px;
  @media (min-width: 768px) {
  }
`;
