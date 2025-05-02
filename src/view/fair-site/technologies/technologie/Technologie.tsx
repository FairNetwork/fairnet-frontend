import './technologie.scss';
import { FC } from 'react';
import { useTechnologie } from '../../../../hooks/technologie';
import Icon from '../../../../components/shared/icon/Icon';

interface TechnologieProps {
    id: string;
}

const Technologie: FC<TechnologieProps> = ({ id }) => {
    const technologie = useTechnologie(id);

    if (!technologie) {
        return null;
    }

    const { icon, title, description } = technologie;

    return (
        <div className="technologie">
            <div className="technologie__icon">
                <Icon icon={icon} color="var(--primary-color)" size={20} />
            </div>
            <div className="technologie__content">
                <h3 className="technologie__content__title">{title}</h3>
                <p className="technologie__content__description">{description}</p>
            </div>
        </div>
    );
};

Technologie.displayName = 'Technologie';

export default Technologie;
