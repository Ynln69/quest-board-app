import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-bottom: 14px; */
  gap: 14px;
`;

export const DecorativeElement = styled.div`
  position: relative;
  width: 100%;
  /* width: 252px; */
  /* margin-bottom: 14px; */

  &::before {
    content: '';
    position: absolute;
    padding-bottom: 14px;
    /* top: 0;
    left: 0; */
    width: 100%;
    border-top: 1px solid rgba(22, 22, 22, 0.10);;
  }
`;

export const ContainerWarepper = styled.div`
  display: flex;
   justify-content: space-between;
  /* flex-direction: row; */
  /* gap: 130px; */
  /* margin-top: 14px; */
  /* margin-top: 28px; */
  /* margin-bottom: 14px; */
`;

export const TextLabel = styled.h3`
  font-family: 'Poppins';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  color: #161616;
`;

export const Button = styled.button`
  font-family: ' Poppins';
  font-size: 12px;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.24px;
  text-decoration-line: underline;
  color: rgba(22, 22, 22, 0.5);
  background: transparent;
  border: none;
`;
export const RadioButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 14px 0px 14px 0px;
`;

export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const RadioButtonInput = styled.input`
  position: relative;

  &::after {
    content: '';
    width: 15px;
    height: 15px;
    border-radius: 15px;
    display: inline-block;
    visibility: visible;
    top: -0.5px;
    left: -0.5px;
    position: absolute;
    background-color: ${props => props.backgroundColor || '#fff'};
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
    background-color: ${props => props.backgroundColor || '#fff'};
    border: 2.5px solid white;
    box-shadow: 0 0 0 1px ${props => props.backgroundColor || '#fff'};
  }

  margin: 0px;
`;

export const RadioButtonLabel = styled.label`
  
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