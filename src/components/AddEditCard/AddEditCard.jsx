import React, { useState } from 'react';
import {
  ButtonIcon,
  ButtonIconWrap,
  ButtonContentWrap,
  ButtonText,
  TitleInput,
  DescriptionInput,
  ModalText,
  RadioButtonWrap,
  RadioButtonInput,
  CalendarWrap,
} from './AddEditCard.styled';
import { Calendar } from '../Calendar/Calendar';
import sprite from '../../images/sprite.svg';
import { Form, Formik } from 'formik';
import { addTaskSchema } from 'schemas';

const initialValues = {
  title: '',
  description: '',
  priority: '',
};

// function AddEditCardModal({
//   setTitleTask,
//   handleSubmit,
//   setDescriptionTask,
//   editedTask,
// }) {
//   const [newTitle, setNewTitle] = useState('');
//   console.log(editedTask);
//   const handleDescriptionChange = event => {
//     setDescriptionTask(event.target.value);
//   };

//   const handleTitleChange = event => {
//     setNewTitle(event.target.value);
//     setTitleTask(event.target.value);
//   };

//   const handleButtonSubmit = event => {
//     event.preventDefault();
//     handleSubmit();
//   };

//   return (
//     <>
//       <TitleInput
//         autoFocus
//         name="title"
//         placeholder="Title"
//         type="text"
//         value={newTitle}
//         onChange={handleTitleChange}
//       ></TitleInput>

//       <DescriptionInput
//         autoFocus
//         name="description"
//         type="text"
//         placeholder="Description"
//         onChange={handleDescriptionChange}
//       ></DescriptionInput>
//       <ModalText>Label color</ModalText>
//       <RadioButtonWrap>
//         <RadioButtonInput
//           type="radio"
//           name="color"
//           backgroundColor="#8FA1D0"
//         ></RadioButtonInput>
//         <RadioButtonInput
//           type="radio"
//           name="color"
//           backgroundColor="#E09CB5"
//         ></RadioButtonInput>
//         <RadioButtonInput
//           type="radio"
//           name="color"
//           backgroundColor="#BEDBB0"
//         ></RadioButtonInput>
//         <RadioButtonInput
//           type="radio"
//           name="color"
//           backgroundColor="#bab8b8"
//         ></RadioButtonInput>
//       </RadioButtonWrap>
//       <ModalText>Deadline</ModalText>
//       <CalendarWrap>
//         <Calendar />
//       </CalendarWrap>
//       <ButtonContentWrap type="submit" onClick={handleButtonSubmit}>
//         <ButtonIconWrap>
//           <ButtonIcon>
//             <use stroke="white" href={`${sprite}#icon-plus`} />
//           </ButtonIcon>
//         </ButtonIconWrap>
//         <ButtonText>Add</ButtonText>
//       </ButtonContentWrap>
//     </>
//   );
// }

function AddEditCardModal() {
  const handleSubmit = (values, { resetForm }) => {};

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={addTaskSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, values }) => (
        <Form autoComplete="off">
          <TitleInput
            autoFocus
            name="title"
            placeholder="Title"
            type="text"
            value={values.title}
            onChange={handleChange}
          ></TitleInput>
          <DescriptionInput
            component="textarea"
            name="description"
            type="text"
            placeholder="Description"
            onChange={handleChange}
          ></DescriptionInput>
          <ModalText>Label color</ModalText>
          <RadioButtonWrap>
            <RadioButtonInput
              type="radio"
              name="color"
              backgroundColor="#8FA1D0"
            ></RadioButtonInput>
            <RadioButtonInput
              type="radio"
              name="color"
              backgroundColor="#E09CB5"
            ></RadioButtonInput>
            <RadioButtonInput
              type="radio"
              name="color"
              backgroundColor="#BEDBB0"
            ></RadioButtonInput>
            <RadioButtonInput
              type="radio"
              name="color"
              backgroundColor="#bab8b8"
            ></RadioButtonInput>
          </RadioButtonWrap>
          <ModalText>Deadline</ModalText>
          <CalendarWrap>
            <Calendar />
          </CalendarWrap>
          <ButtonContentWrap type="submit">
            <ButtonIconWrap>
              <ButtonIcon>
                <use stroke="white" href={`${sprite}#icon-plus`} />
              </ButtonIcon>
            </ButtonIconWrap>
            <ButtonText>Add</ButtonText>
          </ButtonContentWrap>
        </Form>
      )}
    </Formik>
  );
}

export default AddEditCardModal;
