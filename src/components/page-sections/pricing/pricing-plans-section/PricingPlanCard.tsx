import * as React from 'react';
import Card from 'react-bootstrap/Card';
import GetStartedButton from '../../../buttons/GetStartedButton';

import {
  basicTheme,
  buttonContainer,
  container,
  heading,
  featuresContainer,
  priceContainer,
  premiumTheme,
  subheading,
} from './PricingPlanCard.module.scss';


type Props = {
  planName: string;
  price: string;
  priceFrequency: string;
  description: string;
  benefits: string[];
  isPremium?: boolean;
};

const PricingPlanCard: React.FC<Props> = (
  { planName, price, priceFrequency, description, benefits, isPremium }
) => {

  const cardTheme = isPremium ? premiumTheme : basicTheme;
  const buttonVariant = isPremium ? 'outline-primary' : 'primary';

  return (
    <div className={cardTheme}>
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
          <GetStartedButton variant={buttonVariant} />
        </div>
        <ul className={featuresContainer}>
          {benefits.map(benefit => <li>{benefit}</li>)}
        </ul>
      </Card>
    </div>
  );
}

export default PricingPlanCard;
