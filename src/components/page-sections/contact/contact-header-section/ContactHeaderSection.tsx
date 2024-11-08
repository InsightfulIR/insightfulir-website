import * as React from 'react';
import SectionBlock from '../../shared/section-block/SectionBlock';
import {
  container,
  heading,
  subheading,
} from './ContactHeaderSection.module.scss';


const ContactHeaderSection = () => {
  return (
    <SectionBlock className={container}>
      <h1 className={heading}>Contact Us</h1>
      <p className={subheading}>
        Whether you’re curious about features, need help getting started, have feedback for us, or just want to say hello – we would love to hear from you!
      </p>
    </SectionBlock>
  );
};

export default ContactHeaderSection;
