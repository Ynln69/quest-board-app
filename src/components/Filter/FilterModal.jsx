import Modal from '../Modal/Modal';
import Filter from './Filter';

const FilterModal = ({closeModal}) => {
  
const handleCLoseModal = () => {
  closeModal();
}

  return (
    <Modal  isOpen={true} heading={'Filters'} handleClose={handleCLoseModal} headingMarginBottom={"14px"}  modalWidth={"300px"}>
      <Filter />
    </Modal>
  );
};

export default FilterModal;
