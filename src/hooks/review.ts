import { useMemo } from 'react';
import { REVIEWS } from '../constants/review';

export const useReviews = () => {
    return useMemo(() => REVIEWS.map(({ id }) => id), []);
};

export const useReview = (reviewId: string) => {
    return useMemo(() => REVIEWS.find(({ id }) => id === reviewId), []);
};
