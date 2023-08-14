import React, { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import Sprite from '../../images/sprite.svg';
import { Backdrop, CloseBtn, Heading, ModalWindow } from './Modal.styles';

function Modal({
  children,
  isOpen,
  handleClose,
  heading,
  modalType,
  headingMarginBottom,
}) {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const handleKeyDown = useCallback(
    event => {
      if (event.key === 'Escape') {
        handleClose();
      }
    },
    [handleClose]
  );

  if (isOpen) {
    window.addEventListener('keydown', handleKeyDown);
  }

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.outerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [handleKeyDown]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Backdrop onClick={handleClose}>
      <ModalWindow
        onClick={e => e.stopPropagation()}
        modalType={modalType}
        viewportWidth={viewportWidth}
      >
        <Heading marginBottom={headingMarginBottom}>{heading}</Heading>
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
