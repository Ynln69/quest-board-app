import { useState } from 'react';
import { Formik, Form } from 'formik';
import sprite from '../../../images/sprite.svg';
import { Button, BoxSvg, SvgAdd, Input } from './ModalColumn.styled';

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
    <>
      <Formik initialValues={{ title: nameTitle }} onSubmit={handleFormSubmit}>
        <Form>
          <Input
            name="title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={e => {
              setTitle(e.target.value);
            }}
          />
          <Button type="submit">
            <BoxSvg>
              <SvgAdd>
                <use href={`${sprite}#icon-plus`} />
              </SvgAdd>
            </BoxSvg>
            Add
          </Button>
        </Form>
      </Formik>
    </>
  );
};
export default ModalColumn;
