import * as React from 'react';

import SectionBlock from '../../shared/section-block/SectionBlock';
import {
  container,
  content,
  headline,
} from './InfoSection.module.scss';


const InfoSection: React.FC = () => {
  return (
    <SectionBlock className={container}>
      <div className={content}>
        <h3 className={headline}>
          Investing in the stock market can be intimidating, but it doesn't have to be.
        </h3>
        <p>
          With Insightful IR, you can say goodbye to the time-consuming and daunting task of poring over mountains of data and endless financial reports. Our app simplifies the stock analysis process and helps you focus on what really matters: finding high-quality stocks that align with your investment goals.
        </p>
        <p>
          By providing easy access to valuable data, tools, and insights, Insightful IR saves you time and gives you the confidence to make informed investment decisions. Whether you’re a seasoned investor or just starting out, Insightful IR is the perfect tool to help you take your portfolio to the next level.
        </p>
      </div>
    </SectionBlock>
  );
};

export default InfoSection;
