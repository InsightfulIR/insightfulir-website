import * as React from 'react';
import classNames from 'classnames';
import {
  bgPrimaryTheme,
  bgWhiteTheme,
  container,
  divider
} from './SectionDivider.module.scss';


type Props = {
  bgColor?: "primary" | "white";
};

const SectionDivider: React.FC<Props> = ({ bgColor }) => {
  const theme = classNames(
    {
      [bgWhiteTheme]: bgColor === "white",
      [bgPrimaryTheme]: bgColor === "primary",
    }
  );

  return (
    <div className={theme}>
      <div className={container}>
        <span className={divider}/>
      </div>
    </div>
  );
};

export default SectionDivider;
