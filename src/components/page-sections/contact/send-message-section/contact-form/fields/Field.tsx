import * as React from 'react';
import { useField, FieldInputProps } from "formik";
import { container, errorMessage, fieldLabel } from './Field.module.scss';


interface Props extends React.PropsWithChildren {
  name: string;
  label?: string;
  placeholder?: string;
}

interface ChildProps extends FieldInputProps<any>{
  id: string;
  className: string;
  placeholder?: string;
}


const Field: React.FC<Props> = ({ name, label, placeholder, children }) => {

  const [field, meta] = useField(name);

  return (
    <div className={container}>
      {label &&
        <label htmlFor={name} className={fieldLabel}>
          {label}
        </label>
      }
      {React.Children.map(children, child => {
        return React.cloneElement(
          child as React.ReactElement<ChildProps>,
          {
            className: 'form-control',
            id: name,
            placeholder,
            ...field,
          }
        );
      })}
      {(meta.touched && meta.error) &&
        <div className={errorMessage}>{meta.error}</div>
      }
    </div>
  );
};

export default Field;
