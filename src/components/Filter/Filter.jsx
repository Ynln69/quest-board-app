import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { filterPriority } from '../../redux/filter/filterSlice';
import { filterPriorityOptions } from '../../constants/filterPriorityOptions';

import {
  Container,
  DecorativeElement,
  ContainerWrapper,
  TextLabel,
  ButtonAll,
  RadioButtonWrap,
  RadioWrapper,
  RadioButtonInput,
  RadioButtonLabel,
} from './Filter.styled';

const Filter = ({ closeModal }) => {
  const [selectedPriority, setSelectedPriority] = useState('');

  const dispatch = useDispatch();

  const handleFilteredPriority = evt => {
    setSelectedPriority(evt.target.value);

    dispatch(filterPriority(evt.target.value));
    closeModal();
  };

  const onClickAll = () => {
    setSelectedPriority('all');
    dispatch(filterPriority('all'));
    closeModal();
  };

  return (
    <div>
      <Container>
        <DecorativeElement />
        <ContainerWrapper>
          <TextLabel>Label color</TextLabel>
          <ButtonAll type="button" onClick={onClickAll}>
            Show all
          </ButtonAll>
        </ContainerWrapper>
      </Container>

      <RadioButtonWrap>
        {filterPriorityOptions.map(option => (
          <RadioWrapper key={option.value}>
            <RadioButtonInput
              type="radio"
              name="priority"
              value={option.value}
              checked={selectedPriority === option.value}
              onChange={handleFilteredPriority}
              backgroundColor={option.backgroundColor}
            />
            <RadioButtonLabel>{option.label}</RadioButtonLabel>
          </RadioWrapper>
        ))}
      </RadioButtonWrap>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
