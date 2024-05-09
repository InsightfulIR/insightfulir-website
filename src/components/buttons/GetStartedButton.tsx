import * as React from 'react';
import Button, { ButtonVariant } from "./Button";

type Props = {
  variant?: ButtonVariant;
  isPremium?: boolean;
};


const GetStartedButton: React.FC<Props> = ({variant, isPremium}) => {
  let url = "https://app.getinsightfulir.com/auth/signup";
  if (isPremium) {
    url = url + "?plan=premium";
  };

  return (
    <Button variant={variant} href={url}>
      Get Started
    </Button>
  );
};

export default GetStartedButton;