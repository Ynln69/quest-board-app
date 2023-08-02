import React from 'react';
import ReactDOM from 'react-dom';

import { MainButton } from '../Button/Button';

import Sprite from '../../images/sprite.svg';
import { Backdrop, CloseBtn, ModalWindow } from './Modal.styles';

function Modal({ children, isOpen, handleClose, btnContent }) {
  if (!isOpen) return null;

  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      handleClose();
    }
  };

  if (isOpen) {
    window.addEventListener('keydown', handleKeyDown);
  }

  return ReactDOM.createPortal(
    <Backdrop onClick={handleClose}>
      <ModalWindow onClick={e => e.stopPropagation()}>
        <CloseBtn onClick={handleClose}>
          <use xlinkHref={`${Sprite}#icon-x-close`} />
        </CloseBtn>
        <div>{children}</div>
        <MainButton>{btnContent}</MainButton>
      </ModalWindow>
    </Backdrop>,
    document.getElementById('modal-root')
  );
}
export default Modal;
