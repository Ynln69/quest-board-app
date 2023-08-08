import styled from '@emotion/styled';

export const Button = styled.button`
  width: 335px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: none;
  padding: 14px 78px;
  cursor: pointer;

  color: var(--text_btn);
  background: var(--normal_btn);
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 14px;
  line-height: normal;
  letter-spacing: -0.28px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background: var(--active_btn);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const BoxAddSvg = styled.span`
  display: inline-block;
  width: 28px;
  height: 28px;
  padding: 7px;
  border-radius: 6px;
  background-color: var(--plus_bgc);
  margin-right: 7px;
`;

export const SvgAdd = styled.svg`
  width: 14px;
  height: 14px;
  stroke: var(--plus_color);
`;
