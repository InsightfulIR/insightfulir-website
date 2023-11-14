import * as React from 'react';
import GetStartedButton from '../../../buttons/GetStartedButton';
import { container, title } from './CTASection.module.scss';

const CTASection: React.FC = () => {
  return (
    <div className={container}>
      <h2 className={title}>
        Ready to take your investing to the next level?
      </h2>
      <GetStartedButton />
    </div>
  );
};

export default CTASection;
