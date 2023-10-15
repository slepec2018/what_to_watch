import { format } from 'date-fns';
import { Review } from '../../types/reviews';

type ReviewProps = {
  review: Review;
}

function FilmReview({review}: ReviewProps): JSX.Element {
  const {comment, date, rating, user} = review;
  const dateObj = new Date(date);

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>
        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={format(dateObj, 'yyyy-MM-dd')}>
            {format(dateObj, 'MMMM dd, yyyy')}
          </time>
        </footer>
      </blockquote>
      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default FilmReview;
