import * as React from "react";

import Field from "./Field";


type Props = {
  name: string;
  label?: string;
  placeholder?: string;
};

const TextAreaField: React.FC<Props> = ({ name, label, placeholder }) => {

  return (
    <Field name={name} label={label} placeholder={placeholder}>
      <textarea rows={4} />
    </Field>
  );
};

export default TextAreaField;
