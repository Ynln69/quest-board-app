import styled from '@emotion/styled';

export const ThemeContainer = styled.div`
  position: fixed;
`;

export const ThemeList = styled.ul`
position: absolute;
top: 28px;
  left: 5px;
    width: 100px;
    height: 107px;
    display: flex;
  flex-direction: column;
    padding: 18px 44px 18px 18px;
    gap: 4px;
  background: var(--theme_bgc);
  box-shadow: 0px 4px 16px 0px var(--theme_shadow);
  border-radius: 8px;
  border: 1px solid var(--theme_border);
  cursor: pointer;
  z-index: 99;
   }
`;

export const ThemeItem = styled.li`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  color: var(--theme_color);
  cursor: pointer;
  &:hover {
    color: var(--theme_active);
  }
`;
