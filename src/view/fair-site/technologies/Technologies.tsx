import './technologies.scss';
import { useMemo } from 'react';
import { useTechnologies } from '../../../hooks/technologie';
import Technologie from './technologie/Technologie';

const Technologies = () => {
    const ids = useTechnologies();

    const content = useMemo(() => {
        return ids.map((id) => <Technologie key={id} id={id} />);
    }, []);

    return (
        <div className="technologies">
            <h1>Technologie, die für Dich arbeitet</h1>
            <div className="technologies__content">{content}</div>
        </div>
    );
};

Technologies.displayName = 'Technologies';

export default Technologies;
