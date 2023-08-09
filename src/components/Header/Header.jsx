import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserInfo from 'components/UserInfo/UserInfo';
import { setTheme } from 'redux/theme/themeSlice';
import { selectTheme } from 'redux/theme/selectors';
import { Sidebar } from 'components/Sidebar/Sidebar';
import ThemeSelector from 'components/ThemeSelector/ThemeSelector';
import {
  Container,
  HeaderNav,
  MenuIcon,
  HeaderWrap,
  SelectIcon,
  Text,
} from './Header.styled';
import Sprite from '../../images/sprite.svg';

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  const [isThemeSelectorOpen, setThemeSelectorOpen] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      dispatch(setTheme(storedTheme));
    }
    let timeout;

    if (isSideBarOpen) {
      timeout = setTimeout(() => {
        document.addEventListener('click', handleOutsideClick);
      }, 100);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      clearTimeout(timeout);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [dispatch, isSideBarOpen]);

  const handleOutsideClick = e => {
    if (!e.target.closest('aside')) {
      setSideBarOpen(false);
    }
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
      {isSideBarOpen && <Sidebar />}
      <HeaderWrap>
        <HeaderNav>
          <div>
            <SelectIcon width="16" height="16" onClick={toggleThemeSelector}>
              <use href={`${Sprite}#icon-chevron-down`} />
            </SelectIcon>
          </div>
          <Text>Theme</Text>
        </HeaderNav>
        {isThemeSelectorOpen && (
          <ThemeSelector
          isOpen={isThemeSelectorOpen} 
          onClose={() => setThemeSelectorOpen(false)}
          onToggleThemeSelector={toggleThemeSelector} 
        />
        )}
        <UserInfo />
      </HeaderWrap>
      {isSideBarOpen && <Sidebar theme={theme} isOpen={isSideBarOpen} />}
    </Container>
  );
};

export default Header;
