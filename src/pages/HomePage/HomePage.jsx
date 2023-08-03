import React from 'react';
import { ThemeProvider } from 'hooks/themeContext';
import Header from 'components/Header/Header';

const HomePage = () => {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
};

export default HomePage;
