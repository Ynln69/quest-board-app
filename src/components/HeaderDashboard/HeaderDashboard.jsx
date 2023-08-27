import { useState } from 'react';
import { useParams } from 'react-router-dom';

import FilterModal from '../Filter/FilterModal';

import { HeadContainer, HeadText, ButtonFilter, FilterSvg } from './HeaderDashboard.styled';
import sprite from '../../images/sprite.svg';

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
