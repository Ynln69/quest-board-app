import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import {
  Container,
  ModalCloseButton,
  EditProfileModal,
  FormBox,
  PhotoInputWrapper,
  AvatarImage,
  FieldUser,
  FileInput,
  IconPlus,
  IconUserWrapper,
  SaveBtn,
} from './EditProfile.styled';
import { updateProfileData } from 'redux/user/profileSlice';
import Sprite from '../../images/sprite.svg';

const EditProfile = ({ onClose }) => {
  const { avatarURL,username, email, password } = useSelector(state => state.profile);
  const dispatch = useDispatch();

  const handleFormSubmit = async values => {
    dispatch(updateProfileData(values));
    onClose();
  };

  const handleAvatarClick = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(updateProfileData({ newPhoto: reader.result }));
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <Container>
      <EditProfileModal>
        <div>Edit profile</div>
        <ModalCloseButton onClick={onClose}><use xlinkHref={`${Sprite}#icon-x-close`} /></ModalCloseButton>
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
              <PhotoInputWrapper>
                {values.newPhoto ? (
                  <>
                    <AvatarImage
                      src={values.newPhoto}
                      alt="User Avatar"
                      width="68"
                      height="68"
                      onClick={handleAvatarClick}
                    />
                    <IconPlus onClick={handleAvatarClick}>
                      <use href={`${Sprite}#icon-plus`} />
                    </IconPlus>
                  </>
                ) : (
                  <IconUserWrapper onClick={handleAvatarClick}>
                    <svg className="icon-user" width="68" height="68">
                      <use href={`${Sprite}#icon-user`} />
                    </svg>
                    <IconPlus onClick={handleAvatarClick}>
                      <use href={`${Sprite}#icon-plus`} />
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
              </PhotoInputWrapper>
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
