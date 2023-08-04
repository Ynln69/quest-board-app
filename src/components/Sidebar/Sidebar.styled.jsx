import styled from 'styled-components';

export const SidebarBlock = styled.aside`
  width: 260px;
  min-height: 100vh;
  padding: 24px;
  // background-color: #121212

  &.theme-light {
    background-color: #ffffff;
    color: #161616;
  }

  &.theme-dark {
    background-color: #121212;
    color: #ffffff;
  }

  &.theme-violet {
    background-color: #5255bc;
  }

  @media (min-width: 1400px) {
    display: none;
  }
`;

export const TitleBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 60px;
`;

export const MyBoardTitle = styled.p`
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 8px;
  font-size: 12px;
  letter-spacing: -0.24px;
`;

export const HelpContent = styled.p`
  // color: #FFF;
  line-height: 20px;
  letter-spacing: -0.28px;

  &.theme-light {
    color: #161616;
  }

  &.theme-dark {
    color: #ffffff;
  }

  &.theme-violet {
    color: #ffffff;
  }
`;

export const Title = styled.h3`
  color: #ffffff;
  text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-weight: 600;
  letter-spacing: -0.64px;
`;

export const BoardTitleBlock = styled.div`
  border-top: 1px solid #1f1f1f;
  border-bottom: 1px solid #1f1f1f;
  padding: 14px 0;
  color: #ffffff;
  font-weight: 500;
  letter-spacing: -0.28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

export const SvgAdd = styled.svg`
  width: 40px;
  height: 36px;
  border-radius: 6px;
  background: #bedbb0;
  stroke: #121212;
`;

export const SvgLightning = styled.svg`
  width: 32px;
  height: 32px;
  margin-right: 8px;
  border-radius: 6px;
  fill: #ffffff;
  background: #1f1f1f;
`;

export const SvgHelp = styled.svg`
  stroke: #ffffff;
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

export const NeedHelpBlock = styled.div`
  // background-color: #1F1F1F;
  border-radius: 8px;
  margin-bottom: 24px;
  padding: 20px;

  &.theme-light {
    background-color: #f6f6f7;
    color: #161616;
  }

  &.theme-dark {
    background-color: #1f1f1f;
    color: #ffffff;
  }

  &.theme-violet {
    background-color: rgba(236, 237, 253, 0.4);
    color: #ffffff;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NeedHelpButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  color: #fff;
  border: none;
  margin-top: 20px;
  padding: 0;
`;

export const LogoutBtn = styled.button`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  background-color: transparent;
  color: #fff;
  border: none;
  padding: 0;
`;

export const Flower = styled.img`
  margin-bottom: 14px;
  display: block;
`;
