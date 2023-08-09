import styled from '@emotion/styled';
import Select from 'react-select';

export const Container = styled.div`
position: relative;
   }
`;

export const SelectContainer = styled.div`
  position: absolute;
  top: 100%;
  left: -10%;
  transform: translate(-100%, 10%);
  width: 100px;
  height: 107px;
  /* Відобразити опції */
  .css-1s2ci2r-menu {
    z-index: 1;
  }
`;

export const StyledSelect = styled(Select)`
  /* Стилі для вибраних тем */
  .css-1wa3eu0-placeholder,
  .css-1wa3eu0-singleValue {
    color: var(--theme_text); // Змінюємо колір вибраних тем
    overflow: hidden;
  }

  /* Стилі для опцій */
  .css-1uccc91-singleOption,
  .css-12jo7m5-option {
    background-color: var(--theme_bgc);
    color: var(--theme_color);
    cursor: pointer;
    &:hover {
      background-color: var(--theme_active);
      color: var(--theme_text);
    }
  }
`;

export const SelectStyles = {
  control: provided => ({
    ...provided,
    display: 'none',
    // Додайте стилі для контролу (значення) Select
  }),
  option: provided => ({
    ...provided,
     // Приховати опції
  }),
};



// export const Select = styled.select`
//   // position: absolute;
//   bottom: -70px;
//   left: 50%;
//   transform: translateX(-50%);
//   padding: 18px 44px 18px 18px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   gap: 4px;
//   background: var(--theme_bgc);
//   box-shadow: 0px 4px 16px 0px var(--theme_shadow);
//   border-radius: 8px;
//   border: 1px solid var(--border_theme);
//   cursor: pointer;
//   z-index: 99;
//   appearance: none; /* Remove default arrow */
// `;

// export const Option = styled.option`
//   font-family: Poppins;
//   font-size: 14px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: normal;
//   letter-spacing: -0.28px;
//   color: var(--theme_color);
//   background-color: var(--theme_bgc); /* Set background color */

//   &:hover,
//   &:focus,
//   &:active {
//     background-color: var(--theme_active);
//     color: var(--theme_text); /* Change text color on interaction */
//   }
// `;

