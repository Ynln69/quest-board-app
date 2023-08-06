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
import { useEffect, useState } from 'react';
import NeedHelpModal from 'components/NeedHelp/NeedHelpModal';
import AddBoard from './AddBoard/AddBoard';
import { useDispatch } from 'react-redux';
import { getBoards } from 'redux/boards/boardOperations';

export function Sidebar({ theme, isOpen }) {
  const [isShow, setIsShow] = useState(false);
  const [openBoard, setOpenBoard] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBoards());
  }, [dispatch]);

  const showBoardModal = () => {
    setOpenBoard(true);
  };
  const closeBoardModal = () => {
    setOpenBoard(false);
  };

  const showModal = () => {
    setIsShow(true);
  };

  const closeModal = () => {
    setIsShow(false);
  };

  return (
    <SidebarBlock className={`theme-${theme} ${isOpen ? 'open' : 'closed'}`}>
      <TitleBlock>
        <SvgLightning>
          <use href={`${sprite}#icon-logo`} />
        </SvgLightning>
        <Title>Task Pro</Title>
      </TitleBlock>

      <MyBoardTitle>My boards</MyBoardTitle>
      <BoardTitleBlock>
        <p>Create a new board</p>

        <SvgAdd onClick={showBoardModal}>
          <use href={`${sprite}#icon-plus`} />
        </SvgAdd>
        {openBoard && <AddBoard closeBoardModal={closeBoardModal} />}
      </BoardTitleBlock>

      <NeedHelpBlock className={`theme-${theme}`}>
        <Flower src={flower} alt="flower" />

        <HelpContent>
          If you need help with TaskPro, check out our support resources or
          reach out to our customer support team.
        </HelpContent>

        <NeedHelpButton type="button" name="help" onClick={showModal}>
          <SvgHelp>
            <use href={`${sprite}#icon-help`} />
          </SvgHelp>
          Need help?
        </NeedHelpButton>

        {isShow && <NeedHelpModal closeModal={closeModal} />}
      </NeedHelpBlock>

      <LogoutBtn type="button" name="logout">
        Log out
      </LogoutBtn>
    </SidebarBlock>
  );
}
