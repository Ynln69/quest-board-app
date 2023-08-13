import { Suspense, useEffect } from 'react';
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

const HomePage = () => {
  const { theme } = useSelector(selectUser);

  useEffect(
    () => {
      document.body.classList.add(theme);
    },
    // eslint-disable-next-line
    []
  );

  return (
    <HomeContainer>
      <Sidebar />
      <Container>
        <Header />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <HomeSection>
          <TitlePage>
            Before starting your project, it is essential{' '}
            <LinkToCreate>to create a board</LinkToCreate> to visualize and
            track all the necessary tasks and milestones. This board serves as a
            powerful tool to organize the workflow and ensure effective
            collaboration among team members.
          </TitlePage>
        </HomeSection>
      </Container>
    </HomeContainer>
  );
};

export default HomePage;
