import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectUser } from 'redux/auth/selectors';

import UserInfo from 'components/UserInfo/UserInfo';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { Backdrop } from 'components/Modal/Modal.styles';
import ThemeSelector from 'components/ThemeSelector/ThemeSelector';
import {
  PageHeader,
  HeaderNav,
  MenuBtn,
  MenuIcon,
  HeaderWrap,
  SelectIcon,
  Text,
} from './Header.styled';
import Sprite from '../../images/sprite.svg';

const Header = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector(selectUser);
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  const [isThemeSelectorOpen, setThemeSelectorOpen] = useState(false);

  useEffect(() => {
    let timeout;

    if (isSideBarOpen || isThemeSelectorOpen) {
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
  }, [dispatch, isSideBarOpen, isThemeSelectorOpen]);

  const handleOutsideClick = e => {
    if (!e.target.closest('aside')) {
      setSideBarOpen(false);
    }
    if (!e.target.closest('theme')) { 
      setThemeSelectorOpen(false);
    }
  };

  const toggleSideBar = () => {
    setSideBarOpen(!isSideBarOpen);
  };

  const toggleThemeSelector = () => {
    setThemeSelectorOpen(!isThemeSelectorOpen);
  };

  return (
    <PageHeader>
      <MenuBtn type="button" onClick={toggleSideBar}>
        <MenuIcon className={`icon-menu theme-${theme}`} width="24" height="24">
          <use href={`${Sprite}#icon-menu`} />
        </MenuIcon>
      </MenuBtn>
      {isSideBarOpen && (
        <Backdrop>
          <Sidebar />
        </Backdrop>
      )}
      <HeaderWrap>
        <HeaderNav onClick={toggleThemeSelector}>
          <Text>Theme</Text>
          <SelectIcon width="16" height="16" >
            <use href={`${Sprite}#icon-chevron-down`} />
          </SelectIcon>
        </HeaderNav>
        {isThemeSelectorOpen && (
          <ThemeSelector onClose={() => setThemeSelectorOpen(false)} />
        )}
        <UserInfo />
      </HeaderWrap>
      {isSideBarOpen && <Sidebar theme={theme} isOpen={isSideBarOpen} />}
    </PageHeader>
  );
};

export default Header;
