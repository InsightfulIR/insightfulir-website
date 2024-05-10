import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { StaticImage } from 'gatsby-plugin-image';

import SectionBlock from '../../shared/section-block/SectionBlock';
import GetStartedButton from '../../../buttons/GetStartedButton';
import {
  buttonContainer,
  container,
  heroImage,
  imageColumn,
  row,
  headlineColumn,
  headline,
  subHeading,
} from "./HeroSection.module.scss";


const HeroSection: React.FC = () => {
   return (
    <SectionBlock className={container}>
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
            loading="eager"
            />
        </Col>
      </Row>
    </SectionBlock>
   );
};

export default HeroSection;