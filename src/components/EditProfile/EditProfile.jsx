import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import {
  EditProfileModal,
  FormBox,
  AvatarImage,
  FieldUser,
  NoneInput,
  PlusBtn,
  IconPlus,
  IconUserWrapper,
  SaveBtn,
  Container,
} from './EditProfile.styled';
import { updateUser, updateUserAvatar } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import Sprite from '../../images/sprite.svg';

const EditProfile = ({ onClose }) => {
  const { username, email, password, avatarURL } = useSelector(selectUser);

  const [avatarNewURL, setAvatarNewURL] = useState(avatarURL);

  const dispatch = useDispatch();

  const handleFormSubmit = async values => {
    console.log(values);

    dispatch(
      updateUser({
        username: values.newName,
        email: values.newEmail,
        password: values.newPassword,
      })
    );

    if (avatarNewURL !== values.newPhoto) {
      dispatch(updateUserAvatar(avatarNewURL));
    }
    onClose();
  };

  const handleAvatarClick = e => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      const formData = new FormData();
      formData.append('avatar', selectedFile);
      setAvatarNewURL(formData);
    }
  };

  return (
    <Container>
      <EditProfileModal>
        <p>Edit profile</p>
        <Formik
          initialValues={{
            newPhoto: avatarNewURL,
            newName: username,
            newEmail: email,
            newPassword: password,
          }}
          onSubmit={handleFormSubmit}
        >
          {({ isSubmitting, values, setFieldValue }) => (
            <FormBox>
              <IconUserWrapper>
                {values.newPhoto ? (
                  <AvatarImage
                    type="file"
                    name="newPhoto"
                    alt="Avatar"
                    src={values.newPhoto}
                  />
                ) : (
                  <svg className="icon-user" width="68" height="68">
                    <use href={`${Sprite}#icon-user`} />
                  </svg>
                )}
                <PlusBtn
                  onClick={() =>
                    document.getElementById('newPhotoInput').click()
                  }
                >
                  <IconPlus>
                    <use href={`${Sprite}#icon-plus-us`} />
                  </IconPlus>
                  <NoneInput
                    type="file"
                    id="newPhotoInput"
                    name="newPhoto"
                    onChange={event => {
                      setFieldValue(
                        'newPhoto',
                        URL.createObjectURL(event.currentTarget.files[0])
                      );
                      handleAvatarClick(event);
                    }}
                  />
                </PlusBtn>
              </IconUserWrapper>
              <label>
                <FieldUser type="text" name="newName" />
                <ErrorMessage name="newName" component="div" />
              </label>
              <label>
                <FieldUser type="email" name="newEmail" />
                <ErrorMessage name="newEmail" component="div" />
              </label>
              <label>
                <FieldUser type="password" name="newPassword" />
                <ErrorMessage name="newPassword" component="div" />
              </label>
              <SaveBtn type="submit" disabled={isSubmitting}>
                Save
              </SaveBtn>
            </FormBox>
          )}
        </Formik>
      </EditProfileModal>
    </Container>
  );
};

export default EditProfile;


