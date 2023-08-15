import { Suspense, useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import { Sidebar } from 'components/Sidebar/Sidebar';
import {
  HomeContainer,
  Container,
  HomeSection,
  TitlePage,
  LinkToCreate,
} from './HomePage.styled';
import { selectBoards } from 'redux/boards/boardsSelectors';

const HomePage = () => {
  const buttonAddRef = useRef();
  const boards = useSelector(selectBoards);
  const { theme } = useSelector(selectUser);

  document.body.classList.add(theme);
  useEffect(() => {
    document.body.classList.add(theme);
    setTimeout(() => {
      document.body.classList.add(theme);
    }, 100);
  }, [theme]);

  const handleModalBoardCreateClick = () => {
    const clickEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    buttonAddRef.current.dispatchEvent(clickEvent);
  };

  return (
    <HomeContainer>
      <Sidebar ref={buttonAddRef} />
      <Container>
        <Header />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        {boards.length === 0 && (
          <HomeSection>
            <TitlePage>
              Before starting your project, it is essential{' '}
              <LinkToCreate type="button" onClick={handleModalBoardCreateClick}>
                to create a board
              </LinkToCreate>{' '}
              to visualize and track all the necessary tasks and milestones.
              This board serves as a powerful tool to organize the workflow and
              ensure effective collaboration among team members.
            </TitlePage>
          </HomeSection>
        )}
      </Container>
    </HomeContainer>
  );
};

export default HomePage;
