import React, { useMemo } from 'react';
import './impact.scss';
import { useImpact } from '../../../hooks/support';

export const Impact = () => {
    const { year, data } = useImpact();

    const content = useMemo(() => {
        return data.map(({ label, amount }) => (
            <div key={label} className="impact__content__card">
                <p className="impact__content__card__amount">{amount}</p>
                <p className="impact__content__card__label">{label}</p>
            </div>
        ));
    }, []);

    return (
        <div className="impact">
            <h2>Unsere Wirkung im Jahr {year}</h2>
            <div className="impact__content">{content}</div>
        </div>
    );
};

Impact.displayName = 'Impact';

export default Impact;
