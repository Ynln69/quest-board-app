import styled from '@emotion/styled';

export const MainButton = styled.button`
  width: 100%;

  border-radius: 8px;
  border: none;

  padding: 14px;

  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;

  background: #bedbb0;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: #9dc888;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
