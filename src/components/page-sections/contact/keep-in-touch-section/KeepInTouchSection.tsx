import * as React from 'react';
import {
  container,
  heading,
  subheading,
} from './KeepInTouchSection.module.scss';


const KeepInTouchSection = () => {
  return (
    <div className={container}>
      <h2 className={heading}>Let's Keep In Touch</h2>
      <p className={subheading}>
        Don’t have a specific question but want to get to know us better – follow us on your favorite social media platforms.
      </p>
      <ul>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Twitter</li>
        <li>Tik Tok</li>
        <li>LinkedIn</li>
      </ul>
    </div>
  );
};

export default KeepInTouchSection;
