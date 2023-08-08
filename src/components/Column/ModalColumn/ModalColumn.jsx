import { useState } from 'react';
import { Formik } from 'formik';

import BtnColumn from '../BtnColumn/BtnColumn';
import { FormContainer, Input } from './ModalColumn.styled';

const ModalColumn = ({ handleSubmit, nameTitle }) => {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState(nameTitle || '');

  const handlerVisible = () => {
    setVisible(!visible);
  };

  const handleFormSubmit = () => {
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
        <BtnColumn type="submit" text={'Add'} />
      </FormContainer>
    </Formik>
  );
};
export default ModalColumn;
