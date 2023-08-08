import React, { useState, useEffect } from 'react';
import {  useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { updateUser } from 'redux/auth/operations';
import { Container, Select, Option } from './ThemeSelector.styled';

const ThemeSelector = ({ onClose }) => {
  const { theme } = useSelector(selectUser);
  const dispatch = useDispatch();
  const [currentTheme, setCurrentTheme] = useState(theme);

  useEffect(() => {
    document.body.classList.remove('light', 'dark', 'violet');
    document.body.classList.add(currentTheme);
  }, [currentTheme]);

  const onHandleTheme = async event => {
    console.log(event);
    const newTheme = event.target.value;

    setCurrentTheme(newTheme);

    try {
      await dispatch(updateUser({ theme: newTheme }));
      onClose();
    } catch (error) {
      console.error('Failed to update theme:', error);
    }
  };

  return (
    <Container>
      <Select value={currentTheme} onChange={onHandleTheme}>
        <Option value="light">Light</Option>
        <Option value="dark">Dark</Option>
        <Option value="violet">Violet</Option>
      </Select>
    </Container>
  );
};
export default ThemeSelector;



// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateUser } from 'redux/auth/operations';
// import { selectTheme } from 'redux/theme/selectors';
// import { updateTheme } from 'redux/theme/operations';
// import { Container, Select, Option } from './ThemeSelector.styled';

// const ThemeSelector = ({ onClose }) => {
//   const dispatch = useDispatch();
//   const theme = useSelector(selectTheme);

//   const onHandleTheme = async event => {
//     const newTheme = event.target.value;

//     const themes = ['light', 'dark', 'violet'];
//     themes.forEach(t => {
//       document.body.classList.remove(t);
//     });

//     document.body.classList.remove(theme);
//     document.body.classList.add(newTheme);

//         try {
//       await dispatch(updateTheme({ theme: newTheme }));
//       localStorage.setItem('theme', newTheme);
//     } catch (error) {
//       console.log('Error updating theme:', error);
//     }
//     dispatch(updateUser({ theme }));
//     onClose();
//   };

//   return (
//     <Container>
//       <Select value={theme} onChange={onHandleTheme}>
//         <Option value="light">Light</Option>
//         <Option value="dark">Dark</Option>
//         <Option value="violet">Violet</Option>
//       </Select>
//     </Container>
//   );
// };
// export default ThemeSelector;
