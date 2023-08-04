import { Formik, ErrorMessage, Field, Form } from 'formik';
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
            <Field
              type="email"
              name="email"
              placeholder="Email address"
              style={{
                width: 300,
                height: 49,
              }}
            />
            <ErrorMessage name="email" />
            <div>
              <Field
                component="textarea"
                name="comment"
                placeholder="Comment"
                style={{
                  width: 300,
                  height: 120,
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
            <button type="submit">Send</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NeedHelpForm;
