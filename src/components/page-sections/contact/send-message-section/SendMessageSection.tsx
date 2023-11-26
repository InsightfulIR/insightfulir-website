import * as React from 'react';
import ContactForm from './ContactForm';
import {
  container,
  heading,
  subheading,
} from './SendMessageSection.module.scss';


const SendMessageSection = () => {
  return (
    <div className={container}>
      <h2 className={heading}>Send Us a Message</h2>
      <p className={subheading}>
        We’re here to help and answer any questions you might have. Fill out the form below to send us a message and we will get back to you soon.
      </p>
      <ContactForm />
    </div>
  );
};

export default SendMessageSection;
