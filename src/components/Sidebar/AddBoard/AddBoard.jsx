import Modal from '../../Modal/Modal';
import ModalBoard from '../../ModalBoard/ModalBoard';

const AddBoard = ({ closeBoardModal }) => {
  const handleCloseModal = () => {
    closeBoardModal();
  };

  return (
    <div>
      <Modal isOpen={true} handleClose={handleCloseModal}>
        <ModalBoard />
      </Modal>
    </div>
  );
};

export default AddBoard;
