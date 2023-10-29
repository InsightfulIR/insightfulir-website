import * as React from 'react';


const Copywrite: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <p>Copyright © {currentYear} Insightful IR Inc.</p>
    </div>
  );
};

export default Copywrite;
