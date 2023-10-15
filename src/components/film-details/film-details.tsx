import { Fragment } from 'react';
import { Film } from '../../types/films';

type FilmDetailsProps = {
  film: Film;
}

function FilmDetails({film}: FilmDetailsProps): JSX.Element {
  const {director, starring, runTime, genre, released} = film;
  const hours = Math.trunc(runTime / 60);
  const minutes = Math.trunc(runTime - hours * 60);

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {starring.map((acter, count, arr) => (
              <Fragment key={acter}>
                {acter}
                {count + 1 !== arr.length ? <>, <br /></> : ''}
              </Fragment>
            ))}
          </span>
        </p>
      </div>
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">
            {hours ? `${hours}h` : ''}
            {hours && minutes ? ' ' : ''}
            {minutes ? `${minutes}m` : ''}
          </span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
}

export default FilmDetails;
