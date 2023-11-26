import * as React from 'react';
import Button from '../../../buttons/Button';
import {
  container,
  field,
  fieldLabel,
} from './ContactForm.module.scss';

const ContactForm = () => {
  const onSumbit = () => {
    console.log('Form submitted');
  }

  return (
    <form className={container}>
      <div className={field}>
        <label className={fieldLabel} htmlFor="emailField">
          Email
        </label>
        <input id="emailField" type="email" placeholder="What's your email address?" />
      </div>
      <div className={field}>
        <label className={fieldLabel} htmlFor="messageField">
          Message
        </label>
        <textarea id="messageField" placeholder="What's on your mind?" />
      </div>
      <Button type="submit" handleClick={onSumbit}>
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
