import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IconCard from '../../../icon-card/IconCard';

const benefits = [
  {
    iconName: "icon",
    title: "Better Results",
    description: "Insightful IR helps you make better investment decisions. Our app provides valuable data, tools, and insights to identify high-quality stocks and build an investment portfolio that aligns with your goals."
  },
  {
    iconName: "icon",
    title: "Less Stress",
    description: "With Insightful IR, you can sleep well at night knowing that you have a portfolio of high-quality stocks that you can trust. By gaining confidence in investment decisions and staying on track with your long-term goals, the app reduces stress and anxiety related to investing."
  },
  {
    iconName: "icon",
    title: "Long-Term Focus",
    description: "With Insightful IR, you can easily analyze long-term trends in a company's underlying fundamentals. By filtering out short-term noise and focusing on the metrics that matter, the app empowers you to achieve more consistent returns and reduce the impact of market volatility."
  },
  {
    iconName: "icon",
    title: "Less Noise",
    description: "Reduce distractions and focus on the big picture. Insightful IR filters out the noise of short-term predictions and instead helps you analyze the fundamental metrics that drive long-term performance."
  },
  {
    iconName: "icon",
    title: "All data in one place",
    description: "Insightful IR makes it easy to access all the data you need for comprehensive stock analysis in one convenient location. No more jumping from source to source to find the information you need - everything is right at your fingertips."
  },
  {
    iconName: "icon",
    title: "Modern Interface",
    description: "The app's user-friendly interface is designed to make the investing process as smooth and intuitive as possible. With everything just a few clicks away, you can quickly find the information needed and make informed decisions with ease."
  }
]


const BenefitsSection: React.FC = () => {
  return (
    <div>
      <h2>Why Insightful IR?</h2>
      <Row>
        {benefits.map(benefit => (
          <Col xs={12} md={6} lg={4}>
            <IconCard
              iconName={benefit.iconName}
              title={benefit.title}
              description={benefit.description}
            />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default BenefitsSection;
