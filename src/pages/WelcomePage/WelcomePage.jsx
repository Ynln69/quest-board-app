import React, { useState } from 'react';
import Welcome from 'components/Welcome/Welcome';
import Modal from 'components/Modal/Modal';

export const WelcomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Welcome />
      <button onClick={() => setIsOpen(true)}>Відкрити модалку</button>
      <Modal
        handleClose={() => setIsOpen(false)}
        isOpen={isOpen}
        children={'hello :)'}
        btnContent={'button'}
      />
    </div>
  );
};
