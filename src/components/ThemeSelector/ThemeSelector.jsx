import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { updateUser } from 'redux/auth/operations';
import { ThemeContainer, ThemeList, ThemeItem } from './ThemeSelector.styled';

const ThemeSelector = ({ onClose }) => {
  const { theme } = useSelector(selectUser);
  const dispatch = useDispatch();
  const [currentTheme, setCurrentTheme] = useState(theme);

  useEffect(() => {
    document.body.classList.remove('light', 'dark', 'violet');
    document.body.classList.add(currentTheme);
  }, [currentTheme]);

  const themeOptions = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'violet', label: 'Violet' },
  ];

  useEffect(() => {
    document.body.classList.remove('light', 'dark', 'violet');
    document.body.classList.add(currentTheme);
  }, [currentTheme]);

  const onHandleTheme = async newTheme => {
    console.log(newTheme);
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






// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectUser } from 'redux/auth/selectors';
// import { updateUser } from 'redux/auth/operations';
// import {  Container, StyledSelect, SelectStyles } from './ThemeSelector.styled';

// const ThemeSelector = ({ isOpen, onClose }) => {
//   const { theme } = useSelector(selectUser);
//   const dispatch = useDispatch();
//   const [currentTheme, setCurrentTheme] = useState(theme);

//   useEffect(() => {
//     document.body.classList.remove('light', 'dark', 'violet');
//     document.body.classList.add(currentTheme);
//   }, [currentTheme]);

//   const themeOptions = [
//     { value: 'light', label: 'Light' },
//     { value: 'dark', label: 'Dark' },
//     { value: 'violet', label: 'Violet' },
//   ];

//   const onHandleTheme = async selectedOption => {
//     console.log(selectedOption);
//     const newTheme = selectedOption.value;

//     setCurrentTheme(newTheme);

//     try {
//       await dispatch(updateUser({ theme: newTheme }));
//       onClose();
//     } catch (error) {
//       console.error('Failed to update theme:', error);
//     }
//   };

//   return (
//     <Container>
//       <StyledSelect
//         value={themeOptions.find(option => option.value === currentTheme)}
//         onChange={onHandleTheme}
//         options={themeOptions}
//         isSearchable={false}
//         styles={SelectStyles}
//         menuIsOpen={isOpen}
//       />
//     </Container>
//   );
// };

// export default ThemeSelector;
