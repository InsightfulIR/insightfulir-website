import * as React from 'react';
import { navigate } from 'gatsby';
import Button from "./Button";


type Props = {
  className?: string;
}

const ContactUsButton: React.FC<Props> = ({ className }) => {

  const handleClick = () => {
    navigate('/contact');
  };

  return (
    <Button className={className} handleClick={handleClick}>
      Contact Us
    </Button>
  );
};

export default ContactUsButton;