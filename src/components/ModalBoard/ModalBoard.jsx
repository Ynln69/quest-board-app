import React from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
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
import { createBoard, editBoard } from 'redux/boards/boardOperations';

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
  'bg1',
  'bg2',
  'bg3',
  'bg4',
  'bg5',
  'bg6',
  'bg7',
  'bg8',
  'bg9',
  'bg10',
  'bg11',
  'bg12',
  'bg13',
  'bg14',
  'bg15',
  'bg16',
];

function ModalBoard({ btnContent, closeModal, boardData }) {
  const dispatch = useDispatch();

  const initialValues =
    btnContent === 'Create'
      ? {
          title: '',
          icon: icons[0],
          background: backgrounds[0],
        }
      : {
          title: boardData?.title,
          icon: boardData?.icon,
          background: boardData?.background,
        };

  const handleSubmit = (values, { resetForm }) => {
    const boardId = `3${uuidv4().replace(/-/g, '')}`;

    const newBoard = {
      id: boardId,
      title: values.title,
      icon: values.icon,
      background: values.background,
      boardsData: { tasks: {}, columns: {}, columnOrder: [] },
    };
    if (btnContent === 'Create') {
      dispatch(createBoard(newBoard));
    } else {
      console.log(newBoard);
      dispatch(editBoard({ newBoard, id: boardData._id }));
    }

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
                  src={require(`../../images/backgrounds/${background}.jpg`)}
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
