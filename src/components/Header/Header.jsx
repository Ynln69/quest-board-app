import React, { useState } from 'react';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import UserInfo from 'components/UserInfo/UserInfo';
import { Container, HeaderNav, MenuIcon, SelectIcon } from './Header.styled';

const Header = ({ onToggleMenu, onThemeChange }) => {
  const { switcher, currentTheme } = useThemeSwitcher();
  const [isOptionListOpen, setOptionListOpen] = useState(false);

  const toggleOptionList = () => {
    setOptionListOpen(!isOptionListOpen);
  };

  const handleThemeChange = event => {
    const selectedTheme = event.target.value;
    switcher({ theme: selectedTheme });
    onThemeChange(selectedTheme);
  };

  return (
    <Container>
      <div onClick={onToggleMenu}>
        <div>
          <MenuIcon></MenuIcon>
        </div>
      </div>
      <div>
        <HeaderNav onClick={toggleOptionList} value={currentTheme}>
          <div>
            <SelectIcon></SelectIcon>
          </div>
          Theme
        </HeaderNav>
        <select>
          <option
            onClick={handleThemeChange}
            value="light"
            selected={currentTheme === 'light'}
          >
            Light
          </option>

          <option
            onClick={handleThemeChange}
            value="dark"
            selected={currentTheme === 'dark'}
          >
            Dark
          </option>

          <option
            onClick={handleThemeChange}
            value="violet"
            selected={currentTheme === 'violet'}
          >
            Violet
          </option>
        </select>
      </div>
      <UserInfo />
    </Container>
  );
};

export default Header;