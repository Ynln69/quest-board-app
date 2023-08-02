import styled from '@emotion/styled';

export const MainButton = styled.button`
  width: 100%;

  border-radius: 8px;
  border: none;

  padding: 10px 11px 11px 11px;

  background: #bedbb0;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: #9dc888;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
