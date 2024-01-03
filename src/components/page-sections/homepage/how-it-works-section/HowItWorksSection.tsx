import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SectionBlock from '../../shared/section-block/SectionBlock';

import { container } from './HowItWorksSection.module.scss';

const howItWorks = [
  {
    'title': 'Search',
    'description': 'Use the Insightful IR app to search for high-quality stocks that meet your investment criteria.',
  },
  {
    'title': 'Analyze',
    'description': "Analyze the underlying fundamentals of the stocks using our powerful data and analysis tools to gain a deeper understanding of the company's financial health and potential for growth.",
  },
  {
    'title': 'Decide',
    'description': "With the insights gained from our analysis, make informed investment decisions and build a well-diversified portfolio that aligns with your investment goals.",
  },
  {
    'title': 'Monitor',
    'description': "Stay up to date on your portfolio's performance with our monitoring tools and make adjustments as needed to stay on track.",
  }
]

const HowItWorksSection: React.FC = () => {
  return (
    <SectionBlock className={container}>
      <h2>How Insightful IR Works</h2>
      <Row>
        {howItWorks.map(({title, description}) => (
          <Col key={title} xs={12} md={6}>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </SectionBlock>
  );
};

export default HowItWorksSection;
