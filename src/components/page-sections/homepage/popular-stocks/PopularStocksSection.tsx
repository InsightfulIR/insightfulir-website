import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PopularStocksCard from './PopularStocksCard';
import { container, heading } from './PopularStocks.module.scss';

const popularStocks = [
  {'symbol': 'AAPL', 'name': 'Apple', 'logoUrl': 'https://storage.googleapis.com/iexcloud-hl37opg/api/logos/AAPL.png'},
  {'symbol': 'MSFT', 'name': 'Microsoft', 'logoUrl': 'https://storage.googleapis.com/iexcloud-hl37opg/api/logos/MSFT.png'},
  {'symbol': 'AMZN', 'name': 'Amazon', 'logoUrl': 'https://storage.googleapis.com/iexcloud-hl37opg/api/logos/AMZN.png'},
  {'symbol': 'NFLX', 'name': 'Netflix', 'logoUrl': 'https://storage.googleapis.com/iexcloud-hl37opg/api/logos/NFLX.png'},
  {'symbol': 'TSLA', 'name': 'Tesla', 'logoUrl': 'https://storage.googleapis.com/iexcloud-hl37opg/api/logos/TSLA.png'},
  {'symbol': 'NVDA', 'name': 'Nvidia', 'logoUrl': 'https://storage.googleapis.com/iexcloud-hl37opg/api/logos/NVDA.png'},
];

const PopularStocksSection: React.FC = () => {
  return (
    <Container fluid className={container}>
      <h2 className={heading}>Explore Our Popular Stocks</h2>
      <Row>
        {popularStocks.map(({logoUrl, name, symbol}) => (
          <Col xs="12" md="6" lg="4">
            <PopularStocksCard
              logoUrl={logoUrl}
              name={name}
              symbol={symbol}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PopularStocksSection;
