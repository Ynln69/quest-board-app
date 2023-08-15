import styled from '@emotion/styled';

export const PageHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  max-width: 100%;
  height: 68px;
  padding: 14px 20px;
  background-color: var(--header_bgc);
  color: var(--header_theme_text);

  @media (max-width: 1440px) {
    padding: 18px 32px;
  }
  @media (max-width: 768px) {
    padding: 18px 24px;
  }
`;

export const MenuBtn = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
`;

export const MenuIcon = styled.svg`
  width: 24px;
  height: 24px;
 stroke: var(--header_user_text);

  @media screen and (min-width: 375px) {
    width: 32px;
    height: 32px;
  }

  @media (min-width: 1440px) {
    display: none;
  }
`;

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  position: relative;
 `;

export const HeaderNav = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 80px;
  cursor: pointer;
`;

export const SelectIcon = styled.svg`
  width: 16px;
  height: 16px;
  align-items: baseline;
  stroke: var(--chevron-down);
  fill: none;
 `;

export const Text = styled.div`
  color: var(--header_theme_text);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`;
