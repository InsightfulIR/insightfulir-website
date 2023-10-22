import * as React from 'react';
import Card from 'react-bootstrap/Card';

type Props = {
    logo: string;
    name: string;
    symbol: string;
};

const PopularStocksCard: React.FC<Props> = ({ logo, name, symbol }) => {
  return (
    <Card>
      <h3>{ symbol }</h3>
      <p>{ name }</p>
    </Card>
  );
};

export default PopularStocksCard;
