import Header from '../header/header';
import FilmInfo from '../film-info/film-info';
import FilmPoster from '../film-poster/film-poster';
import FilmBG from '../film-bg/film-bg';
import FilmTabs from '../film-tabs/film-tabs';
import { Film } from '../../types/films';
import { Reviews } from '../../types/reviews';

type FilmCardProps = {
  film: Film;
  reviews: Reviews;
}

function FilmCard({film, reviews}: FilmCardProps): JSX.Element {
  return (
    <section className="film-card film-card--full" style={{ backgroundColor: film.backgroundColor }}>
      <div className="film-card__hero">

        <FilmBG filmPoster={film.backgroundImage} filmName={film.name} />

        <h1 className="visually-hidden">WTW</h1>

        <Header className="film-card__head" />

        <div className="film-card__wrap">
          <FilmInfo film={film} />
        </div>
      </div>

      <div className="film-card__wrap film-card__translate-top">
        <div className="film-card__info">

          <FilmPoster
            filmPoster={film.posterImage}
            filmName={film.name}
            className='film-card__poster--big'
          />

          <FilmTabs film={film} reviews={reviews} />

        </div>
      </div>
    </section>
  );
}

export default FilmCard;
