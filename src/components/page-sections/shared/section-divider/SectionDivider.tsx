import * as React from 'react';
import { container, divider } from './SectionDivider.module.scss';

const SectionDivider: React.FC = () => {
  return (
    <div className={container}>
      <span className={divider}/>
    </div>
  );
};

export default SectionDivider;
