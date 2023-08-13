import styled from '@emotion/styled';

export const Backdrop = styled.section`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(21, 21, 21, 0.3);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  overflow: auto;
`;

const getModalStyles = ({ modalType, viewportWidth }) => {
  let styles = `

    /* =============================== Спільні стилі для всіх модалок ========================================*/
  
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 24px;
  margin-top: 30px;
  margin-bottom: 30px;

  border-radius: 8px;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.05);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  background-color: var(--modal_bgc);

  // ===========================================================================================================
  `;

  if (
    modalType === 'modalBoard' && 
    viewportWidth >= 320 &&
    viewportWidth <= 374
  ) {
    styles += `
      max-width: 335px;
    `;
  }
  if (modalType === 'modalBoard' && viewportWidth >= 375) {
    styles += `
    width: 350px;
    `;
  }

  if (
    modalType === 'modalHelp' && 
    viewportWidth >= 320 &&
    viewportWidth <= 374
  ) {
    styles += `
      max-width: 335px;
    `;
  } else if (modalType === 'modalHelp' && viewportWidth >= 375) {
    styles += `
    width: 350px;
    `;
  }

  if (
    modalType === 'modalFilter' && 'modalHelp' &&
    viewportWidth >= 320) {
    styles += `
      max-width: 300px;
    `;
  }
  if (
    modalType === 'editprofile' &&
    viewportWidth >= 375 &&
    viewportWidth <= 767
  ) {
    styles += `
  width: 335px;
 `;
  }
  if (
    modalType === 'editprofile' &&
        viewportWidth >= 768
  ) {
    styles += `
  width: 400px;
 `;
  }
  //   @media screen and (min-width: 375px) {
  //   width: 335px;
  // }
  // @media screen and (min-width: 768px) {
  //   width: 400px;

  return styles;
};

export const ModalWindow = styled.div`
  ${getModalStyles}
`;

export const Heading = styled.h3`
  /* margin-bottom: 24px; */
  margin-bottom: ${props => props.marginBottom || '24px'};
  color: var(--modal_main_color);
  font-family: 'Poppins';
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
