import * as Yup from 'yup';

export const addBoardSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
});
