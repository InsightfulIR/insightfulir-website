import * as React from 'react';
import Card from 'react-bootstrap/Card';

import {
  card,
  cardImage,
  cardTitle
} from './PopularStocks.module.scss';

type Props = {
    logoUrl: string;
    name: string;
    symbol: string;
};

const PopularStocksCard: React.FC<Props> = ({ logoUrl, name, symbol }) => {
  return (
    <a href={`https://app.getinsightfulir.com/${symbol}/overview`}>
      <Card className={card}>
        <img src={logoUrl} className={cardImage} alt={`${symbol} logo`} />
        <h3 className={cardTitle}>{ symbol }</h3>
        <p>{ name }</p>
      </Card>
    </a>
  );
};

export default PopularStocksCard;
