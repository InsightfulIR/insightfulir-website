import * as React from 'react';
import Button from "./Button";


const GetStartedButton = () => {

  const handleClick = () => {
    console.log('click');
  };

  return (
    <Button value="hi" handleClick={handleClick}>
      Get Started
    </Button>
  );
};

export default GetStartedButton;