import * as React from 'react';
import classNames from 'classnames';
import Container from 'react-bootstrap/Container';
import {
  container,
  containerInner,
} from './SectionBlock.module.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
}

const SectionBlock: React.FC<Props> = ({ children, className }) => {
  const containerClass = classNames(
    container,
    className,
  );

  return (
    <div className={containerClass}>
      <div className={containerInner}>
        <Container fluid>
          {children}
        </Container>
      </div>
    </div>
  );
};

export default SectionBlock;