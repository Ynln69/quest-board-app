import { Formik, ErrorMessage, Form } from 'formik';
import { MainButton } from 'components/Button/Button';
import { Input, Textarea } from './NeedHelp.styled';
import { HelpSchema } from 'schemas/helpSchema';

const initialValues = {
  name: '',
  email: '',
};

const NeedHelpForm = () => {
  const handleSubmit = evt => {};

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={HelpSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, submitCount }) => (
          <Form autoComplete="off">
            <Input type="email" name="email" placeholder="Email address" />
            <ErrorMessage name="email" />
            <div>
              <Textarea
                component="textarea"
                name="comment"
                placeholder="Comment"
                style={{
                  resize: 'none',
                }}
              />
              <ErrorMessage name="comment" />
              {submitCount > 0 &&
                errors.comment &&
                (!touched.comment || touched.comment) && (
                  <div>Please enter a comment</div>
                )}
            </div>
            <MainButton type="submit">Send</MainButton>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NeedHelpForm;
