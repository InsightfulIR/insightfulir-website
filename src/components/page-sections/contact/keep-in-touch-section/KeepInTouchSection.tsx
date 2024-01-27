import * as React from 'react';
import SectionBlock from '../../shared/section-block/SectionBlock';
import SocialIcon from '../../shared/social-icons/SocialIcon';
import {
  container,
  heading,
  iconContainer,
  socialIconsContainer,
  subheading,
} from './KeepInTouchSection.module.scss';


const KeepInTouchSection = () => {

  return (
    <SectionBlock className={container}>
      <h2 className={heading}>Let's Keep In Touch</h2>
      <p className={subheading}>
        Don’t have a specific question but want to get to know us better – follow us on your favorite social media platforms.
      </p>
      <div className={socialIconsContainer}>
        <div className={iconContainer}>
          <SocialIcon platform="facebook" />
        </div>
        <div className={iconContainer}>
          <SocialIcon platform="instagram" />
        </div>
        <div className={iconContainer}>
          <SocialIcon platform="twitter" />
        </div>
        <div className={iconContainer}>
          <SocialIcon platform="tiktok" />
        </div>
        <div className={iconContainer}>
          <SocialIcon platform="linkedin" />
        </div>
      </div>
    </SectionBlock>
  );
};

export default KeepInTouchSection;
