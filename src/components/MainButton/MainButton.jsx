import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton, SvgAdd, SvgWrapper } from './MainButton.styled';
import sprite from '../../images/sprite.svg';

const MainButton = ({ type, onClick, children, showPlus = false }) => (
  <StyledButton type={type} onClick={onClick} showPlus={showPlus}>
    {showPlus && (
      <SvgWrapper>
        <SvgAdd>
          <use href={`${sprite}#icon-plus`} />
        </SvgAdd>
      </SvgWrapper>
    )}
    {children}
  </StyledButton>
);

MainButton.propTypesropTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  btnContent: PropTypes.node,
  showPlus: PropTypes.bool,
};

export default MainButton;
