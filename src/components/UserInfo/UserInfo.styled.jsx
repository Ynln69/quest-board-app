import styled from '@emotion/styled';

export const Container = styled.div`
display: flex;
align-items: center;
gap: 8px;
margin-left: 14px;
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
    `;

   export const UserIcon = styled.svg`
  width: 32px;
  height: 32px;
  cursor: pointer;
  
  &.theme-light {
    background-color: #F6F6F7;
    fill: #FFFFFF;
     }

  &.theme-dark {
    background-color: #161616;
    fill: #FFFFFF;
  }

  &.theme-violet {
    background-color: #ECEDFD;
    fill: #FFFFFF;
  }
   `;