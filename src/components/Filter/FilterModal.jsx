import Modal from '../Modal/Modal';
import Filter from './Filter';

const FilterModal = ({closeModal}) => {
const handleCLoseModal = () => {
  closeModal();
}

  return (
    <Modal isOpen={true} heading={'Filters'} handleClose={handleCLoseModal}>
      <Filter />
    </Modal>
  );
};

export default FilterModal;
