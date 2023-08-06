import React from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
// import { v4 as uuidv4 } from 'uuid';
import { nanoid } from '@reduxjs/toolkit';
import sprite from '../../images/sprite.svg';
import { addBoardSchema } from 'schemas';
import {
  BgImagesWrapper,
  ErrorMsg,
  IconsWrapper,
  StyledInputField,
  StyledRadioField,
  StyledSVG,
  StyledSubtitle,
} from './ModalBoard.styles';
import { MainButton } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { createBoard } from 'redux/boards/boardOperations';

const icons = [
  'icon-project',
  'icon-star',
  'icon-loading',
  'icon-puzzle-piece',
  'icon-container',
  'icon-lightning',
  'icon-colors',
  'icon-hexagon',
];

const backgrounds = [
  'bg1.jpg',
  'bg2.jpg',
  'bg3.jpg',
  'bg4.jpg',
  'bg5.jpg',
  'bg6.jpg',
  'bg7.jpg',
  'bg8.jpg',
  'bg9.jpg',
  'bg10.jpg',
  'bg11.jpg',
  'bg12.jpg',
  'bg13.jpg',
  'bg14.jpg',
  'bg15.jpg',
  'bg16.jpg',
];

const initialValues = { title: '', icon: icons[0], background: backgrounds[0] };

function ModalBoard({ btnContent, closeModal }) {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    // const boardId = `3${uuidv4().replace(/-/g, '')}`;

    const newBoard = {
      title: values.title,
      icon: values.icon,
      background: values.background,
    };
    dispatch(createBoard(newBoard));
    resetForm();
    closeModal();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={addBoardSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, values }) => (
        <Form autoComplete="off">
          <StyledInputField
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={values.title}
          />
          <ErrorMsg name="title" component="p" />
          <StyledSubtitle>Icons</StyledSubtitle>
          <IconsWrapper>
            {icons.map(icon => (
              <label key={nanoid()}>
                <StyledRadioField
                  type="radio"
                  name="icon"
                  value={icon}
                  onChange={handleChange}
                  checked={values.icon === icon}
                />
                <StyledSVG>
                  <use href={`${sprite}#${icon}`}></use>
                </StyledSVG>
              </label>
            ))}
          </IconsWrapper>
          <StyledSubtitle>Background</StyledSubtitle>
          <BgImagesWrapper>
            {backgrounds.map((background, i) => (
              <label key={nanoid()}>
                <StyledRadioField
                  type="radio"
                  name="background"
                  value={background}
                  onChange={handleChange}
                  checked={values.background === background}
                />
                <img
                  src={require(`../../images/backgrounds/non-optimized/${background}`)}
                  alt={`background variant ${i + 1}`}
                  width="28"
                />
              </label>
            ))}
          </BgImagesWrapper>
          <MainButton type="submit">{btnContent}</MainButton>
        </Form>
      )}
    </Formik>
  );
}

ModalBoard.propTypes = {
  btnContent: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ModalBoard;
