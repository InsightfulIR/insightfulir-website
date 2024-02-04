import * as React from "react";

import Field from "./Field";


type Props = {
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
};

const TextField: React.FC<Props> = ({ name, type, label, placeholder }) => {

  return (
    <Field name={name} label={label} placeholder={placeholder}>
      <input type={type} />
    </Field>
  );
};

export default TextField;
