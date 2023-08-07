import styled from '@emotion/styled';

export const Container = styled.ul`
  display: flex;
  gap: 18px;

  position: relative;
`;

export const SvgAdd = styled.svg`
  width: 14px;
  height: 14px;
  stroke: #ffffff;
  cursor: pointer;
`;
export const BoxSvg = styled.span`
  display: inline-block;
  width: 28px;
  height: 28px;
  padding: 7px;
  border-radius: 6px;
  background: #161616;
  margin-right: 7px;
`;

export const Button = styled.button`
  min-width: 334px;
  min-height: 56px;
  display: block;
  margin-left: auto;
  margin-right: auto;

  border-radius: 8px;
  border: none;

  padding: 14px 78px;

  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  font-family: inherit;
  color: #161616;
  background: #ffffff;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background: #9dc888;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
