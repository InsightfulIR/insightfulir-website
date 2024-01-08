import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FAQAccordian from '../../shared/faq-accordian/FAQAccordian';
import ContactUsButton from '../../../buttons/ContactUsButton';
import SectionBlock from '../../shared/section-block/SectionBlock';
import {
  contactHeading,
  contactSection,
  container,
  heading,
  subheading,
} from './PricingFAQSection.module.scss';

const faqs = [
  {
    "question": "Is the Basic Plan really free?",
    "answer": "Yes! We believe that successful investing should be accessible for all. That’s why the Basic plan will be free forever. So, even if you are just getting started with investing, we have a plan for you."
  },
  {
    "question": "Which plan is right for me?",
    "answer": "If you are just starting out with stock analysis, the Basic plan should be enough to get started and learn the fundamentals. Once you are comfortable with the fundamentals, the Premium plan is the best value for performing in-depth analysis at a low monthly price."
  },
  {
    "question": "Do you offer an annual plan?",
    "answer": "Not yet, but we are working on offering a discounted annual plan in the near future. You will be able to switch to the annual plan at any time once it becomes available."
  },
  {
    "question": "Can I cancel at any time?",
    "answer": "Yes! You can cancel hassle-free at any time, right from your Insightful IR account settings."
  },
]

const PricingFAQSection: React.FC = () => {
  return (
    <SectionBlock className={container}>
      <Row>
        <Col xs="12" md="6">
          <h2 className={heading}>Have Pricing Questions?</h2>
          <h3 className={subheading}>We have answers.</h3>
        </Col>
        <Col xs="12" md="6">
          <FAQAccordian faqs={faqs} />
          <div className={contactSection}>
            <h4 className={contactHeading}>Something else on your mind?</h4>
            <ContactUsButton />
          </div>
        </Col>
      </Row>
    </SectionBlock>
  );
};

export default PricingFAQSection;
