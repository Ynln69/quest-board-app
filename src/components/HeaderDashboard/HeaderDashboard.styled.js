import styled from '@emotion/styled';

export const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const HeadText = styled.p`
  color: var(--board_main_color);
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 18px;
  line-height: normal;
  letter-spacing: -0.36px;
`;

export const FilterBtnWrapper = styled.div`
display: flex;
gap: 8px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  
  padding: 0%;
  border: none;

  color: var(--board_main_color);
  background-color: transparent;
`;

export const FilterSvg = styled.svg`
  stroke: var(--chevron-down);
  fill: transparent;

`
