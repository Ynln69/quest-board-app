import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { filterPriority } from '../../redux/filter/filterSlice';

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

const Filter = ({closeModal}) => {
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
        <RadioWrapper>
          <RadioButtonInput
            type="radio"
            name="priority"
            value="without priority"
            checked={selectedPriority === 'without priority'}
            onChange={handleFilteredPriority}
            backgroundColor="#bab8b8"
          />
          <RadioButtonLabel>Without priority</RadioButtonLabel>
        </RadioWrapper>

        <RadioWrapper>
          <RadioButtonInput
            type="radio"
            name="priority"
            value="low"
            checked={selectedPriority === 'low'}
            onChange={handleFilteredPriority}
            backgroundColor="#8FA1D0"
          />
          <RadioButtonLabel>Low</RadioButtonLabel>
        </RadioWrapper>

        <RadioWrapper>
          <RadioButtonInput
            type="radio"
            name="priority"
            value="medium"
            checked={selectedPriority === 'medium'}
            onChange={handleFilteredPriority}
            backgroundColor="#E09CB5"
          />
          <RadioButtonLabel>Medium</RadioButtonLabel>
        </RadioWrapper>

        <RadioWrapper>
          <RadioButtonInput
            type="radio"
            name="priority"
            value="high"
            checked={selectedPriority === 'high'}
            onChange={handleFilteredPriority}
            backgroundColor="#BEDBB0"
          />
          <RadioButtonLabel>High</RadioButtonLabel>
        </RadioWrapper>
      </RadioButtonWrap>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

