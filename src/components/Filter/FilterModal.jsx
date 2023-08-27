import PropTypes from 'prop-types';

import Modal from '../Modal/Modal';
import Filter from './Filter';

const FilterModal = ({closeModal}) => {
const handleCLoseModal = () => {
  closeModal();
}

  return (
    <Modal  isOpen={true} heading={'Filters'} handleClose={handleCLoseModal} modalType={'modalFilter'} headingMarginBottom={"14px"}>
      <Filter closeModal={handleCLoseModal} />
    </Modal>
  );
};

export default FilterModal;

FilterModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
