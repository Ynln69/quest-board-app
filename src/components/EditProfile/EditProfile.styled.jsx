import styled from '@emotion/styled';
import { Form } from 'formik';

export const Container = styled.div`
// position: fixed;
// top: 0;
// left: 0;
// overflow-y: auto;
// width: 100%;
// height: 100%;
// background-color: rgba(0, 0, 0, 0.5);

`;

export const ModalCloseButton = styled.button`
  align-self: flex-end;
  font-size: 16px;
  cursor: pointer;
`;

export const EditProfileModal = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 400px;
height: 440px;
padding: 24px;
background-color: #161616;
  display: flex;
  flex-direction: column;
  gap: 16px;

@media screen and (min-width: 375px) {
    width: 320px;
  }
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const FormBox = styled(Form)`
  display: flex;
  justify-content: space-around;
  width: 350px;
  margin: 20px;
  padding: 40px;
 
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  font-size: 20px;
//   background-color: #161616;
//   box-shadow: 4px 4px 6px 0px rgba(66, 68, 90, 1);
`;

export const SaveBtn = styled.button`
width: 100%;
height: 49px;
margin-top: 24px;
text-align: center;

background: #bedbb0;
border-radius: 8px;
color: #ffffff;
cursor: pointer;

@media screen and (max-width: 768px) {
  width: 250px;
}
`;