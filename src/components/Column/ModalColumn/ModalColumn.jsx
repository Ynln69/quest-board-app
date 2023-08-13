import { useState } from 'react';
import { Formik } from 'formik';

import BtnColumn from '../BtnColumn/BtnColumn';
import { FormContainer, Input } from './ModalColumn.styled';
import { showToast } from '../../Notification/ToastNotification';

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
        <BtnColumn text={'Add'} />
      </FormContainer>
    </Formik>
  );
};
export default ModalColumn;
