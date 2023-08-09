import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const EditProfileModal = styled.div`
// position: absolute;
// top: 50%;
// left: 50%;
// transform: translate(-50%, -50%);
// width: 100%;
// padding: 24px;

// border-radius: 8px;
// box-shadow: 0px 2px 4px 0px rgba(22, 22, 22, 1);
// // transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
// background-color: var(--modal_bgc);

// cubic-bezier(0.4, 0, 0.2, 1)
//  @media screen and (min-width: 375px) {
//   width: 335px;
// }
// @media screen and (min-width: 768px) {
//   width: 400px;
`;

export const FormBox = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
   font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.28px;
`;

export const LabelPass = styled.label`
position: relative;
width:100%;
`;

export const LabelText = styled.label`
width:100%;
`;

export const FieldUser = styled(Field)`
  width:100%;
    height: 49px;
    color: var(--modal_main_color);
    background-color: var(--modal_field);
    opacity: 0.4;
    border: 1px solid #bedbb0;
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
  margin: 24px auto 25px;
  border-radius: 8px;
  background-position: center;
  cursor: pointer;

  // &:hover,
  // &:focus,
  // &:active {
  //   opacity: 1;
  //   box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  // }
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SaveBtn = styled.button`
  width: 100%;
  height: 49px;
  margin-top: 24px;
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  background: var(--create_normal);
  border-radius: 8px;
  border: 1px solid var(--create_normal);
  cursor: pointer;

  // &:hover,
  // &:focus,
  // &:active {
  //   background: var(--create_active);
    // }

    &:hover,
  &:focus,
  &:active {
      opacity: 0.8;
    }

  @media screen and (max-width: 768px) {
    width: 250px;
  }
`;

export const FileInput = styled.input`
  position: absolute;
  opacity: 0;
  display: none;
  width:100%
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
  background: var(--user_bgc);

  transition: all 150ms linear;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active  {
    background: var(--create_active);
  }
`;

export const TextBtn = styled(Form)`
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: -0.28px;
color: var(--save-color);
`;

export const IconPlus = styled.svg`
  width: 14px;
  height: 14px;
  stroke: #161616; 
  z-index: 99;
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
  width: 16.5px;
  height: 16px;
  top: 50%;
  right: 4px;
  fill: transparent;
`;

