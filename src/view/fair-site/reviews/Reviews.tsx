import './reviews.scss';
import { useReviews } from '../../../hooks/review';
import { useMemo } from 'react';
import Review from './review/Review';

const Reviews = () => {
    const ids = useReviews();

    const content = useMemo(() => {
        return ids.map((id) => <Review key={id} id={id} />);
    }, [ids]);

    return (
        <div className="reviews">
            <h1>Warum sich andere für FairSite entschieden haben</h1>
            <div className="reviews__content">{content}</div>
        </div>
    );
};

Reviews.displayName = 'Reviews';

export default Reviews;
