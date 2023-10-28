import * as React from 'react';
import Button from "./Button";


const ContactUsButton = () => {

  const handleClick = () => {
    console.log('click');
  };

  return (
    <Button value="hi" handleClick={handleClick}>
      Contact Us
    </Button>
  );
};

export default ContactUsButton;