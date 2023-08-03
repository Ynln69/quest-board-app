import React, { useState } from 'react';
import { useTheme } from 'hooks/themeContext';
import UserInfo from 'components/UserInfo/UserInfo';
import { LIGHT, DARK, VIOLET } from 'constants';
import {
  Container,
  HeaderNav,
  MenuIcon,
  SelectIcon,
  HeaderWrap,
} from './Header.styled';
import Sprite from '../../images/sprite.svg';

const Header = ({ onToggleMenu }) => {
  const { theme, handleThemeChange } = useTheme();
  const [isOptionListOpen, setOptionListOpen] = useState(false);

  const toggleOptionList = () => {
    setOptionListOpen(!isOptionListOpen);
  };

  const onToggleTheme = () => {
    let newTheme = LIGHT;
    if (theme === LIGHT) {
      newTheme = DARK;
    } else if (theme === DARK) {
      newTheme = VIOLET;
    }
    handleThemeChange(newTheme);
  };

  return (
    <Container className={`theme-${theme}`}>
      <div onClick={onToggleMenu}>
        <MenuIcon>
          <use href={`${Sprite}#icon-menu`} />
        </MenuIcon>
      </div>
      <HeaderWrap>
        <HeaderNav onClick={toggleOptionList} value={theme}>
          <div>
            <SelectIcon></SelectIcon>
          </div>
          Theme
        </HeaderNav>
        <select value={theme} onChange={onToggleTheme}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="violet">Violet</option>
        </select>
        <UserInfo />
      </HeaderWrap>
    </Container>
  );
};

export default Header;
