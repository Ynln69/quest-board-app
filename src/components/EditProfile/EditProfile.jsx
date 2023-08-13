import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import MainButton from 'components/MainButton';
import {
  FormBox,
  AvatarImage,
  Label,
  FieldUser,
  NoneInput,
  PlusBtn,
  IconPlus,
  IconUserWrapper,
  PasswordView,
  PasswordIcon,
  Svg,
  LabelPass,
 } from './EditProfile.styled';
import { updateUser, updateUserAvatar } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import Sprite from '../../images/sprite.svg';
import eyeHide from '../../images/eye-hide.svg';
import { showToast } from 'components/Notification/ToastNotification';

const EditProfile = ({ onClose }) => {
  const { username, theme, email, password, avatarURL } =
    useSelector(selectUser);
  const [showPassword, setShowPassword] = useState(false);
  const [avatarNewURL, setAvatarNewURL] = useState(avatarURL);

  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleFormSubmit = async formValues => {
    dispatch(
      updateUser({
        username: formValues.newName,
        email: formValues.newEmail,
        password: formValues.newPassword,
        theme,
      })
    );
    if (avatarNewURL !== formValues.newPhoto) {
      dispatch(updateUserAvatar(avatarNewURL));
    }
    onClose();
    showToast('success', 'User updated successfully.');
  };

  const handleAvatarClick = e => {
    e.preventDefault();
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      const formData = new FormData();
      formData.append('avatar', selectedFile);
      setAvatarNewURL(formData);
    } else {
      showToast('error', 'Invalid file format. Please select an image.');
    }
  };

  return (
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
                width="68"
                height="68"
              />
            ) : (
              <svg className="icon-user" width="68" height="68">
                <use href={`${Sprite}#icon-user`} />
              </svg>
            )}
            <PlusBtn
              type="button"
              onClick={() => document.getElementById('newPhotoInput').click()}
            >
              <IconPlus width="14" height="14">
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

          <Label>
            <FieldUser type="text" name="newName" />
            <ErrorMessage name="newName" component="div" />
          </Label>

          <Label>
            <FieldUser type="email" name="newEmail" />
            <ErrorMessage name="newEmail" component="div" />
          </Label>

          <LabelPass>
            <FieldUser
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Enter Password"
            />
            <PasswordView onClick={togglePasswordVisibility}>
              {showPassword ? (
                <PasswordIcon
                  src={eyeHide}
                  alt="Hide Password"
                  width="16"
                  height="16"
                />
              ) : (
                <Svg width="16" height="16">
                  <use stroke="gray" href={`${Sprite}#eye-password`} />
                </Svg>
              )}
            </PasswordView>
            <ErrorMessage name="newPassword" component="div" />
          </LabelPass>

          <MainButton type="submit" disabled={isSubmitting}>
            Save
          </MainButton>
        </FormBox>
      )}
    </Formik>
  );
};

export default EditProfile;
