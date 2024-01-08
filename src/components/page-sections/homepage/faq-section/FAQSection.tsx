import * as React from 'react';
import { Link } from 'gatsby';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SectionBlock from '../../shared/section-block/SectionBlock';
import FAQAccordian from '../../shared/faq-accordian/FAQAccordian';
import {
  container,
  title,
} from './FAQSection.module.scss';

const faqs = [
  {
    'question': 'Who is Insightful IR for?',
    'answer': 'Insightful IR is designed for individual investors who want to make informed investment decisions with confidence. Our app simplifies the stock analysis process and provides valuable data, tools, and insights to identify high-quality stocks and build an investment portfolio that aligns with your goals.'
  },
  {
    'question': 'How much does Insightful IR cost?',
    'answer': <>Insightful IR offers two pricing plans for its users. The first is a free plan, which provides access to basic tools and features. The second is a premium plan, which offers additional tools and features to enhance your stock analysis capabilities. Visit our <Link to="/pricing">pricing</Link> page to learn more.</>
  },
  {
    'question': 'What types of data does Insightful IR provide?',
    'answer': 'Insightful IR provides comprehensive stock data, including financial statements, key metrics, valuation history, news articles, and more. Our app also includes powerful analysis tools to help you identify trends, analyze performance, and make informed investment decisions.'
  },
  {
    'question': 'Is Insightful IR easy to use?',
    'answer': 'Yes, our user-friendly interface is designed to make the investing process as smooth and intuitive as possible. With everything just a few clicks away, you can quickly find the information you need to make informed decisions with ease.'
  },
  {
    'question': 'Can I use Insightful IR on my mobile device?',
    'answer': 'Yes, our mobile friendly app can be accessed right from the web browser on your mobile device, so you can access your investment data and analysis tools from anywhere.'
  },
  {
    'question': 'Is my personal and financial information secure with Insightful IR?',
    'answer': 'Yes, we take security very seriously and use industry-standard encryption and security protocols to protect your data.'
  },
  {
    'question': 'What if I have more questions or need help using Insightful IR?',
    'answer': "Our customer support team is here to help. You can contact us anytime through the app or via our contact page, and we'll be happy to assist you with any questions or issues you may have."
  },
]

const FAQSection: React.FC = () => {
  return (
    <SectionBlock className={container}>
      <Row>
        <Col xs="12" md="4" lg="5">
          <h2 className={title}>Frequently Asked Questions</h2>
        </Col>
        <Col xs="12" md="8" lg="7">
          <FAQAccordian faqs={faqs} />
        </Col>
      </Row>
    </SectionBlock>
  );
};

export default FAQSection;
