import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Avatar,  UserIcon  } from './UserInfo.styled';
import EditProfile from 'components/EditProfile/EditProfile';
import Sprite from '../../images/sprite.svg';

const UserInfo = ({theme}) => {
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
      {photo ? (
        <Avatar src={photo} alt="User Avatar" onClick={openModal} />
      ) : (
        <UserIcon className={`icon-user theme-${theme}`}>
          <use href={`${Sprite}#icon-user`} />
        </UserIcon>
      )}
      {isModalOpen && <EditProfile onClose={closeModal} />}
    </Container>
  );
};

export default UserInfo;