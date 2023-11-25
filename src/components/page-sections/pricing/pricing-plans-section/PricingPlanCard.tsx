import * as React from 'react';
import Card from 'react-bootstrap/Card';
import GetStartedButton from '../../../buttons/GetStartedButton';

import {
  buttonContainer,
  container,
  heading,
  featuresContainer,
  priceContainer,
  subheading,
} from './PricingPlanCard.module.scss';


type Props = {
  planName: string;
  price: string;
  priceFrequency: string;
  description: string;
  benefits: string[];
};

const PricingPlanCard: React.FC<Props> = (
  { planName, price, priceFrequency, description, benefits }
) => {
  return (
    <Card className={container}>
      <h3 className={heading}>{planName}</h3>
      <div className={priceContainer}>
        <span>$</span>
        <span>{price}</span>
        <span>/</span>
        <span>{priceFrequency}</span>
      </div>
      <p className={subheading}>{description}</p>
      <div className={buttonContainer}>
        <GetStartedButton />
      </div>
      <ul className={featuresContainer}>
        {benefits.map(benefit => <li>{benefit}</li>)}
      </ul>
    </Card>
  );
}

export default PricingPlanCard;
