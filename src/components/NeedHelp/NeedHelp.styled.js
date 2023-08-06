import styled from '@emotion/styled';

export const Input = styled.input`
  width: 100%;
  margin-bottom: 14px;
  padding: 14px 18px;
  border-radius: 8px;
  border: 1px solid var(--input_color);
  outline: none;
  opacity: 0.4;

  color: #161616;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  &:hover,
  &:focus,
  &:active {
    opacity: 1;
    box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 120px;
  margin-bottom: 24px;
  padding: 14px 18px;
  border-radius: 8px;
  border: 1px solid #bedbb0;
  outline: none;
  opacity: 0.4;

  color: #161616;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  &:hover,
  &:focus,
  &:active {
    opacity: 1;
    box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  }
`;
