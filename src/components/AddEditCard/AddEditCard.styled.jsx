import styled from '@emotion/styled';
import { Field } from 'formik';

export const ButtonIcon = styled.svg`
  width: 14px;
  height: 14px;

  @media (min-width: 768px) {
  }
`;

export const ButtonContentWrap = styled.button`
  width: 100%;
  border-radius: 8px;
  border: none;
  padding: 10px 0px 11px 0px;
  background: #bedbb0;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background: #9dc888;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media (min-width: 768px) {
  }
`;

export const ButtonIconWrap = styled.div`
  width: 28px;
  height: 28px;
  background-color: #161616;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 28px;
  }
`;

export const ButtonText = styled.p`
  font-size: 14px;
  font-weight: 500;
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

export const ModalText = styled.p`
  color: rgba(22, 22, 22, 0.5);
  font-size: 12px;
  margin-bottom: 4px;
  @media (min-width: 768px) {
  }
`;
export const ModalTitle = styled.h1`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 24px;
  @media (min-width: 768px) {
  }
`;
export const TitleInput = styled(Field)`
  font-size: 14px;
  font-weight: 400;
  width: 100%;
  @media (min-width: 768px) {
  }
  height: 49px;
  margin-bottom: 14px;
  border: 1px solid #bedbb0;
  padding-left: 18px;
  border-radius: 8px;
  transition: all 300ms;
  color: rgba(22, 22, 22, 0.5);
  outline: none;
  opacity: 0.4;
  &:hover,
  &:focus,
  &:active {
    opacity: 1;
    color: rgba(22, 22, 22, 1);
  }
`;
export const DescriptionInput = styled(Field)`
  font-size: 14px;
  font-weight: 400;
  width: 100%;
  @media (min-width: 768px) {
  }
  font: inherit;
  resize: none;
  height: 154px;
  border-radius: 8px;
  border: 1px solid #bedbb0;
  padding: 14px 18px;
  transition: all 300ms;
  color: rgba(22, 22, 22, 0.5);
  outline: none;
  margin-bottom: 24px;
  opacity: 0.4;
  &:hover,
  &:focus,
  &:active {
    opacity: 1;
    color: rgba(22, 22, 22, 1);
  }
`;
