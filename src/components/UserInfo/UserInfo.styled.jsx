import styled from '@emotion/styled';

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 8px;
color: var(--header_user_text);
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
    `;

   export const UserIcon = styled.svg`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  cursor: pointer;
  stroke: transparent;
     `;