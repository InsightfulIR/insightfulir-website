import * as React from 'react';
import { container, copywrite } from './Copywrite.module.scss';


const Copywrite: React.FC = () => {
  const currentYear = React.useMemo(() => {
    return new Date().getFullYear()
  }, []);

  return (
    <div className={container}>
      <div className={copywrite}>
        Copyright © {currentYear} Insightful IR Inc.
      </div>
    </div>
  );
};

export default Copywrite;
