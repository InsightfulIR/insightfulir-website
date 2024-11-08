import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SocialIcon from '../../shared/social-icons/SocialIcon';
import {
  container,
  sectionItems,
  sectionLink,
  sectionTitle,
  socialIconsContainer,
} from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <Container fluid className={container}>
      <Row>
        <Col xs={12} lg={3}>
          <Link to='/'>
            <StaticImage
              src="../../../../images/Insightful-IR-Web-Logo.png"
              alt="Insightful IR Logo"
              className="img-fluid"
              placeholder="none"
              width={151}
            />
          </Link>
          <p>Insightful IR empowers individual investors to achieve lasting wealth through intelligent stock investing.</p>
          <p>Get started today to find the best stocks for long-term compounding.</p>
        </Col>
        <Col xs={12} lg={3}>
          <h2 className={sectionTitle}>Company</h2>
          <div className={sectionItems}>
            <div>
              <Link className={sectionLink} to="/pricing">Pricing</Link>
            </div>
            <div>
              <Link className={sectionLink} to="/contact">Contact</Link>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={3}>
          <h2 className={sectionTitle}>Fine Print</h2>
          <div className={sectionItems}>
            <div>
              <Link className={sectionLink} to="/privacy-policy">Privacy Policy</Link>
            </div>
            <div>
              <Link className={sectionLink} to="/terms-and-conditions">Terms & Conditions</Link>
            </div>
            <div>
              <Link className={sectionLink} to="/cookies-policy">Cookies Policy</Link>
            </div>
            <div>
              <Link className={sectionLink} to="/disclaimer">Disclaimer</Link>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={3}>
          <h2 className={sectionTitle}>Follow Us</h2>
          <div className={socialIconsContainer}>
            <SocialIcon platform="facebook" />
            <SocialIcon platform="instagram" />
            <SocialIcon platform="twitter" />
            <SocialIcon platform="tiktok" />
            <SocialIcon platform="linkedin" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
