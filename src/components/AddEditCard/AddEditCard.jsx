import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { format } from 'date-fns';
import MainButton from 'components/MainButton';
import { Calendar } from '../Calendar/Calendar';

import {
  TitleInput,
  DescriptionInput,
  ModalText,
  RadioButtonWrap,
  RadioButtonInput,
  CalendarWrap,
} from './AddEditCard.styled';

function AddEditCardModal({ handleSubmit, editedTask }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleSubmitAdd = (
    { title, description, priority, deadline },
    { resetForm }
  ) => {
    const formattedDeadline = format(new Date(selectedDate), 'dd/MM/yyyy');
    handleSubmit(title, description, priority, formattedDeadline);
  };

  const handleSubmitEdit = (values, { resetForm }) => {
    const formattedDeadline = format(new Date(selectedDate), 'dd/MM/yyyy');

    handleSubmit(
      editedTask.id,
      values.title,
      values.description,
      values.priority,
      formattedDeadline
    );
  };

  const initialValues = {
    title: editedTask ? editedTask.title : '',
    description: editedTask ? editedTask.description : '',
    priority: editedTask ? editedTask.priority : 'without priority',
    deadline: editedTask ? editedTask.deadline : selectedDate,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={editedTask ? handleSubmitEdit : handleSubmitAdd}
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
          <RadioButtonWrap role="group" aria-labelledby="priority-radio-group">
            <RadioButtonInput
              type="radio"
              name="priority"
              style={{ backgroundColor: '#8FA1D0' }}
              value={'low'}
            />
            <RadioButtonInput
              type="radio"
              name="priority"
              style={{ backgroundColor: '#E09CB5' }}
              value={'medium'}
            />
            <RadioButtonInput
              type="radio"
              name="priority"
              style={{ backgroundColor: '#BEDBB0' }}
              value={'high'}
            />
            <RadioButtonInput
              type="radio"
              name="priority"
              style={{ backgroundColor: '#bab8b8' }}
              value={'without priority'}
            />
          </RadioButtonWrap>
          <ModalText>Deadline</ModalText>
          <CalendarWrap>
            <Calendar
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          </CalendarWrap>
          <MainButton type="submit" showPlus={true}>
            Add
          </MainButton>
        </Form>
      )}
    </Formik>
  );
}

export default AddEditCardModal;
