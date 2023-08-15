import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const FormContainer = styled(Form)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled(Field)`
  width: 100%;
  padding: 14px 18px;
  margin-bottom: 24px;
  border-radius: 8px;
  border: 1px solid var(--input_color);
  opacity: 0.4;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);

  color: var(--modal_main_color);
  background-color: var(--modal_bgc);
  font-size: 18px;
  font-family: Poppins;
  font-weight: 500;
  &:hover,
  &:focus,
  &:active {
    background-color: var(--modal_bgc);
    opacity: 1;
    box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  }
`;
