import styled from '@emotion/styled';

export const HomeContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: left;
  width: 100%;
  color: var(--board_bgc);
`;

export const Container = styled.div`
  flex-grow: 1;
`;
export const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const TitlePage = styled.p`
  width: 486px;

  color: var(--board_second_color);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.28px;
  text-align: center;
`;

export const LinkToCreate = styled.button`
  font-family: 'Poppins';
  border: none;
  background-color: transparent;
  color: var(--span_color);
`;
