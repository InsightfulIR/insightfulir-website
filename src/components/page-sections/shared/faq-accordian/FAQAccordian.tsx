import * as React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import {
  answerContainer,
  questionContainer,
  questionHeader,
  questionText,
} from './FAQAccordian.module.scss';

type FAQ = {
  question: string;
  answer: string | JSX.Element;
}

type Props = {
  faqs: FAQ[];
}


const FAQAccordian: React.FC<Props> = ({ faqs }) => {
  return (
    <Accordion>
      {faqs.map((faq, index) => (
        <Accordion.Item eventKey={`${index}`} key={index} className={questionContainer}>
          <Accordion.Header className={questionHeader} as="div">
            <div className={questionText}>
              {faq.question}
            </div>
          </Accordion.Header>
          <Accordion.Body className={answerContainer}>
            <p>{faq.answer}</p>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default FAQAccordian;
