import { useMemo } from 'react';
import { ORGANIZATIONS } from '../constants/support';

export const useOrganizations = () => {
    return useMemo(() => ORGANIZATIONS.map(({ id }) => id), []);
};

export const useOrganization = (organizationId: string) => {
    return useMemo(() => ORGANIZATIONS.find(({ id }) => id === organizationId), []);
};

export const useImpact = () => {
    const year = '2025';

    const data = [
        { amount: 15000, label: 'Gesamtspenden', suffix: '€' },
        { amount: 4, label: 'Unterstützte Projekte' },
        { amount: 250, label: 'Erreichte Kinder', suffix: '+' }
    ];

    return { year, data };
};
