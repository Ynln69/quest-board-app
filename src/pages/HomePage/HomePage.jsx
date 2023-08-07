import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'hooks/themeContext';
import Header from 'components/Header/Header';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { Dashboard } from 'components/Dashboard/Dashboard';
import { selectTheme } from 'redux/theme/selectors';
import { Container } from './HomePage.styled';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
const HomePage = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider>
      <Container>
        <Sidebar theme={theme} />
        <div style={{ width: '100%' }}>
          <Header theme={theme} />
          <Dashboard theme={theme} />
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default HomePage;
