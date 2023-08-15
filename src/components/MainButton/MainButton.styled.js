import styled from '@emotion/styled';
import { css } from '@emotion/react';

const dynamicPadding = ({ showPlus }) =>
  showPlus
    ? css`
        padding: 10px;
      `
    : css`
        padding: 14px;
      `;

export const StyledButton = styled.button`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  ${dynamicPadding};

  border-radius: 8px;
  border: none;

  cursor: pointer;

  color: var(--text_btn);
  background: var(--normal_btn);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  font-display: block;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;

  &:hover {
    background: var(--active_btn);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const SvgWrapper = styled.div`
  width: 28px;
  height: 28px;
  padding: 7px;
  border-radius: 6px;
  background-color: var(--plus_bgc);
  margin-right: 8px;
`;

export const SvgAdd = styled.svg`
  display: block;
  width: 14px;
  height: 14px;
  stroke: var(--plus_color);
`;
