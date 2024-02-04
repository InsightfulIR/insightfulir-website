import * as React from 'react';
import classNames from 'classnames';
import BsButton from 'react-bootstrap/Button';
import { button } from './Button.module.scss';

export type ButtonVariant = 'primary' | 'outline-primary';

interface ButtonProps {
  children: string;
  handleClick?: any;
  value?: string;
  href?: string;
  variant?: ButtonVariant;
  type?: any;
  className?: string;
  size?: 'sm' | 'lg';
  isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  value, children, handleClick, href, variant, type, size, className, isDisabled
}) => {

  const onClick = (event: any) => {
    if(handleClick) {
      event.preventDefault();
      handleClick(event.currentTarget.value);
    }
  };

  return (
    <BsButton variant={variant}
              disabled={isDisabled}
              href={href}
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