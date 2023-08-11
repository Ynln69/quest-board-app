import React, { useState } from 'react';
import {
  ButtonIcon,
  ButtonIconWrap,
  ButtonContentWrap,
  ButtonText,
  TitleInput,
  DescriptionInput,
  ModalText,
  RadioButtonWrap,
  RadioButtonInput,
  CalendarWrap,
} from './AddEditCard.styled';
import { Calendar } from '../Calendar/Calendar';
import sprite from '../../images/sprite.svg';

function AddEditCardModal({ setTitleTask, handleSubmit, setDescriptionTask }) {
  const [newTitle, setNewTitle] = useState('');
  
  const handleDescriptionChange = event => {
    setDescriptionTask(event.target.value);
  }

  const handleTitleChange = event => {
    setNewTitle(event.target.value);
    setTitleTask(event.target.value);
  };

  const handleButtonSubmit = event => {
    event.preventDefault();
    handleSubmit();
  };
  return (
    <>
      <TitleInput
        autoFocus
        name="title"
        placeholder="Title"
        type="text"
        value={newTitle}
        onChange={handleTitleChange}
      ></TitleInput>

      <DescriptionInput
        autoFocus
        name="description"
        type="text"
        placeholder="Description"
        onChange={handleDescriptionChange}
      ></DescriptionInput>
      <ModalText>Label color</ModalText>
      <RadioButtonWrap>
        <RadioButtonInput
          type="radio"
          name="color"
          backgroundColor="#8FA1D0"
        ></RadioButtonInput>
        <RadioButtonInput
          type="radio"
          name="color"
          backgroundColor="#E09CB5"
        ></RadioButtonInput>
        <RadioButtonInput
          type="radio"
          name="color"
          backgroundColor="#BEDBB0"
        ></RadioButtonInput>
        <RadioButtonInput
          type="radio"
          name="color"
          backgroundColor="#bab8b8"
        ></RadioButtonInput>
      </RadioButtonWrap>
      <ModalText>Deadline</ModalText>
      <CalendarWrap>
        <Calendar />
      </CalendarWrap>
      <ButtonContentWrap type="submit" onClick={handleButtonSubmit}>
        <ButtonIconWrap>
          <ButtonIcon>
            <use stroke="white" href={`${sprite}#icon-plus`} />
          </ButtonIcon>
        </ButtonIconWrap>
        <ButtonText>Add</ButtonText>
      </ButtonContentWrap>
    </>
  );
}

export default AddEditCardModal;
