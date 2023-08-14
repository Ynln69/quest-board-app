import { useState } from 'react';
import { HeadContainer, HeadText, ButtonFilter, FilterSvg } from './HeaderDashboard.styled';
import FilterModal from '../Filter/FilterModal';
import sprite from '../../images/sprite.svg';
import { useParams } from 'react-router-dom';

export const HeaderDashboard = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const { boardName } = useParams();
  
  const toogleShowModal = () => {
    setIsShowModal(!isShowModal);
  };

  return (
    <HeadContainer>
      <HeadText>{boardName}</HeadText>
      <ButtonFilter type="button" name="help" onClick={toogleShowModal}>
        <FilterSvg width={16} height={16}>
          <use href={`${sprite}#icon-filter`} />
        </FilterSvg>
        Filters
      </ButtonFilter>

      {isShowModal && <FilterModal closeModal={toogleShowModal} />}
    </HeadContainer>
  );
};