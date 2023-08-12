import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserInfo from 'components/UserInfo/UserInfo';
import { selectUser } from 'redux/auth/selectors';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { Backdrop } from 'components/Modal/Modal.styles';
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
    <Container>
      <div onClick={toggleSideBar}>
        <MenuIcon className={`icon-menu theme-${theme}`} width="32" height="32">
          <use href={`${Sprite}#icon-menu`} />
        </MenuIcon>
      </div>
      {isSideBarOpen && <Backdrop><Sidebar /></Backdrop>}
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
            onClose={() => setThemeSelectorOpen(false)}
          />
        )}
        <UserInfo />
      </HeaderWrap>
      {isSideBarOpen && <Sidebar theme={theme} isOpen={isSideBarOpen} />}
    </Container>
  );
};

export default Header;





// import React, { useState, useEffect, useCallback } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import UserInfo from 'components/UserInfo/UserInfo';
// import { selectUser } from 'redux/auth/selectors';
// import { updateUser } from 'redux/auth/operations';
// import { Sidebar } from 'components/Sidebar/Sidebar';
// import ThemeSelector from 'components/ThemeSelector/ThemeSelector';
// import {
//   Container,
//   HeaderNav,
//   MenuIcon,
//   HeaderWrap,
//   SelectIcon,
//   Text,
// } from './Header.styled';
// import Sprite from '../../images/sprite.svg';

// const Header = () => {
//   const dispatch = useDispatch();
//   const user = useSelector(selectUser); // Отримати інформацію про користувача зі стору
//   const [isSideBarOpen, setSideBarOpen] = useState(false);
//   const [isThemeSelectorOpen, setThemeSelectorOpen] = useState(false);

//   const toggleTheme = useCallback(newTheme => {
//     dispatch(updateUser(newTheme)); // Використовуйте вашу дію для оновлення теми у Redux-сховищі
//   }, [dispatch]);

//   useEffect(() => {
//     const storedTheme = localStorage.getItem('theme');
//     if (storedTheme) {
//       toggleTheme(storedTheme); // Встановити тему з локального сховища
//     }
//     let timeout;

//     if (isSideBarOpen) {
//       timeout = setTimeout(() => {
//         document.addEventListener('click', handleOutsideClick);
//       }, 100);
//     } else {
//       document.removeEventListener('click', handleOutsideClick);
//     }

//     return () => {
//       clearTimeout(timeout);
//       document.removeEventListener('click', handleOutsideClick);
//     };
//   }, [dispatch, isSideBarOpen, toggleTheme]); 

//   const handleOutsideClick = e => {
//     if (!e.target.closest('aside')) {
//       setSideBarOpen(false);
//     }
//   };

//   const toggleSideBar = () => {
//     setSideBarOpen(!isSideBarOpen);
//   };

//   const toggleThemeSelector = () => {
//     setThemeSelectorOpen(!isThemeSelectorOpen);
//   };

//   return (
//     <Container className={`theme-${user.theme}`}> {/* Використовуйте тему користувача з Redux-сховища */}
//       <div onClick={toggleSideBar}>
//         <MenuIcon className={`icon-menu theme-${user.theme}`} width="32" height="32">
//           <use href={`${Sprite}#icon-menu`} />
//         </MenuIcon>
//       </div>
//       {isSideBarOpen && <Sidebar />}
//       <HeaderWrap>
//         <HeaderNav>
//           <div>
//             <SelectIcon width="16" height="16" onClick={toggleThemeSelector}>
//               <use href={`${Sprite}#icon-chevron-down`} />
//             </SelectIcon>
//           </div>
//           <Text>Theme</Text>
//         </HeaderNav>
//         {isThemeSelectorOpen && (
//           <ThemeSelector
//             isOpen={isThemeSelectorOpen} 
//             onClose={() => setThemeSelectorOpen(false)}
//             onToggleThemeSelector={toggleThemeSelector} 
//           />
//         )}
//         <UserInfo />
//       </HeaderWrap>
//       {isSideBarOpen && <Sidebar theme={user.theme} isOpen={isSideBarOpen} />}
//     </Container>
//   );
// };

// export default Header;


