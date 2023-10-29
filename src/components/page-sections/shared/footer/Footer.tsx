import * as React from 'react';
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Footer: React.FC = () => {
  return (
    <div>
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
          <ul>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </Col>
        <Col>
          <h2>Fine Print</h2>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Cookies Policy</li>
            <li>Disclaimer</li>
          </ul>
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
    </div>
  );
};

export default Footer;
