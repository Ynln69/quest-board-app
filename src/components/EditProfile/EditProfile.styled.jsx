import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormBox = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.28px;
  margin: auto;
`;

export const LabelPass = styled.label`
  position: relative;
  width: 100%;
`;

export const Label = styled.label`
  width: 100%;
`;

export const FieldUser = styled(Field)`
  width: 100%;
  height: 49px;
  color: var(--modal_main_color);
  background-color: var(--modal_field);
  opacity: 0.4;
  border: 1px solid var(--input_color);
  padding-left: 18px;
  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
  border-radius: 8px;

  outline: none;
  transition: all 500ms;

  &:hover,
  &:focus,
  &:active {
    opacity: 1;
    box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  }
`;

export const IconUserWrapper = styled.label`
  width: 68px;
  height: 78px;
  position: relative;
  margin: 0px auto 14px auto;
  border-radius: 8px;
  background-position: center;
  cursor: pointer;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const FileInput = styled.input`
  position: absolute;
  opacity: 0;
  display: none;
`;

export const NoneInput = styled.input`
  display: none;
`;

export const PlusBtn = styled.button`
  position: absolute;
  bottom: -15%;
  left: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  width: 28px;
  height: 28px;
  border: none;
  background-color: var(--border_theme);

  transition: all 150ms linear;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    background: var(--create_active);
  }
`;

export const IconPlus = styled.svg`
  width: 14px;
  height: 14px;
  stroke: #161616;
  z-index: 1;
`;

export const PasswordView = styled.span`
  position: absolute;
  right: 18px;
  top: 19px;
  cursor: pointer;
`;

export const PasswordIcon = styled.img`
  width: 16.5px;
  height: 16px;
  top: 50%;
  right: 4px;
`;

export const Svg = styled.svg`
  width: 16px;
  height: 16px;
  top: 50%;
  right: 4px;
  fill: transparent;
`;
