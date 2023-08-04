import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import NeedHelpForm from './NeedHelpForm';

const NeedHelpModal = ({ closeModal }) => {
  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <div>
      <Modal isOpen={true} handleClose={handleCloseModal} heading={'Need help'}>
        <NeedHelpForm />
      </Modal>
    </div>
  );
};

export default NeedHelpModal;

NeedHelpModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};