import { Film } from '../../types/films';
import { getTextByRating } from '../../utils';

type FilmOverviewProps = {
  film: Film;
}

function FilmOverview({film}: FilmOverviewProps): JSX.Element {
  const {rating, description, director, starring, scoresCount} = film;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getTextByRating(rating)}</span>
          <span className="film-rating__count">{scoresCount}</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director">
          <strong>Director: {director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>
            Starring: {starring.join(', ')}
          </strong>
        </p>
      </div>
    </>
  );
}

export default FilmOverview;
