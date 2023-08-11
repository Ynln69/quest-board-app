import styled from '@emotion/styled';

export const ContainerWarepper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 28px;
  margin-bottom: 14px;
`;
export const Button = styled.button`
  border: none;
  background: transparent;
  text-decoration: underline;
`;

export const RadioButton = styled.input`
  /* &:hover::before,
  &:focus::before,
  &:checked::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${props => props.color};
visibility: ${props => (props.checked ? 'visible' : 'hidden')};
visibility: visible;
    border: 2px solid ${props => props.color};
    box-sizing: border-box; */

  display: block;
  margin-bottom: 10px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  /* appearance: none; */
  /* outline: none; */

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${props => props.color};
    visibility: visible;
    border: 2px solid ${props => props.color};
    box-sizing: border-box;
  }

  &:checked::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${props => props.color};
    border: 2px solid ${props => props.color};
    box-sizing: border-box;
  }
`;

export const LabelWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: var(--last-text-color);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.24px;
  padding-top: 1px;
  padding-bottom: 1px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: baseline;
`;

/* &:hover::before,
  &:focus::before,
  &:checked::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${props => props.color}; */
/* visibility: ${props => (props.checked ? 'visible' : 'hidden')}; */
/* visibility: visible;
    border: 2px solid ${props => props.color};
    box-sizing: border-box; */

//   display: block;
// margin-bottom: 10px;
// width: 14px;
// height: 14px;
// border-radius: 50%;
// appearance: none;
// outline: none;

// &::before {
//   content: '';
//   display: block;
//   width: 100%;
//   height: 100%;
//   border-radius: 50%;
//   background-color: ${props => props.color};
//   visibility: visible;
//   border: 2px solid ${props => props.color};
//   box-sizing: border-box;
// }

// &:checked::before {
//   content: '';
//   display: block;
//   width: 100%;
//   height: 100%;
//   border-radius: 50%;
//   background-color: ${props => props.color};
//   border: 2px solid ${props => props.color};
//   box-sizing: border-box;
// }
