import Modal from '../../Modal/Modal';
import ModalBoard from '../../ModalBoard/ModalBoard';

const AddBoard = ({ closeBoardModal }) => {
  const handleCloseModal = () => {
    closeBoardModal();
  };

  return (
    <div>
      <Modal isOpen={true} handleClose={handleCloseModal} heading="New board">
        <ModalBoard btnContent={'Create'} closeModal={handleCloseModal} />
      </Modal>
    </div>
  );
};

export default AddBoard;
