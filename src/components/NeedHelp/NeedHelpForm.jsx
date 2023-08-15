import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { needHelp } from '../../redux/auth/operations';
import { HelpSchema } from 'schemas/helpSchema';
import MainButton from 'components/MainButton';
import { showToast } from '../Notification/ToastNotification';

import {
  Input,
  Textarea,
  ErrorText,
} from './NeedHelp.styled';

const initialValues = {
  email: '',
  comment: '',
};

const NeedHelpForm = ({ handleCloseModal }) => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    const { email, comment } = values;
    console.log({ email, comment });
    try {
      const result = await dispatch(needHelp({ email, comment }));
      if (needHelp.fulfilled.match(result)) {
        showToast('success', 'Request sent successful');
        resetForm(initialValues);
        handleCloseModal();
      } 
    } catch (err) {
      showToast('error', `Request failed. ${err.message}`);
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={HelpSchema}
        onSubmit={handleSubmit}
      >
          <Form autoComplete="off">
            <Input type="email" name="email" placeholder="Email address" />
            <ErrorText name="email" component="div" />
            <div>
              <Textarea
                component="textarea"
                name="comment"
                placeholder="Comment"
                style={{
                  resize: 'none',
                }}
              />
              <ErrorText name="comment" component="div"/>
            </div>
            <MainButton type="submit">Send</MainButton>
          </Form>
      </Formik>
    </div>
  );
};

export default NeedHelpForm;

NeedHelpForm.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
};
