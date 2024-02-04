import * as React from 'react';
import SectionBlock from '../../shared/section-block/SectionBlock';
import ContactForm from './contact-form/ContactForm';
import {
  container,
  formContainer,
  heading,
  subheading,
} from './SendMessageSection.module.scss';


const SendMessageSection = () => {
  return (
    <SectionBlock className={container}>
      <h2 className={heading}>Send Us a Message</h2>
      <p className={subheading}>
        We’re here to help and answer any questions you might have. Fill out the form below to send us a message and we will get back to you soon.
      </p>
      <div className={formContainer}>
        <ContactForm />
      </div>
    </SectionBlock>
  );
};

export default SendMessageSection;
