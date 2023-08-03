import {
  SvgAdd,
  SvgLightning,
  Title,
  TitleBlock,
  SidebarBlock,
  BoardTitleBlock,
  MyBoardTitle,
  NeedHelpBlock,
  NeedHelpButton,
  SvgHelp,
  HelpContent,
  LogoutBtn,
  Flower,
} from './Sidebar.styled';
import sprite from '../../images/sprite.svg';
import flower from '../../images/flower.png';

export function Sidebar() {
  return (
    <SidebarBlock>
      <TitleBlock>
        <SvgLightning>
          <use href={`${sprite}#icon-lightning`} />
        </SvgLightning>
        <Title>Task Pro</Title>
      </TitleBlock>

      <MyBoardTitle>My boards</MyBoardTitle>
      <BoardTitleBlock>
        <createBoardTitle>
          <p>Create a new board</p>
        </createBoardTitle>

        <SvgAdd>
          <use href={`${sprite}#icon-plus`} />
        </SvgAdd>
      </BoardTitleBlock>

      <NeedHelpBlock>
        <Flower src={flower} alt="flower" />

        <HelpContent>
          If you need help with TaskPro, check out our support resources or
          reach out to our customer support team.
        </HelpContent>

        <NeedHelpButton type="button" name="help">
          <SvgHelp>
            <use href={`${sprite}#icon-help`} />
          </SvgHelp>
          Need help?
        </NeedHelpButton>
      </NeedHelpBlock>

      <LogoutBtn type="button" name="logout">
        Log out
      </LogoutBtn>
    </SidebarBlock>
  );
}
