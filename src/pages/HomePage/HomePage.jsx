import React from 'react';
import { ThemeProvider } from 'hooks/themeContext';
import Header from 'components/Header/Header';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { Dashboard } from 'components/Dashboard/Dashboard';

const HomePage = () => {
  return (
    <ThemeProvider>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Dashboard />
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
