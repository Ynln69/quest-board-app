import styled from '@emotion/styled';

export const SidebarBlock = styled.aside`
  display: flex;
  flex-direction: column;
  width: 260px;
  min-height: 100vh;
  padding: 24px;

  background-color: var(--nav_bgc);
  color: var(--nav_main_color);
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
export const SvgLightning = styled.svg`
  width: 32px;
  height: 32px;
  margin-right: 8px;
  border-radius: 6px;
`;
export const Title = styled.h3`
  color: var(--nav_main_color);
  text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-family: Poppins;
  font-weight: 600;
  letter-spacing: -0.64px;
`;
export const MyBoardTitle = styled.p`
  margin-bottom: 8px;

  color: var(--nav_second_color);
  font-family: Poppins;
  font-size: 12px;
  letter-spacing: -0.24px;
`;
export const BoardTitleBlock = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  margin-bottom: 40px;
  padding: 14px 0;
  border-top: 1px solid var(--line_color);
  border-bottom: 1px solid var(--line_color);

  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.28px;
`;
export const ButtonAdd = styled.button`
  width: 40px;
  height: 36px;
  display: flex;
  align-items: center;
  padding: 10px 8px;
  border-radius: 6px;
  border: none;

  background-color: var(--create_normal);
  &:hover {
    background-color: var(--create_active);
  }
  > svg {
    stroke: var(--create_plus_color);
  }
`;
export const BoardList = styled.li`
  display: flex;
  align-items: center;
  font-weight: 500;
  letter-spacing: -0.28px;
`;
export const TitleBoard = styled.div`
  display: flex;
`;
export const BoardIcons = styled.div`
  display: flex;
  margin-left: auto;
`;
export const EditIcon = styled.svg`
  width: 16px;
  height: 16px;
  margin-right: 8px;

  stroke: var(--nav_second_color)
  &:last-child {
    margin-right: 0;
  }
`;

export const NeedHelpBlock = styled.div`
  border-radius: 8px;
  margin-bottom: 24px;
  padding: 20px;
  margin-top: auto;

  background-color: var(--need_bgc);
  color: var(--nav_main_color);

  @media (max-width: 768px) {
    display: none;
  }
`;

export const HelpContent = styled.p`
  line-height: 20px;
  letter-spacing: -0.28px;
  color: var(--nav_main_color);
  > span {
    color: var(--span_color);
  }
`;
export const NeedHelpButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  margin-top: 20px;
  padding: 0;

  color: var(--nav_main_color);
`;
export const SvgHelp = styled.svg`
  stroke: var(--nav_main_color);
  fill: rgba(0, 0, 0, 0);
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;
export const LogoutBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 14px;
  border: none;

  color: var(--nav_main_color)
  font-family: Poppins;
  font-weight: 500;
  font-size: 16px;
  background-color: transparent;
  padding: 0;
  > svg {
    stroke: var(--logout_fill);
    &:hover {
      stroke: var(--logout_fill_active);
    }
  }
`;

export const Flower = styled.img`
  margin-bottom: 14px;
  display: block;
`;
