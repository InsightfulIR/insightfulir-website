import * as React from 'react';

type Props = {
    iconName: string;
    title: string;
    description: string;
}

const IconCard: React.FC<Props> = ({ iconName, title, description }) => (
    <div className="icon-card">
        <div className="icon-card__icon">
            {iconName}
        </div>
        <div className="icon-card__title">
            {title}
        </div>
        <div className="icon-card__description">
            {description}
        </div>
    </div>
);

export default IconCard;
