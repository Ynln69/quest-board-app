import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import Sprite from '../../images/sprite.svg';
import { Backdrop, CloseBtn, Heading, ModalWindow } from './Modal.styles';

function Modal({ children, isOpen, handleClose, heading, modalType }) {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isOpen) return null;

  document.body.style.overflow = isOpen ? 'hidden' : 'visible';

  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      handleClose();
    }
  };

  if (isOpen) {
    window.addEventListener('keydown', handleKeyDown);
  }
  if (!isOpen) {
    window.removeEventListener('keydown', handleKeyDown);
  }

  return ReactDOM.createPortal(
    <Backdrop onClick={handleClose}>
      <ModalWindow
        onClick={e => e.stopPropagation()}
        modalType={modalType}
        viewportWidth={viewportWidth}
      >
        <Heading>{heading}</Heading>
        <CloseBtn onClick={handleClose}>
          <use xlinkHref={`${Sprite}#icon-x-close`} />
        </CloseBtn>
        <div>{children}</div>
      </ModalWindow>
    </Backdrop>,
    document.getElementById('modal-root')
  );
}
export default Modal;
