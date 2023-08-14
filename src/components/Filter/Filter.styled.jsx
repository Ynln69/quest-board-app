import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const DecorativeElement = styled.div`
  position: relative;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    padding-bottom: 14px;
    width: 100%;
    border-top: 1px solid var(--line_color);
  }
`;

export const ContainerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TextLabel = styled.h3`
  color: var(--board_main_color);
  font-family: 'Poppins';
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
`;

export const ButtonAll = styled.button`
  border: none;

  color: var(--board_second_color);
  background: transparent;
  font-family: ' Poppins';
  font-size: 12px;
  letter-spacing: -0.24px;
  text-decoration-line: underline;

  &:hover {
    color: var(--add_text_color);
  }
`;

export const RadioButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 14px 0px 0px 0px;
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

  &:hover {
    cursor: pointer;
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
    border: 2.5px solid;
    border-color: var(--modal_field);
    box-shadow: 0 0 0 1px ${props => props.backgroundColor || '#fff'};
  }

  &:checked + label {
    color: var(--add_text_color);
  }

  margin: 0px;
`;

export const RadioButtonLabel = styled.label`
  color: var(--board_second_color);
  font-family: 'Poppins';
  font-size: 12px;
  letter-spacing: -0.24px;
`;
