import * as React from 'react';
import Field from './Field';
import Button from '../../../../../buttons/Button';


type Props = {
  isSubmitting: boolean;
};

const SubmitField: React.FC<Props> = ({ isSubmitting }) => {
  return (
    <Field name="submit">
      <Button isDisabled={isSubmitting} type="submit">
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </Field>
  );
};

export default SubmitField;
