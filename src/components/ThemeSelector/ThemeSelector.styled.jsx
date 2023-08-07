import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
//   display: inline-block;
`;

export const Select = styled.select`
  position: absolute;
  display: none;
  bottom: -70px;
  left: 80%;
  transform: translateX(-80%);
  display: inline-flex;
  padding: 18px 44px 18px 18px;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  background: var(--theme_bgc);
  box-shadow: 0px 4px 16px 0px var(--theme_shadow);
  border-radius: 8px;
  border: 1px solid var(--border_theme);
  cursor: pointer;
  z-index: 99;
`;

export const Option = styled.option`
  // content: '';
  // position: absolute;
  // top: 50%;
  // right: 12px;
  // transform: translateY(-50%);
  // width: 0;
  // height: 0;
  font-family: Poppins;
  font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.28px;
  border: 1px solid var(--border_theme);
  color: var(-theme_color);

  &:hover,
  &:focus,
  &:active {
    color: var(--theme_active);
  }
`;

// export const ThemeMenu = styled.ul`
//   position: absolute;
//   top: 100%;
//   left: 0;
//   width: 100%;
//   background: var(--theme_bgc);
//   box-shadow: 0px 4px 16px 0px var(--theme_shadow);
//   border-radius: 8px;
//   padding: 8px 0;
//   margin-top: 4px;
//   list-style: none;
//   z-index: 99;
// `;

// export const ThemeMenuItem = styled.li`
//   font-family: Poppins;
//   color: var(--border_theme);
//   font-size: 14px;
//   letter-spacing: -0.28px;
//   padding: 8px;
//   cursor: pointer;

//   &:hover {
//     background-color: var(--border_theme);
//     color: var(--theme_bgc);
//   }
// `;
