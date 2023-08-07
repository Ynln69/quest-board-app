import { useState } from 'react';

import { HeaderDashboard } from 'components/HeaderDashboard/HeaderDashboard';
import { MainDashboard } from 'components/MainDashboard/MainDashboard';
import { initialUserModel } from 'schemas/initialUserModal';
import { ContainerDashboard } from './Dashboard.styled';

export const Dashboard = () => {
  // в cardData я поместил именно обект boardsData отдельной boards
  const [cardData, setCardData] = useState(
    initialUserModel.boards[0].boardsData
  );

  return (
    <ContainerDashboard>
      <HeaderDashboard />
      <MainDashboard cardData={cardData} setCardData={setCardData} />
    </ContainerDashboard>
  );
};
