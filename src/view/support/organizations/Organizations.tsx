import { useMemo } from 'react';
import { useOrganizations } from '../../../hooks/support';
import Organization from './organization/Organization';
import './organizations.scss';

const Organizations = () => {
    const ids = useOrganizations();

    const content = useMemo(() => {
        return ids.map((id) => <Organization key={id} id={id} />);
    }, []);

    return (
        <div className="organizations">
            <h1>Unsere Partner-Organisationen</h1>
            <div className="organizations__content">{content}</div>
        </div>
    );
};

Organizations.displayName = 'Organizations';

export default Organizations;
