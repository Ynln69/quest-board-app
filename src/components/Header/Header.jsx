import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserInfo from 'components/UserInfo/UserInfo';
import { setTheme } from 'redux/theme/themeSlice';
import { selectTheme } from 'redux/theme/selectors';
import { Sidebar } from 'components/Sidebar/Sidebar';
import {
  Container,
  HeaderNav,
  MenuIcon,
  SelectIcon,
  HeaderWrap,
} from './Header.styled';
import Sprite from '../../images/sprite.svg';

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const [isOptionListOpen, setOptionListOpen] = useState(false);
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  const [isThemeSelectorOpen, setThemeSelectorOpen] = useState(false); 

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      dispatch(setTheme(storedTheme));
    }
  }, [dispatch]);

  const toggleOptionList = () => {
    setOptionListOpen(!isOptionListOpen);
  };

  const sendThemeToBackend = (newTheme) => {
    localStorage.setItem('theme', newTheme);
  };

  const onToggleTheme = (event) => {
    const newTheme = event.target.value;
    dispatch(setTheme(newTheme));
    sendThemeToBackend(newTheme);
  };

  const toggleSideBar = () => {
    setSideBarOpen(!isSideBarOpen); 
  };

  const toggleThemeSelector = () => {
    setThemeSelectorOpen(!isThemeSelectorOpen);
  };

   return (
    <Container className={`theme-${theme}`}>
      <div onClick={toggleSideBar}>
        <MenuIcon className={`icon-menu theme-${theme}`} width="32" height="32">
          <use href={`${Sprite}#icon-menu`} />
        </MenuIcon>
      </div>
      <HeaderWrap>
        <HeaderNav onClick={toggleOptionList} value={theme}>
          <div>
          <SelectIcon className={`icon-chevron-down theme-${theme}`} onClick={toggleThemeSelector}>
              <use href={`${Sprite}#icon-chevron-down`} />
              </SelectIcon>
          </div>
          Theme
        </HeaderNav>
        {isThemeSelectorOpen && ( 
        <select value={theme} onChange={onToggleTheme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="violet">Violet</option>
      </select>
      )}
        <UserInfo />
      </HeaderWrap>
      {isSideBarOpen && <Sidebar theme={theme} isOpen={isSideBarOpen} />}
    </Container>
  );
};

export default Header;

