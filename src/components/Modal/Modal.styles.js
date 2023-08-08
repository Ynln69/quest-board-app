import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(21, 21, 21, 0.3);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 24px;

  border-radius: 8px;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.05);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  background-color: var(--modal_bgc);

  @media screen and (min-width: 375px) {
    width: 335px;
  }
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const Heading = styled.h3`
  margin-bottom: 24px;

  color: var(--modal_main_color);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
`;

export const CloseBtn = styled.svg`
  width: 18px;
  height: 18px;
  position: absolute;
  right: 14px;
  top: 14px;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 250ms ease-in;
  stroke: var(--close_icon);

  &:hover,
  :focus {
    stroke: var(--close_active);
  }
`;
