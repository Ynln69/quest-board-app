import * as yup from 'yup';

export const HelpSchema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Email is required').matches(
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
    'Invalid email format'
  ),
  comment: yup.string().min(10, 'Comment must be at least 10 characters').max(500, 'Name must be no more than 500 characters').required('Comment is required'),
});