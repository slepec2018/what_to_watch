import { Reviews } from '../../types/reviews';
import Review from '../film-review/film-review';

type FilmReviewsProps = {
  reviews: Reviews;
}

function FilmReviews({reviews}: FilmReviewsProps): JSX.Element {
  const indexToSplit = Math.ceil(reviews.length / 2);
  const firstColReviews = reviews.slice(0, indexToSplit);
  const secondColReviews = reviews.slice(indexToSplit);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {firstColReviews.map((item) => <Review key={item.id} review={item} />)}
      </div>
      <div className="film-card__reviews-col">
        {secondColReviews.map((item) => <Review key={item.id} review={item} />)}
      </div>
    </div>
  );
}

export default FilmReviews;
