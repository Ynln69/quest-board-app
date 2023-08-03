import React, { useState } from 'react';
import { useTheme } from 'hooks/themeContext';
import UserInfo from 'components/UserInfo/UserInfo';
import { LIGHT, DARK, VIOLET } from 'constants';
import { Container, HeaderNav, MenuIcon, SelectIcon } from './Header.styled';
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
        <div>
          <MenuIcon></MenuIcon>
        </div>
      </div>
      <div>
        <HeaderNav onClick={toggleOptionList} value={theme}>
          <div>
            <SelectIcon><use stroke="white" href={`${Sprite}#icon-menu`} /></SelectIcon>
          </div>
          Theme
        </HeaderNav>
        <select value={theme} onChange={onToggleTheme}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="violet">Violet</option>
        </select>
      </div>
      <UserInfo />
    </Container>
  );
};

export default Header;