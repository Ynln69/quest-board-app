import * as Yup from 'yup';

export const addTaskSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  priority: Yup.string().required('Priority is required'),
  deadline: Yup.date()
    .required('Deadline is required')
    .min(new Date(), 'Deadline must be a future date'),
});
