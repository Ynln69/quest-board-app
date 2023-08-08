import {
  SidebarBlock,
  ButtonAdd,
  SvgLightning,
  Title,
  TitleBlock,
  BoardTitleBlock,
  MyBoardTitle,
  NeedHelpBlock,
  NeedHelpButton,
  SvgHelp,
  HelpContent,
  LogoutBtn,
  Flower,
  BoardList,
  EditIcon,
  BoardIcons,
  TitleBoard,
} from './Sidebar.styled';
import sprite from '../../images/sprite.svg';
import flower from '../../images/flower.png';
import { useState, useEffect } from 'react';
import { logOut } from 'redux/auth/operations';
import NeedHelpModal from 'components/NeedHelp/NeedHelpModal';
import { deleteBoard } from 'redux/boards/boardOperations';
import { selectBoards } from 'redux/boards/boardsSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { getBoards } from 'redux/boards/boardOperations';
import Modal from 'components/Modal/Modal';
import ModalBoard from 'components/ModalBoard';

const actionsList = { add: 'add', edit: 'edit' };

export function Sidebar({ theme, isOpen }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(actionsList.add);
  const [boardData, setBoardData] = useState(null);
  const [isShow, setIsShow] = useState(false);
  const boards = useSelector(selectBoards);
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(getBoards());
    },
    [dispatch],
    boards
  );

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleModalType = e => {
    const buttonAction = e.currentTarget.ariaLabel;
    const editButtonId = e.currentTarget.getAttribute('data-board-id') || '';
    if (buttonAction === actionsList.add) {
      setModalType(actionsList.add);
      toggleModal();
    } else {
      setModalType(actionsList.edit);
      setBoardData(boards.filter(board => board._id === editButtonId)[0]);
      toggleModal();
    }
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
        <ButtonAdd aria-label="add" type="button" onClick={handleModalType}>
          <svg width={20} height={20}>
            <use href={`${sprite}#icon-plus`} />
          </svg>
        </ButtonAdd>
      </BoardTitleBlock>
      <ul>
        {boards.map(board => (
          <BoardList key={board._id}>
            <TitleBoard>
              <svg width={18} height={18}>
                <use href={`${sprite}#${board.icon}`} />
              </svg>
              {board.title}
            </TitleBoard>
            <BoardIcons>
              <button
                type="button"
                aria-label="edit"
                data-board-id={board._id}
                onClick={handleModalType}
              >
                <EditIcon>
                  <use href={`${sprite}#icon-pencil`} />
                </EditIcon>
              </button>
              <EditIcon onClick={() => dispatch(deleteBoard(board._id))}>
                <use href={`${sprite}#icon-trash`} />
              </EditIcon>
            </BoardIcons>
          </BoardList>
        ))}
      </ul>
      {isModalOpen && (
        <Modal
          isOpen={toggleModal}
          handleClose={toggleModal}
          heading={modalType === actionsList.add ? 'New board' : 'Edit board'}
        >
          <ModalBoard
            btnContent={modalType === actionsList.add ? 'Create' : 'Edit'}
            closeModal={toggleModal}
            boardData={boardData}
          />
        </Modal>
      )}
      <NeedHelpBlock>
        <Flower src={flower} alt="flower" />
        <HelpContent>
          If you need help with <span>TaskPro</span>, check out our support
          resources or reach out to our customer support team.
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
        <svg width={32} height={32}>
          <use xlinkHref={`${sprite}#icon-login`}></use>
        </svg>
        Log out
      </LogoutBtn>
    </SidebarBlock>
  );
}
