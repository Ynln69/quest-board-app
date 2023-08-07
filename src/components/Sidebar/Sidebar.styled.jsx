import styled from '@emotion/styled';

export const SidebarBlock = styled.aside`
  display: flex;
  flex-direction: column;
  width: 260px;
  min-height: 100vh;
  padding: 24px;
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

  @media (max-width: 1439px) {
    display: none;
  }
  &.open {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
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
  text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-weight: 600;
  letter-spacing: -0.64px;
`;

export const BoardTitleBlock = styled.div`
  border-top: 1px solid #1f1f1f;
  border-bottom: 1px solid #1f1f1f;
  padding: 14px 0;
  font-weight: 500;
  letter-spacing: -0.28px;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

export const SvgAdd = styled.svg`
  width: 40px;
  height: 36px;
  border-radius: 6px;
  background: #bedbb0;
  stroke: #121212;
  cursor: pointer;
  margin-left: auto;
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
  margin-top: auto;
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
  border: none;
  padding: 0;
`;

export const Flower = styled.img`
  margin-bottom: 14px;
  display: block;
`;
export const BoardIcon = styled.svg`
width: 18px;
height: 18px;
`

export const BoardList = styled.li`
display: flex;
align-items: center;
font-weight: 500;
letter-spacing: -0.28px;
`

export const EditIcon = styled.svg`
width: 16px;
height: 16px;
margin-right: 8px;
&:last-child{
  margin-right: 0;
}
&.theme-violet{
  fill: var(  --add_btn_bgc)
}
&.theme-dark {
  fill: #FFFFFF;
}
`

export const TItleBoard = styled.div`
display: flex;
`

export const BoardIcons = styled.div`
display: flex;
margin-left: auto;
`