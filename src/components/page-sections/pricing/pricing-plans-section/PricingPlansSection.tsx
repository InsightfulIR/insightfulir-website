import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PricingPlanCard from './PricingPlanCard';

const freePlanBenefits = [
  'Basic Fundamental Metrics',
  'Quarterly & Annual Periods',
  'Year-over-Year (YoY) & Quarter-over-Quarter (QoQ) Growth Rates',
  '2 Years of Fundamentals',
  '2 Years of Historical Stock Performance',
];

const premiumPlanBenefits = [
  "All features from the Basic Plan",
  "Advanced Fundamental Metrics",
  "Trailing Twelve Month (TTM) Periods",
  "Compound Annual Growth Rates (CAGR)",
  "10 Years of Fundamentals",
  "10 Years of Historical Stock Performance",
  "Custom Time Frames",
];

const PricingPlansSection: React.FC = () => {
  return (
    <div>
      <h1>Invest Smarter with the Right Plan</h1>
      <p>Whether your just getting started or have been investing for years, we have a plan for you.</p>
      <Row>
        <Col xs={12} md={6}>
          <PricingPlanCard planName="Basic" price="$0/forever" description="Just getting started? Start here to learn the fundamentals of investing – for free." benefits={freePlanBenefits} />
        </Col>
        <Col xs={12} md={6}>
          <PricingPlanCard planName="Premium" price="$4.99/month" description="Already know your way around a 10K? Go Premium to take your analysis to the next level." benefits={premiumPlanBenefits} />
        </Col>
      </Row>
    </div>
  );
};

export default PricingPlansSection;
