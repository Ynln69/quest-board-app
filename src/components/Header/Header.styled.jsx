import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
   color: #ffffff;
  height: 68px;
  padding-left: 32px;
  padding-right: 24px;

  &.theme-light {
    /* Light theme styles */
    background-color: #fff;
    color: #1f1f1f;
  }

  &.theme-dark {
    /* Dark theme styles */
    background-color: #1f1f1f;
    color: #ffffff;
  }

  &.theme-violet {
    /* Violet theme styles */
    background-color: #6a1b9a;
    color: #fff;
  }
`;

export const HeaderNav = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuIcon = styled.svg`
  width: 32px;
  height: 32px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const SelectIcon = styled.svg`
  width: 16px;
  height: 16px;
  margin-left: 4px;
`;