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
  BoardIcon,
  BoardList,
  EditIcon,
  BoardIcons,
  TItleBoard,
} from './Sidebar.styled';
import sprite from '../../images/sprite.svg';
import flower from '../../images/flower.png';
import { useState, useEffect } from 'react';
import { logOut } from 'redux/auth/operations';
import NeedHelpModal from 'components/NeedHelp/NeedHelpModal';
import AddBoard from './AddBoard/AddBoard';
import EditBoard from './EditBoard/EditBoard';
import { deleteBoard } from 'redux/boards/boardOperations';
import { selectBoards } from 'redux/boards/boardsSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { getBoards } from 'redux/boards/boardOperations';

export function Sidebar({ theme, isOpen }) {
  const [isShow, setIsShow] = useState(false);
  const [editBoard, setEditBoard] = useState(false);
  const [openBoard, setOpenBoard] = useState(false);
  const selectBoard = useSelector(selectBoards);
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(getBoards());
    },
    [dispatch],
    selectBoard
  );

  const showEditBoardModal = () => {
    setEditBoard(true);
  };
  const closeEditBoardModal = () => {
    setEditBoard(false);
  };

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
      {selectBoard.map(board => (
        <ul>
          <li>
            <BoardList>
              <TItleBoard>
                <BoardIcon>
                  <use href={`${sprite}#${board.icon}`} />
                </BoardIcon>

                {board.title}
              </TItleBoard>
              <BoardIcons>
                <EditIcon>
                  <use
                    href={`${sprite}#icon-pencil`}
                    onClick={showEditBoardModal}
                  />
                </EditIcon>
                <EditIcon onClick={() => dispatch(deleteBoard(board._id))}>
                  <use href={`${sprite}#icon-trash`} />
                </EditIcon>
              </BoardIcons>
            </BoardList>
          </li>
          {editBoard && <EditBoard closeBoardModal={closeEditBoardModal} />}
        </ul>
      ))}

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

      <LogoutBtn type="button" name="logout" onClick={() => dispatch(logOut())}>
        Log out
      </LogoutBtn>
    </SidebarBlock>
  );
}
