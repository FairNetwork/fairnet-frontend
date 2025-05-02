import './review.scss';
import { FC, useMemo } from 'react';
import Icon from '../../../../components/shared/icon/Icon';
import { useReview } from '../../../../hooks/review';

interface ReviewProps {
    id: string;
}

const Review: FC<ReviewProps> = ({ id }) => {
    const review = useReview(id);

    if (!review) {
        return null;
    }

    const { rating, text } = review;

    const stars = useMemo(() => {
        return [...Array(5)].map((_, i) => (
            <Icon
                icon={`${rating <= i ? 'far' : 'fas'} fa-star`}
                key={i}
                color="var(--primary-color)"
            />
        ));
    }, [rating]);

    return (
        <div className="review">
            <div className="review__stars">{stars}</div>
            <p className="review__text">"{text}"</p>
        </div>
    );
};

Review.displayName = 'Review';

export default Review;
