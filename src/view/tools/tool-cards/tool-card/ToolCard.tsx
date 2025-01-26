import './toolCard.scss';
import { FC } from 'react';

interface ToolCardProps {
    image: string;
    name: string;
}

const ToolCard: FC<ToolCardProps> = ({ name,image }) => {
    return (
        <div className="tool-card">
            <img src={image} alt={`${name} image`} />
            <div className="tool-card__content">
                <div className="tool-card__content__name">
                    {name}
                </div>
            </div>
        </div>
    );
};

ToolCard.displayName = 'ToolCard';

export default ToolCard;
