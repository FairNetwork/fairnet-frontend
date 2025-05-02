import { TECHNOLOGIES } from '../constants/technologie';
import { useMemo } from 'react';

export const useTechnologies = () => {
    return useMemo(() => TECHNOLOGIES.map(({ id }) => id), []);
};

export const useTechnologie = (technologieId: string) => {
    return useMemo(() => TECHNOLOGIES.find(({ id }) => id === technologieId), []);
};
