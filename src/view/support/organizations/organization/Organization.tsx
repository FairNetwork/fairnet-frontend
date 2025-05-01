import { FC } from 'react';
import { useOrganization } from '../../../../hooks/support';
import Button, { ButtonType } from '../../../../components/shared/button/Button';
import './organization.scss';

interface OrganizationCardProps {
    id: string;
}

const OrganizationCard: FC<OrganizationCardProps> = ({ id }) => {
    const organization = useOrganization(id);

    if (!organization) {
        return null;
    }

    const { name, website, description } = organization;

    const handleClick = () => {
        window.open(website, '_blank');
    };

    return (
        <div className="organization">
            <h3>{name}</h3>
            <p>{description}</p>
            <div className="organization__button">
                <Button onClick={handleClick} type={ButtonType.Outline}>
                    Website besuchen
                </Button>
            </div>
        </div>
    );
};

OrganizationCard.displayName = 'OrganizationCard';

export default OrganizationCard;
