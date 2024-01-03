import * as React from 'react';
import SectionBlock from '../../shared/section-block/SectionBlock';
import ContactForm from './ContactForm';
import {
  container,
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
      <ContactForm />
    </SectionBlock>
  );
};

export default SendMessageSection;
