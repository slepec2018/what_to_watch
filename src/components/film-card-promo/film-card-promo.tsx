import Header from '../header/header';
import FilmInfo from '../film-info/film-info';
import FilmPoster from '../film-poster/film-poster';
import FilmBG from '../film-bg/film-bg';
import { Film } from '../../types/films';
import { memo } from 'react';

type FilmCardPromoProps = {
  film: Film;
}

function FilmCardPromo({film}: FilmCardPromoProps): JSX.Element {
  return (
    <section className="film-card">

      <FilmBG filmPoster={film.backgroundImage} filmName={film.name} />

      <h1 className="visually-hidden">WTW</h1>

      <Header className="film-card__head" />

      <div className="film-card__wrap">
        <div className="film-card__info">

          <FilmPoster filmPoster={film.posterImage} filmName={film.name} />

          <FilmInfo film={film} />

        </div>
      </div>
    </section>
  );
}

export default memo(FilmCardPromo);
