import React, { useMemo } from 'react';
import './impact.scss';
import { useImpact } from '../../../hooks/support';
import { AnimatedCounter } from '../../../components/shared/animated-counter/AnimatedCounter';

export const Impact = () => {
    const { year, data } = useImpact();

    const content = useMemo(() => {
        return data.map(({ label, amount, suffix }) => (
            <div key={label} className="impact__content__card">
                <p className="impact__content__card__amount">
                    <AnimatedCounter to={amount} suffix={suffix} />
                </p>
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
