import * as React from 'react';

import SectionBlock from '../../shared/section-block/SectionBlock';
import {
  container,
  header,
  subheading
} from './PricingHeaderSection.module.scss';

const PricingHeaderSection: React.FC = () => {
  return (
    <SectionBlock className={container}>
      <h1 className={header}>Invest Smarter with the Right Plan</h1>
      <p className={subheading}>
        Whether your just getting started or have been investing for years, we have a plan for you.
      </p>
    </SectionBlock>
  )
};

export default PricingHeaderSection;
