import styled from '@emotion/styled';

export const ContainerDashboard = styled.section`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 14px 20px;
  background: var(--board_bgc);
  @media screen and (min-width: 375px) {
    width: 375px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 26px 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 1180px;
    padding: 10px 24px;
  }
`;
