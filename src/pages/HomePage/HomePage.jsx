import React from 'react';
import { ThemeProvider } from 'hooks/themeContext';
import Header from 'components/Header/Header';
import { Sidebar } from 'components/Sidebar/Sidebar';

const HomePage = () => {
  return (
    <ThemeProvider>
      <Header />
      <Sidebar/>
    </ThemeProvider>
  );
};

export default HomePage;
