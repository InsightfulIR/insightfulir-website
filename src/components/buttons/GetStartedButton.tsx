import * as React from 'react';
import Button, { ButtonVariant } from "./Button";

type Props = {
  variant?: ButtonVariant;
};


const GetStartedButton: React.FC<Props> = ({variant}) => {

  return (
    <Button variant={variant} href="https://app.getinsightfulir.com/auth/signup">
      Get Started
    </Button>
  );
};

export default GetStartedButton;