import * as React from 'react';
import Card from 'react-bootstrap/Card';
import GetStartedButton from '../../../buttons/GetStartedButton';


type Props = {
  planName: string;
  price: string;
  description: string;
  benefits: string[];
};

const PricingPlanCard: React.FC<Props> = (
  { planName, price, description, benefits }
) => {
  return (
    <Card>
      <h3>{planName}</h3>
      <p>{price}</p>
      <p>{description}</p>
      <GetStartedButton />
      <ul>
        {benefits.map(benefit => <li>{benefit}</li>)}
      </ul>
    </Card>
  );
}

export default PricingPlanCard;
