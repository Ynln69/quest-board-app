import styled from '@emotion/styled';

export const HomeContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: left;
  width: 100%;
  height: 100vh;
  color: var(--board_bgc);
`;

export const Container = styled.div`
  flex-grow: 1;
`;
export const HomeSection = styled.section`
  width: 100%;
  height: 90%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 375px) {
    width: 375px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1440px) {
    width: 1180px;
  }
`;

export const TitlePage = styled.p`
  width: 335px;

  color: var(--board_second_color);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.28px;
  text-align: center;
  @media screen and (min-width: 768px) {
    width: 486px;
  }
`;

export const LinkToCreate = styled.button`
  font-family: 'Poppins';
  border: none;
  background-color: transparent;
  color: var(--span_color);
`;
