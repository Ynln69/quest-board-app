import styled from '@emotion/styled';

// export const Container = styled.div`
//   display: flex;
// `;
export const Container = styled.div`
display: flex;
flex-direction: column;
  margin-bottom: 14px;
  gap: 14px;
`;

export const DecorativeElement = styled.div`
  position: relative;
  width:  100%;
 

  &::before {
    content: '';
    position: absolute;
    padding-bottom: 14px;
    // top: 0;
    // left: 0;
    width: 100%;
    border-top: 1px solid rgba(22, 22, 22, 0.10);;
  }
`;

export const ContainerWarepper = styled.div`
  display: flex;
   justify-content: space-between;
  /* flex-direction: row; */
  /* gap: 130px; */
  // margin-top: 14px;
  /* margin-top: 28px; */
  // margin-bottom: 14px;
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
