import * as React from 'react';
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Footer: React.FC = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Link to='/'>
            <StaticImage
              src="../../../../images/Insightful-IR-Web-Logo.png"
              alt="Insightful IR Logo"
              className="img-fluid"
              width={151}
            />
          </Link>
          <p>Insightful IR empowers individual investors to achieve lasting wealth through intelligent stock investing.</p>
          <p>Get started today to find the best stocks for long-term compounding.</p>
        </Col>
        <Col>
          <h2>Company</h2>
          <div>
            <Link to="/pricing">Pricing</Link>
          </div>
          <div>
            <Link to="/contact">Contact</Link>
          </div>
        </Col>
        <Col>
          <h2>Fine Print</h2>
          <div>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
          <div>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
          </div>
          <div>
            <Link to="/cookies-policy">Cookies Policy</Link>
          </div>
          <div>
            <Link to="/disclaimer">Disclaimer</Link>
          </div>
        </Col>
        <Col>
          <h2>Follow Us</h2>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Tik Tok</li>
            <li>LinkedIn</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
