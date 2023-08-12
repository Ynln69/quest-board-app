import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from 'components/Header/Header';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { selectUser } from 'redux/auth/selectors';
import { Container } from './HomePage.styled';
import { useLocation, Outlet } from 'react-router-dom';
import { EmptyPage } from 'components/EmptyPage/EmptyPage';
import { Dashboard } from 'components/Dashboard/Dashboard';

const HomePage = () => {
  const { theme } = useSelector(selectUser);
  const location = useLocation();
  const checkUrl = location.pathname.length > '/home/'.length;

  useEffect(
    () => {
      document.body.classList.add(theme);
    },
    // eslint-disable-next-line
    []
  );

  return (
    <>
      <Container>
        <Sidebar theme={theme} />
        <div style={{ width: '100%' }}>
          <Header theme={theme} />
          {/* {!checkUrl && <EmptyPage theme={theme} />} */}
          <Dashboard />
        </div>
      </Container>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default HomePage;

// import React from 'react';
// import { useSelector } from 'react-redux';
// import Header from 'components/Header/Header';
// import { Sidebar } from 'components/Sidebar/Sidebar';
// import { Dashboard } from 'components/Dashboard/Dashboard';
// import { Container } from './HomePage.styled';

// const HomePage = () => {
//   const theme = useSelector(state => state.auth.theme); // Отримати тему з Redux-сторі

//   // Функція для встановлення класу теми на <html> елементі
//   const setThemeClass = theme => {
//     document.documentElement.className = '';
//     document.documentElement.classList.add(`theme-${theme}`);
//   };

//   React.useEffect(() => {
//     setThemeClass(theme); // Встановити клас теми під час завантаження сторінки
//   }, [theme]);

//   return (
//     <Container>
//       <Sidebar theme={theme} />
//       <div style={{ width: '100%' }}>
//         <Header theme={theme} />
//         <Dashboard theme={theme} />
//       </div>
//     </Container>
//   );
// };

// export default HomePage;

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { ThemeProvider } from 'hooks/themeContext';
// import Header from 'components/Header/Header';
// import { Sidebar } from 'components/Sidebar/Sidebar';
// import { Dashboard } from 'components/Dashboard/Dashboard';
// import { selectUser } from 'redux/auth/selectors'; // Підключити селектор для теми
// import { Container } from './HomePage.styled';

// const HomePage = () => {
//   const theme = useSelector(selectUser); // Отримати тему з Redux-сторі

//   // Якщо користувач не має встановленої теми, використовувати світлу тему за замовчуванням
//   const userTheme = theme || 'light';

//   return (
//     <ThemeProvider>
//       <Container>
//         <Sidebar theme={userTheme} />
//         <div style={{ width: '100%' }}>
//           <Header theme={userTheme} />
//           {/* Використовувати тему користувача для відображення */}
//           <Dashboard theme={userTheme} />
//         </div>
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default HomePage;

// import React from 'react';
// import { useSelector } from 'react-redux';
// import Header from 'components/Header/Header';
// import { Sidebar } from 'components/Sidebar/Sidebar';
// import { Dashboard } from 'components/Dashboard/Dashboard';
// // import { selectUser } from 'redux/auth/selectors';
// import { Container } from './HomePage.styled';

// const HomePage = () => {
//   const theme = useSelector(state => state.auth.theme); // Отримати тему зі стору

//   return (
//     <Container className={`theme-${theme}`}>
//       <Sidebar theme={theme} />
//       <div style={{ width: '100%' }}>
//         <Header theme={theme} />
//         <Dashboard theme={theme} />
//       </div>
//     </Container>
//   );
// };

// export default HomePage;

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { ThemeProvider } from 'hooks/themeContext';
// import Header from 'components/Header/Header';
// import { Sidebar } from 'components/Sidebar/Sidebar';
// import { Dashboard } from 'components/Dashboard/Dashboard';
// import { selectUser } from 'redux/auth/selectors';
// import { Container } from './HomePage.styled';
// const HomePage = () => {
//   const theme = useSelector(selectUser);

//   return (
//     <ThemeProvider>
//       <Container>
//         <Sidebar theme={theme} />
//         <div style={{ width: '100%' }}>
//           <Header theme={theme} />
//           <Dashboard theme={theme} />
//         </div>
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default HomePage;
