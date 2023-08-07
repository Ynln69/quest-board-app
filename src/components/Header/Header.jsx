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
    setThemeSelectorOpen(!isThemeSelectorOpen); // Toggle the state for isThemeSelectorOpen
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
            <SelectIcon
              className={`icon-chevron-down theme-${theme}`}
              width="16"
              height="16"
              onClick={toggleThemeSelector}
            >
              <use href={`${Sprite}#icon-chevron-down`} />
            </SelectIcon>
          </div>
          Theme
        </HeaderNav>
        {isThemeSelectorOpen && (
          <ThemeSelector onClose={() => setThemeSelectorOpen(false)} />
        )}
        <UserInfo />
      </HeaderWrap>
      {isSideBarOpen && <Sidebar theme={theme} isOpen={isSideBarOpen} />}
    </Container>
  );
};

export default Header;

// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import UserInfo from 'components/UserInfo/UserInfo';
// import { setTheme } from 'redux/theme/themeSlice';
// import { selectTheme } from 'redux/theme/selectors';
// import { updateTheme } from 'redux/theme/operations';
// import { Sidebar } from 'components/Sidebar/Sidebar';
// import {
//   Container,
//   HeaderNav,
//   MenuIcon,
//   SelectIcon,
//   HeaderWrap,
// } from './Header.styled';
// import Sprite from '../../images/sprite.svg';

// const Header = () => {
//   const dispatch = useDispatch();
//   const theme = useSelector(selectTheme);
//   const [isOptionListOpen, setOptionListOpen] = useState(false);
//   const [isSideBarOpen, setSideBarOpen] = useState(false);
//   const [isThemeSelectorOpen, setThemeSelectorOpen] = useState(false);

//   useEffect(() => {
//     const storedTheme = localStorage.getItem('theme');
//     if (storedTheme) {
//       dispatch(setTheme(storedTheme));
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
//   }, [dispatch, isSideBarOpen]);

//   const handleOutsideClick = e => {
//     if (!e.target.closest('aside')) {
//       setSideBarOpen(false);
//     }
//   };

//   const toggleOptionList = () => {
//     setOptionListOpen(!isOptionListOpen);
//   };

//   const sendThemeToBackend = newTheme => {
//     localStorage.setItem('theme', newTheme);
//   };

//      const onToggleTheme = (event) => {
//     const newTheme = event.target.value;

//       const themes = ['light', 'dark', 'violet'];
//     themes.forEach(t => {
//       document.body.classList.remove(t);
//     });

//     document.body.classList.remove(theme);
//     document.body.classList.add(newTheme);

//     dispatch(setTheme(newTheme)); // Update the local theme state immediately
//     sendThemeToBackend(newTheme); // Save the theme in localStorage (this part seems correct)

//        dispatch(updateTheme({ theme: newTheme }))
//       .unwrap()
//       .catch((error) => {
//         console.log('Error updating theme:', error);
//       });

//   };

//   const toggleSideBar = () => {
//     setSideBarOpen(!isSideBarOpen);
//   };

//   const toggleThemeSelector = () => {
//     setThemeSelectorOpen(!isThemeSelectorOpen);
//   };

//   return (
//     <Container className={`theme-${theme}`}>
//       <div onClick={toggleSideBar}>
//         <MenuIcon className={`icon-menu theme-${theme}`} width="32" height="32">
//           <use href={`${Sprite}#icon-menu`} />
//         </MenuIcon>
//       </div>
//       {isSideBarOpen && <Sidebar />}
//       <HeaderWrap>
//         <HeaderNav onClick={toggleOptionList} value={theme}>
//           <div>
//             <SelectIcon
//               className={`icon-chevron-down theme-${theme}`}
//               onClick={toggleThemeSelector}
//             >
//               <use href={`${Sprite}#icon-chevron-down`} />
//             </SelectIcon>
//           </div>
//           Theme
//         </HeaderNav>
//         {isThemeSelectorOpen && (
//           <select value={theme} onChange={onToggleTheme}>
//             <option value="light">Light</option>
//             <option value="dark">Dark</option>
//             <option value="violet">Violet</option>
//           </select>
//         )}
//         <UserInfo />
//       </HeaderWrap>
//       {isSideBarOpen && <Sidebar theme={theme} isOpen={isSideBarOpen} />}
//     </Container>
//   );
// };

// export default Header;
