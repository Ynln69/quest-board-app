import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'hooks/themeContext';
import Header from 'components/Header/Header';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { Dashboard } from 'components/Dashboard/Dashboard';
import { selectTheme } from 'redux/theme/selectors';
import { Container } from './HomePage.styled';
const HomePage = () => {
  const theme = useSelector(selectTheme);

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
