import Modal from '../../Modal/Modal';
import ModalBoard from '../../ModalBoard/ModalBoard';

const EditBoard = ({ closeBoardModal }) => {
  const handleCloseModal = () => {
    closeBoardModal();
  };

  return (
    <div>
      <Modal isOpen={true} handleClose={handleCloseModal} heading="Edit board">
        <ModalBoard btnContent={'Edit'} closeModal={handleCloseModal} />
      </Modal>
    </div>
  );
};

export default EditBoard;