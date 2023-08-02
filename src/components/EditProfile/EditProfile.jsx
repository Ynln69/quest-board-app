import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Field, ErrorMessage } from 'formik';
import {
  Container,
  ModalCloseButton,
  EditProfileModal,
  FormBox,
  SaveBtn,
} from './EditProfile.styled';
import { updateProfileData } from 'redux/user/profileSlice';

const EditProfile = ({ onClose }) => {
  const { photo, name, email, password } = useSelector(state => state.profile);
  const dispatch = useDispatch();

  const handleFormSubmit = async values => {
    dispatch(updateProfileData(values));
    onClose();
  };

  return (
    <Container>
      <EditProfileModal>
        <div>Edit profile</div>
        <ModalCloseButton onClick={onClose}>Close</ModalCloseButton>
        <Formik
          initialValues={{
            newPhoto: photo,
            newName: name,
            newEmail: email,
            newPassword: password,
          }}
          onSubmit={handleFormSubmit}
        >
          {({ isSubmitting, values, setFieldValue }) => (
            <FormBox>
              <label>
                <input
                  type="file"
                  name="newPhoto"
                  onChange={event => {
                    setFieldValue(
                      'newPhoto',
                      URL.createObjectURL(event.currentTarget.files[0])
                    );
                  }}
                />
                <ErrorMessage name="newPhoto" component="div" />
                {values.newPhoto && (
                  <img src={values.newPhoto} alt="User Avatar" />
                )}
              </label>
              <label>
                Name:
                <Field type="text" name="newName" />
                <ErrorMessage name="newName" component="div" />
              </label>
              <label>
                Email:
                <Field type="email" name="newEmail" />
                <ErrorMessage name="newEmail" component="div" />
              </label>
              <label>
                Password:
                <Field type="password" name="newPassword" />
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