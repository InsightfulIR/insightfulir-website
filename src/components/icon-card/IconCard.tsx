import * as React from 'react';
import { Icon } from '@iconify/react';

import { icon, heading } from './IconCard.module.scss';

type Props = {
  iconName: string;
  title: string;
  description: string;
}

const IconCard: React.FC<Props> = ({ iconName, title, description }) => (
  <div className="icon-card">
    <Icon icon={iconName} width="45px" className={icon} />
    <h3 className={heading}>{title}</h3>
    <div className="icon-card__description">
      {description}
    </div>
  </div>
);

export default IconCard;
