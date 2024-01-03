import * as React from 'react';
import SectionBlock from '../section-block/SectionBlock';
import GetStartedButton from '../../../buttons/GetStartedButton';
import {
  container,
  content,
  title
} from './CTASection.module.scss';

const CTASection: React.FC = () => {
  return (
    <SectionBlock className={container}>
      <div className={content}>
        <h2 className={title}>
          Ready to take your investing to the next level?
        </h2>
        <div>
          <GetStartedButton />
        </div>
      </div>
    </SectionBlock>
  );
};

export default CTASection;
