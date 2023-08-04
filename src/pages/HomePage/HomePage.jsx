import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'hooks/themeContext';
import Header from 'components/Header/Header';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { Dashboard } from 'components/Dashboard/Dashboard';
import { selectTheme } from 'redux/theme/selectors';

const HomePage = () => {
  const theme = useSelector(selectTheme);
  return (
    <ThemeProvider>
      <Header theme={theme}/>
      <div style={{ display: 'flex' }}>
        <Sidebar theme={theme}/>
        <Dashboard theme={theme}/>
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
