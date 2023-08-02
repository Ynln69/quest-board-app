import React, { useState } from 'react';
import Header from 'components/Header/Header';

export const HomePage = () => {
  const [ setCurrentTheme] = useState('dark');

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
  };

  return (
    <Header onThemeChange={handleThemeChange} />
  );
};