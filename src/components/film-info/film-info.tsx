import { Film } from '../../types/films';
import FilmInfoButtons from '../film-info-buttons/film-info-buttons';

type FilmInfoProps = {
  film: Film;
}

function FilmInfo({film}: FilmInfoProps): JSX.Element {
  return (
    <div className="film-card__desc">
      <h2 className="film-card__title">{film.name}</h2>
      <p className="film-card__meta">
        <span className="film-card__genre">{film.genre}</span>
        <span className="film-card__year">{film.released}</span>
      </p>
      <FilmInfoButtons filmId={film.id} />
    </div>
  );
}

export default FilmInfo;
