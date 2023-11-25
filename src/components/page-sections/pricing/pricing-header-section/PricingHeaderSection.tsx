import * as React from 'react';

import {
  container,
  header,
  subheading
} from './PricingHeaderSection.module.scss';

const PricingHeaderSection: React.FC = () => {
  return (
    <div className={container}>
      <h1 className={header}>Invest Smarter with the Right Plan</h1>
      <p className={subheading}>
        Whether your just getting started or have been investing for years, we have a plan for you.
      </p>
    </div>
  )
};

export default PricingHeaderSection;
