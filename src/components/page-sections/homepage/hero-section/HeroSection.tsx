import * as React from 'react';
import { Row, Col, Container } from "react-bootstrap";
import { StaticImage } from 'gatsby-plugin-image';

import {
  heroImage,
  heroSection,
  imageColumn,
  row,
  headlineColumn,
  headline,
  subHeading,
} from "./HeroSection.module.scss";
import GetStartedButton from '../../../buttons/GetStartedButton';


const HeroSection: React.FC = () => {
   return (
    <div className={heroSection}>
      <Container>
        <Row className={row}>
          <Col xs="12" md="6" className={headlineColumn}>
            <h1 className={headline}>Individual Investors Can Beat the Market</h1>
            <p className={subHeading}>Obtain lasting wealth with Insightful IR - an easy to use stock analysis app built for the serious individual investor.</p>
            <GetStartedButton />
          </Col>
          <Col xs="12" md="6" className={imageColumn}>
            <StaticImage className={heroImage}
              src="../../../../images/Insightful-IR-Hero-Image.png"
              alt="Insightful IR Hero Image"
              />
          </Col>
        </Row>
      </Container>
    </div>
   );
};

export default HeroSection;