import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Avatar, UserIcon } from './UserInfo.styled';
import EditProfileModal from 'components/EditProfile/EditProfileModal';
import Sprite from '../../images/sprite.svg';
import { selectUser } from 'redux/auth/selectors';

const UserInfo = ({ theme }) => {
  const { username, avatarURL } = useSelector(selectUser);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);

  const openEditProfileModal = () => {
    setIsEditProfileModalOpen(true);
  };

  const closeEditProfileModal = () => {
    setIsEditProfileModalOpen(false);
  };

  return (
    <Container>
      <div>{username}</div>
      {avatarURL ? (
        <Avatar
          src={avatarURL}
          alt="User Avatar"
          onClick={openEditProfileModal}
          width="32"
          height="32"
        />
      ) : (
        <UserIcon
          className={`icon-user theme-${theme}`}
          onClick={openEditProfileModal}
          width="32"
          height="32"
        >
          <use href={`${Sprite}#icon-user`} />
        </UserIcon>
      )}
      {isEditProfileModalOpen && (
        <EditProfileModal onClose={closeEditProfileModal} />
      )}
    </Container>
  );
};

export default UserInfo;
