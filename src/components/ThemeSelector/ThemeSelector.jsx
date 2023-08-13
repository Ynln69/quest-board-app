import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { updateUser } from 'redux/auth/operations';
import { ThemeContainer, ThemeList, ThemeItem } from './ThemeSelector.styled';

const ThemeSelector = ({ onClose }) => {
  const { theme } = useSelector(selectUser);
  const dispatch = useDispatch();
  const [currentTheme, setCurrentTheme] = useState(theme);
  const themeOptions = [
    { value: 'LIGHT', label: 'Light' },
    { value: 'DARK', label: 'Dark' },
    { value: 'VIOLET', label: 'Violet' },
  ];

  useEffect(() => {
    document.body.classList.remove('LIGHT', 'DARK', 'VIOLET');
    document.body.classList.add(currentTheme);
  }, [currentTheme]);

  const onHandleTheme = async newTheme => {
    setCurrentTheme(newTheme);

    try {
      await dispatch(updateUser({ theme: newTheme.toUpperCase() }));

      onClose();
    } catch (error) {
      console.error('Failed to update theme:', error);
    }
  };

  return (
    <ThemeContainer>
      <ThemeList>
        {themeOptions.map(option => (
          <ThemeItem
            key={option.value}
            onClick={() => onHandleTheme(option.value)}
            className={currentTheme === option.value ? 'active' : ''}
          >
            {option.label}
          </ThemeItem>
        ))}
      </ThemeList>
    </ThemeContainer>
  );
};

export default ThemeSelector;
