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
  PasswordView,
  PasswordIcon,
  Svg,
  LabelPass,
  LabelText,
  TextBtn,
} from './EditProfile.styled';
import { updateUser, updateUserAvatar } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import Sprite from '../../images/sprite.svg';
import eyeHide from '../../images/eye-hide.svg';

const EditProfile = ({ onSave }) => {
  const { username, email, password, avatarURL } = useSelector(selectUser);
  const [showPassword, setShowPassword] = useState(false);
  const [avatarNewURL, setAvatarNewURL] = useState(avatarURL);

  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
    onSave();
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
    <EditProfileModal>
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
                onClick={() => document.getElementById('newPhotoInput').click()}
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

            <LabelText>
              <FieldUser type="text" name="newName" />
              <ErrorMessage name="newName" component="div" />
            </LabelText>

            <LabelText>
              <FieldUser type="email" name="newEmail" />
              <ErrorMessage name="newEmail" component="div" />
            </LabelText>

            <LabelPass>
              <FieldUser
                type={showPassword ? 'text' : 'password'}
                id="password"
              />
              <PasswordView onClick={togglePasswordVisibility}>
                {showPassword ? (
                  <PasswordIcon src={eyeHide} />
                ) : (
                  <Svg>
                    <use stroke="gray" href={`${Sprite}#eye-password`} />
                  </Svg>
                )}
              </PasswordView>
              <ErrorMessage name="newPassword" component="div" />
            </LabelPass>

            <SaveBtn type="submit" disabled={isSubmitting}>
              <TextBtn>Save</TextBtn>
            </SaveBtn>
          </FormBox>
        )}
      </Formik>
    </EditProfileModal>
  );
};

export default EditProfile;
