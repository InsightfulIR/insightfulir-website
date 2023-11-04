import * as React from 'react';
import classNames from 'classnames';
import BsButton from 'react-bootstrap/Button';
import { button } from './Button.module.scss';


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
              className={classNames(button, className)}
              size={size}
              value={value}
              onClick={onClick}>
      {children}
    </BsButton>
  );
};

export default Button;