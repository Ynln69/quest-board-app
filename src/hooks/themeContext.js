import React from 'react';
import { useSelector } from 'react-redux';

const ThemeContext = React.createContext();

export const useTheme = () => React.useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const theme = useSelector(state => state.theme);

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};