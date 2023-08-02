import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #161616;
  color: #ffffff;
  height: 68px;
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