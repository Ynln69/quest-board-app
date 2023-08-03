import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  max-width: 100%;
  color: #ffffff;
  height: 68px;
  padding: 14px 20px;

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

  @media (max-width: 1440px) {
    padding: 18px 32px;
  }
  @media (max-width: 768px) {
    padding: 18px 24px;
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

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const SelectIcon = styled.svg`
  width: 16px;
  height: 16px;
  margin-left: 4px;
`;
