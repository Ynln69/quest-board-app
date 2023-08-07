import { GoogleBtnCustom } from './GoogleBtn.styled';
import sprite from '../../images/sprite.svg';

export const GoogleBtn = ({ onClick, text }) => {
  return (
    <GoogleBtnCustom type="button" onClick={onClick}>
      {text}{' '}
      <svg width="28" height="28" fill="#fff">
        <use href={`${sprite}#icon-icon-google`} />
      </svg>
    </GoogleBtnCustom>
  );
};
