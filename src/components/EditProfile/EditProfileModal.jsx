import Modal from 'components/Modal/Modal';
import EditProfile from './EditProfile';

const EditProfileModal = ({ onClose }) => {
  const handleCloseModal = () => {
    onClose();
  };

  return (
    <div>
      <Modal
        isOpen={true}
        handleClose={handleCloseModal}
        heading={'Edit profile'}
        modalType={'editProfile'}
      >
        <EditProfile onClose={handleCloseModal} />
      </Modal>
    </div>
  );
};

export default EditProfileModal;
