import * as React from 'react';
import { Icon } from '@iconify/react';

type Props = {
  platform: "facebook" | "instagram" | "twitter" | "tiktok" | "linkedin";
}

const SocialIcon: React.FC<Props> = ({ platform }) => {
  const getUrl = () => {
    switch (platform) {
      case "facebook":
        return "https://www.facebook.com/getinsightfulir";
      case "instagram":
        return "https://www.instagram.com/getinsightfulir";
      case "twitter":
        return "https://twitter.com/getinsightfulir";
      case "tiktok":
        return "https://www.tiktok.com/@getinsightfulir";
      case "linkedin":
        return "https://www.linkedin.com/company/getinsightfulir";
      default:
        return "";
    };
  };

  const getIcon = () => {
    switch (platform) {
      case "facebook":
        return "fa-brands:facebook";
      case "instagram":
        return "fa-brands:instagram";
      case "twitter":
        return "fa6-brands:x-twitter";
      case "tiktok":
        return "fa-brands:tiktok";
      case "linkedin":
        return "fa-brands:linkedin";
      default:
        return "";
    };
  }

  return (
    <a href={getUrl()} target="_blank">
      <Icon icon={getIcon()} height="25px" />
    </a>
  );
};

export default SocialIcon;
