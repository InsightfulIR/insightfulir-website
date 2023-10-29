import * as React from 'react';
import { navigate } from 'gatsby';
import Button from "./Button";


const ContactUsButton = () => {

  const handleClick = () => {
    navigate('/contact');
  };

  return (
    <Button value="hi" handleClick={handleClick}>
      Contact Us
    </Button>
  );
};

export default ContactUsButton;