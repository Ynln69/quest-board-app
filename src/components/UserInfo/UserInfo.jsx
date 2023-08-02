import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Avatar } from './UserInfo.styled';
import EditProfile from 'components/EditProfile/EditProfile';

const UserInfo = () => {
  const { photo, name } = useSelector(state => state.profile);
  const [isModalOpen, setModalOpen] = React.useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Container>
      <div>{name}</div>
      <Avatar src={photo} alt="User Avatar" onClick={openModal} />
      {isModalOpen && <EditProfile onClose={closeModal} />}
    </Container>
  );
};

export default UserInfo;