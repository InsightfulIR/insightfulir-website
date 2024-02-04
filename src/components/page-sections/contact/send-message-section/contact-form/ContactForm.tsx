import * as React from 'react';
import { Formik, Form as FormikForm } from 'formik';
import * as Yup from 'yup';

import { container } from './ContactForm.module.scss';
import SubmitField from './fields/SubmitField';
import TextField from './fields/TextField';
import TextAreaField from './fields/TextAreaField';

const ContactForm = () => {

  const onSubmit = async ({ email, message}: {email: string, message: string}) => {
    console.log('Submitting form', email, message);
    // sleep for 1 seconds
    await new Promise((r) => setTimeout(r, 1000));
    console.log('Form submitted');
  }


  return (
    <Formik
      initialValues={{ email: '', message: '' }}
      validationSchema={
        Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Email is Required'),
          message: Yup.string()
            .required('Message is Required')
        })
      }
      onSubmit={onSubmit}
    >
      {({isSubmitting}) => (
        <FormikForm noValidate className={container}>
          <TextField
            label='Email'
            name="email"
            type='email'
            placeholder="What's your email address?"
          />
          <TextAreaField
            label='Message'
            name="message"
            placeholder="What's on your mind?"
          />
          <SubmitField isSubmitting={isSubmitting} />
        </FormikForm>
      )}
    </Formik>
  );
};

export default ContactForm;
