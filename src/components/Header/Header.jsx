import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserInfo from 'components/UserInfo/UserInfo';
import { selectUser } from 'redux/auth/selectors';
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
// import { updateUser } from 'redux/auth/operations';

const Header = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector(selectUser);
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  const [isThemeSelectorOpen, setThemeSelectorOpen] = useState(false);

  useEffect(() => {
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
    <PageHeader>
      <MenuBtn type='button' onClick={toggleSideBar}>
        <MenuIcon className={`icon-menu theme-${theme}`} width="32" height="32">
          <use href={`${Sprite}#icon-menu`} />
        </MenuIcon>
      </MenuBtn>
      {isSideBarOpen && <Backdrop><Sidebar /></Backdrop>}
      <HeaderWrap>
        <HeaderNav>
        <Text>Theme</Text>
          <div>
            <SelectIcon width="16" height="16" onClick={toggleThemeSelector}>
              <use href={`${Sprite}#icon-chevron-down`} />
            </SelectIcon>
          </div>
          
        </HeaderNav>
        {isThemeSelectorOpen && (
          <ThemeSelector
            onClose={() => setThemeSelectorOpen(false)}
          />
        )}
        <UserInfo />
      </HeaderWrap>
      {isSideBarOpen && <Sidebar theme={theme} isOpen={isSideBarOpen} />}
    </PageHeader>
  );
};

export default Header;





