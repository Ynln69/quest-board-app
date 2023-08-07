import Modal from '../../Modal/Modal';
import ModalColumn from '../ModalColumn/ModalColumn';

const AddColumn = ({ closeColumnModal, handleSubmit, title, nameTitle }) => {
  const handleCloseModal = () => {
    closeColumnModal();
  };

  return (
    <div>
      <Modal isOpen={true} handleClose={handleCloseModal} heading={title}>
        <ModalColumn handleSubmit={handleSubmit} nameTitle={nameTitle} />
      </Modal>
    </div>
  );
};

export default AddColumn;
