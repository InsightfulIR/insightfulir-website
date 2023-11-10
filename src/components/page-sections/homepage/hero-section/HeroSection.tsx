import * as React from 'react';
import { Row, Col, Container } from "react-bootstrap";
import { StaticImage } from 'gatsby-plugin-image';

import {
  buttonContainer,
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
    <Container fluid className={heroSection}>
      <Row className={row}>
        <Col xs="12" lg="6" className={headlineColumn}>
          <h1 className={headline}>The Intuitive Stock Analysis App for Individual Investors</h1>
          <p className={subHeading}>Gain confidence in your investment decisions with Insightful IR.</p>
          <div className={buttonContainer}>
            <GetStartedButton />
          </div>
        </Col>
        <Col xs="12" lg="6" className={imageColumn}>
          <StaticImage className={heroImage}
            src="../../../../images/Insightful-IR-Hero-Image.png"
            alt="Insightful IR Hero Image"
            />
        </Col>
      </Row>
    </Container>
   );
};

export default HeroSection;