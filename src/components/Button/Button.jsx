import styled from '@emotion/styled';

export const MainButton = styled.button`
  width: 100%;

  border-radius: 8px;
  border: none;

  padding: 14px;

  background: var(--normal_btn);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: var(--active_btn);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
