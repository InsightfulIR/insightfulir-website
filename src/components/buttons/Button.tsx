import * as React from 'react';
import BsButton from 'react-bootstrap/Button';

interface ButtonProps {
  value: string;
  children: string;
  handleClick: any;
  variant?: string;
  type?: any;
  className?: string;
  size?: 'sm' | 'lg';
}

const Button: React.FC<ButtonProps> = ({
  value, children, handleClick, variant, type, size, className}
) => {

  const onClick = (event: any) => {
    if(handleClick) {
      event.preventDefault();
      handleClick(event.currentTarget.value);
    }
  };

  return (
    <BsButton variant={variant}
              type={type}
              className={className}
              size={size}
              value={value}
              onClick={onClick}>
      {children}
    </BsButton>
  );
};

export default Button;