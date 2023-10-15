import { useState, ChangeEvent, FormEvent } from 'react';
import RatingInput from '../rating-input/rating-input';
import { CommentLength, RATING_INPUT_COUNT, RequestStatus } from '../../const';
import { publishFilmReviewAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getReviewsPublishStatus } from '../../store/films-data/selectors';

type ReviewFormProps = {
  filmId: number;
}

function ReviewForm({filmId}: ReviewFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const publishReviewsStatus = useAppSelector(getReviewsPublishStatus);

  const [formData, setFormData] = useState({
    rating: 0,
    comment: '',
    filmId: filmId,
  });

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target;

    if (name === 'comment' && (value.length < CommentLength.Min || value.length > CommentLength.Max)) {
      evt.target.setCustomValidity('The text of the review must be at least 50 and no more than 400 characters.');
    } else {
      evt.target.setCustomValidity('');
    }

    setFormData({...formData, [name]: value});
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(publishFilmReviewAction(formData));
    if (publishReviewsStatus === RequestStatus.Fulfilled) {
      setFormData({
        rating: 0,
        comment: '',
        filmId: filmId,
      });
    }
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleFormSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {[...Array(RATING_INPUT_COUNT).keys()].map((title, i, arr) => (
            <RatingInput
              key={title}
              count={arr.length - i}
              currRating={formData.rating}
              onChange={handleInputChange}
              disabled={publishReviewsStatus === RequestStatus.Pending}
            />
          ))}
        </div>
      </div>
      <div className="add-review__text" style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}>
        <textarea
          className="add-review__textarea"
          name="comment"
          id="comment"
          placeholder="Review text"
          value={formData.comment}
          onChange={handleInputChange}
          disabled={publishReviewsStatus === RequestStatus.Pending}
        />
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            disabled={
              publishReviewsStatus === RequestStatus.Pending ||
              formData.rating === 0 ||
              formData.comment.length < CommentLength.Min ||
              formData.comment.length > CommentLength.Max
            }
          >
            {publishReviewsStatus === RequestStatus.Pending ? 'Loading' : 'Post'}
          </button>
        </div>
      </div>
    </form>
  );
}

export default ReviewForm;
