import React from 'react';
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
import { updateProfileData } from 'redux/user/profileSlice';
import Sprite from '../../images/sprite.svg';

const EditProfile = ({ onClose }) => {
  const { avatarURL, username, email, password } = useSelector(
    state => state.profile
  );
  const dispatch = useDispatch();

  const handleFormSubmit = async values => {
    dispatch(updateProfileData(values));
    onClose();
  };

  const handleAvatarClick = e => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      
      // const formData = new FormData();
      // formData.append('avatar', selectedFile);
      // dispatch(formData);
      dispatch(updateProfileData({ newPhoto: selectedFile }));
      onClose();
    }
  };

  return (
    <Container>
      <EditProfileModal>
        <p>Edit profile</p>
        <Formik
          initialValues={{
            newPhoto: avatarURL,
            newName: username,
            newEmail: email,
            newPassword: password,
          }}
          onSubmit={handleFormSubmit}
        >
          {({ isSubmitting, values, setFieldValue }) => (
            <FormBox>
              <IconUserWrapper onClick={handleAvatarClick}>
                {values.newPhoto ? (
                  <AvatarImage
                   type="file"
                  name="newPhoto"
                  alt="Avatar"
                  src={values.newPhoto}
                  // onChange={e => {
                  //   handleAvatarClick(e);
                  //   setFieldValue('newPhoto', URL.createObjectURL(e.currentTarget.files[0]));
                  // }}
                  />
                ) : (
                  <svg className="icon-user" width="68" height="68">
                    <use href={`${Sprite}#icon-user`} />
                  </svg>
                )}
                <PlusBtn onClick={() => document.getElementById('newPhotoInput').click()}>
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

/* <PhotoInputWrapper>
                {values.newPhoto ? (
                  <IconUserWrapper>
                    <AvatarImage
                      src={values.newPhoto}
                      alt="User Avatar"
                      width="68"
                      height="68"
                      onClick={handleAvatarClick}
                    />
                    <PlusBtn>
                    <IconPlus onClick={handleAvatarClick}>
                      <use href={`${Sprite}#icon-plus-us`} />
                    </IconPlus>
                    </PlusBtn>
                                    
                    
                  </IconUserWrapper>
                ) : (
                  <IconUserWrapper onClick={handleAvatarClick}>
                    <svg className="icon-user" width="68" height="68">
                      <use href={`${Sprite}#icon-user`} />
                    </svg>
                    <IconPlus onClick={handleAvatarClick}>
                      <use href={`${Sprite}#icon-plus-us`} />
                    </IconPlus>
                  </IconUserWrapper>
                )}
                <FileInput
                  id="newPhotoInput"
                  type="file"
                  name="newPhoto"
                  onChange={event => {
                    setFieldValue(
                      'newPhoto',
                      URL.createObjectURL(event.currentTarget.files[0])
                    );
                  }}
                />
              </PhotoInputWrapper> */
