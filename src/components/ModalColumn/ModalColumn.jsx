import { useState } from 'react';
import { Formik } from 'formik';

import { FormContainer, Input } from './ModalColumn.styled';
import { showToast } from '../Notification/ToastNotification';
import MainButton from 'components/MainButton';

const ModalColumn = ({ handleSubmit, nameTitle }) => {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState(nameTitle || '');

  const handlerVisible = () => {
    setVisible(!visible);
  };

  const handleFormSubmit = () => {
    if (title.trim() === '') {
      showToast('error', 'The title column cannot be empty. Enter a title!');
      return;
    }
    handleSubmit(title);
    handlerVisible();
  };

  return (
    <Formik initialValues={{ title: nameTitle }} onSubmit={handleFormSubmit}>
      <FormContainer>
        <Input
          name="title"
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => {
            setTitle(e.target.value);
          }}
        />
        <MainButton type={'submit'} showPlus={true}>
          Add
        </MainButton>
      </FormContainer>
    </Formik>
  );
};
export default ModalColumn;
