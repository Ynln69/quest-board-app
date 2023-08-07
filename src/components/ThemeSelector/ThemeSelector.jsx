import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from 'redux/theme/themeSlice';
import { selectTheme } from 'redux/theme/selectors';
import { updateTheme } from 'redux/theme/operations';

const ThemeSelector = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const onToggleTheme = async event => {
    const newTheme = event.target.value;

    const themes = ['light', 'dark', 'violet'];
    themes.forEach(t => {
      document.body.classList.remove(t);
    });

    document.body.classList.remove(theme);
    document.body.classList.add(newTheme);

    dispatch(setTheme(newTheme));

    try {
      await dispatch(updateTheme({ theme: newTheme }));
      localStorage.setItem('theme', newTheme); 
    } catch (error) {
      console.log('Error updating theme:', error);
    }
  };

  return (
    <select value={theme} onChange={onToggleTheme}>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="violet">Violet</option>
    </select>
  );
};

export default ThemeSelector;