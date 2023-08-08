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
        />
      ) : (
        <UserIcon
          className={`icon-user theme-${theme}`}
          onClick={openEditProfileModal}
        >
          <use href={`${Sprite}#icon-user`} />
        </UserIcon>
      )}
      {isEditProfileModalOpen && <EditProfileModal onClose={closeEditProfileModal} />}
         </Container>
  );
};

export default UserInfo;






// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Container, Avatar,  UserIcon  } from './UserInfo.styled';
// import EditProfile from 'components/EditProfile/EditProfile';
// import Sprite from '../../images/sprite.svg';

// const setAvatarIcon = (activeUserTheme) => {
//   switch (activeUserTheme) {
//        case 'light':
//       return '#icon-userlight';
//       case 'dark':
//       return '#icon-userdark';
//     case 'violet':
//       return '#icon-userviolet';
//     default:
//       return '#icon-userlight';
//   }
// };

// const UserInfo = ({theme}) => {
//   const { avatarURL, username } = useSelector(state => state.profile);
//   const [isModalOpen, setModalOpen] = React.useState(false);

//   const openModal = () => {
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   const avatarIcon = setAvatarIcon(theme);

//   return (
//     <Container>
//       <div>{username}</div>
//       {avatarURL ? (
//         <Avatar src={avatarURL} alt="User Avatar" onClick={openModal} />
//       ) : (
//         <UserIcon onClick={openModal}>
//         <svg className={`icon-user`} width="32" height="32">
//           <use href={Sprite + avatarIcon} />
//         </svg>
//       </UserIcon>
//       )}
//       {isModalOpen && <EditProfile onClose={closeModal} />}
//     </Container>
//   );
// };

// export default UserInfo;
