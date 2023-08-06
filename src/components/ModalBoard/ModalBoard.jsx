import React from 'react';
import { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { nanoid } from '@reduxjs/toolkit';
import sprite from '../../images/sprite.svg';
import {
  BgImagesWrapper,
  IconsWrapper,
  StyledInputField,
  StyledRadioField,
  StyledSVG,
  StyledSubtitle,
} from './ModalBoard.styles';
import { MainButton } from 'components/Button/Button';

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

const initialValues = { title: '', icon: icons[0] };

function ModalBoard() {
  const [selectedIcon, setSelectedIcon] = useState(icons[0]);
  const [selectedBackground, setSelectedBackground] = useState(backgrounds[0]);

  const handleSubmit = () => {};

  return (
    <>
      <Formik initialValues={{ initialValues }} onSubmit={handleSubmit}>
        <Form autoComplete="off">
          <StyledInputField type="text" name="title" placeholder="Title" />
          <ErrorMessage name="title" component="p" />
          <StyledSubtitle>Icons</StyledSubtitle>
          <IconsWrapper>
            {icons.map(icon => (
              <label key={nanoid()}>
                <StyledRadioField
                  type="radio"
                  name="icon"
                  value={icon}
                  onChange={() => {
                    setSelectedIcon(icon);
                  }}
                  checked={selectedIcon === icon}
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
                  onChange={() => {
                    setSelectedBackground(background);
                  }}
                  checked={selectedBackground === background}
                />
                <img
                  src={require(`../../images/backgrounds/non-optimized/${background}`)}
                  alt={`background variant ${i + 1}`}
                  width="28"
                />
              </label>
            ))}
          </BgImagesWrapper>
          <MainButton type="submit">
            Create
          </MainButton>
        </Form>
      </Formik>
    </>
  );
}

// ModalBoard.propTypes = { btnContent: PropTypes.string.isRequired };

export default ModalBoard;

// tests

// import ModalBoard from 'components/ModalBoard';
// import Modal from 'components/Modal/Modal';
// <Modal isOpen={true} btnContent={'Create'} heading={'New board'}>
//   <ModalBoard btnContent="Create" />
// </Modal>;
