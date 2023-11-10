import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PopularStocksCard from './PopularStocksCard';

const popularStocks = [
  {'symbol': 'AAPL', 'name': 'Apple', 'logo': 'https://logo.clearbit.com/apple.com'},
  {'symbol': 'MSFT', 'name': 'Microsoft', 'logo': 'https://logo.clearbit.com/microsoft.com'},
  {'symbol': 'AMZN', 'name': 'Amazon', 'logo': 'https://logo.clearbit.com/amazon.com'},
  {'symbol': 'NFLX', 'name': 'Netflix', 'logo': 'https://logo.clearbit.com/netflix.com'},
  {'symbol': 'TSLA', 'name': 'Tesla', 'logo': 'https://logo.clearbit.com/tesla.com'},
  {'symbol': 'NVDA', 'name': 'Nvidia', 'logo': 'https://logo.clearbit.com/nvidia.com'},
];

const PopularStocksSection: React.FC = () => {
  return (
    <Container fluid>
      <h2>Explore Our Popular Stocks</h2>
      <Row>
        {popularStocks.map((stock) => (
          <Col xs="12" md="6" lg="4">
            <PopularStocksCard
              logo={stock.logo}
              name={stock.name}
              symbol={stock.symbol}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PopularStocksSection;
