import styled from '@emotion/styled';

export const MainContainer = styled.div`
  display: flex;
  padding-bottom: 52px;
  gap: 34px;

  overflow-x: auto;
  &::-webkit-scrollbar {
    border-radius: 12px;
    height: 12px;
    background: var(--scroll);
  }

  &::-webkit-scrollbar-thumb {
    height: 12px;
    background-color: var(--scroll-wrapp);
    border-radius: 12px;
  }
`;

export const Container = styled.ul`
  display: flex;
  gap: 34px;
  position: relative;
`;

export const Button = styled.button`
  min-width: 334px;
  max-height: 56px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: none;
  padding: 14px 78px;
  cursor: pointer;

  color: var(--add_text_color);
  background: var(--add_btn_bgc);
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 14px;
  line-height: normal;
  letter-spacing: -0.28px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background: var(--create_active);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
export const BoxSvg = styled.span`
  display: inline-block;
  width: 28px;
  height: 28px;
  padding: 7px;
  border-radius: 6px;
  background-color: var(--add_plus_bgc);
  margin-right: 7px;
`;
export const SvgAdd = styled.svg`
  width: 14px;
  height: 14px;
  stroke: var(--add_plus_color);
`;
