import { useState, useEffect, forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteBoard, getBoards } from 'redux/boards/boardOperations';
import { selectBoards } from 'redux/boards/boardsSelectors';
import { logOut } from 'redux/auth/operations';

import NeedHelpModal from 'components/NeedHelp/NeedHelpModal';
import Modal from 'components/Modal/Modal';
import ModalBoard from 'components/ModalBoard';

import {
  SidebarBlock,
  ButtonAdd,
  SvgLightning,
  Title,
  NavLogo,
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
  ProjectIcon,
  BoardTitle,
  Nav,
  Section,
  MainBoard,
  ButtonIcon,
  TitleHidden,
  NavTeam,
} from './Sidebar.styled';

import sprite from '../../images/sprite.svg';
import flower from '../../images/need-help-img.png';

const actionsList = { add: 'add', edit: 'edit' };

export const Sidebar = forwardRef(({ theme, isOpen }, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(actionsList.add);
  const [boardData, setBoardData] = useState(null);
  const [isShowHelp, setIsShowHelp] = useState(false);
  const boards = useSelector(selectBoards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBoards());
  }, [dispatch]);

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

  const toogleHelpModal = () => {
    setIsShowHelp(!isShowHelp);
  };

  const handleDelete = id => {
    dispatch(deleteBoard(id));
  };

  return (
    <SidebarBlock className={`theme-${theme} ${isOpen ? 'open' : 'closed'}`}>
      <TitleHidden>Task boards page</TitleHidden>
      <NavLogo to="/">
        <SvgLightning>
          <use href={`${sprite}#icon-logo`} />
        </SvgLightning>
        <Title>Task Pro</Title>
      </NavLogo>
      <Section>
        <MyBoardTitle>My boards</MyBoardTitle>

        <BoardTitleBlock>
          <p>Create a new board</p>
          <ButtonAdd
            aria-label="add"
            type="button"
            onClick={handleModalType}
            ref={ref}
          >
            <svg width={20} height={20}>
              <use href={`${sprite}#icon-plus`} />
            </svg>
          </ButtonAdd>
        </BoardTitleBlock>

        <MainBoard>
          <ul>
            {boards.map(board => (
              <BoardList key={board._id}>
                <Nav to={`/home/${board.title}`}>
                  <TitleBoard>
                    <ProjectIcon width={18} height={18}>
                      <use href={`${sprite}#${board.icon}`} />
                    </ProjectIcon>
                    <BoardTitle>{board.title}</BoardTitle>
                  </TitleBoard>

                  <BoardIcons>
                    <ButtonIcon
                      type="button"
                      aria-label="edit"
                      data-board-id={board._id}
                      onClick={handleModalType}
                    >
                      <EditIcon>
                        <use href={`${sprite}#icon-pencil`} />
                      </EditIcon>
                    </ButtonIcon>
                    <ButtonIcon
                      type="button"
                      onClick={() => handleDelete(board._id)}
                    >
                      <EditIcon>
                        <use href={`${sprite}#icon-trash`} />
                      </EditIcon>
                    </ButtonIcon>
                  </BoardIcons>
                </Nav>
              </BoardList>
            ))}
          </ul>
        </MainBoard>
      </Section>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          handleClose={toggleModal}
          heading={modalType === actionsList.add ? 'New board' : 'Edit board'}
          modalType={'modalBoard'}
        >
          <ModalBoard
            btnContent={modalType === actionsList.add ? 'Create' : 'Edit'}
            closeModal={toggleModal}
            boardData={boardData}
          />
        </Modal>
      )}
      <NeedHelpBlock>
        <Flower src={flower} alt="flower" width={54} height={78} />
        <HelpContent>
          If you need help with <span>TaskPro</span>, check out our support
          resources or reach out to our customer support team.
        </HelpContent>
        <NeedHelpButton type="button" name="help" onClick={toogleHelpModal}>
          <SvgHelp>
            <use href={`${sprite}#icon-help`} />
          </SvgHelp>
          Need help?
        </NeedHelpButton>
        {isShowHelp && <NeedHelpModal closeModal={toogleHelpModal} />}
      </NeedHelpBlock>

      <LogoutBtn type="button" name="logout" onClick={() => dispatch(logOut())}>
        <svg width={32} height={32}>
          <use xlinkHref={`${sprite}#icon-login`}></use>
        </svg>
        Log out
      </LogoutBtn>
      <NavTeam to="/home/team">WEB RENGERS</NavTeam>
    </SidebarBlock>
  );
});
