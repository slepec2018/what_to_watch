import { useParams } from 'react-router-dom';
import FilmBG from '../../components/film-bg/film-bg';
import FilmPoster from '../../components/film-poster/film-poster';
import Header from '../../components/header/header';
import ReviewForm from '../../components/review-form/review-form';
import { useAppDispatch, useAppSelector } from '../../hooks';
import NotFound from '../not-found/not-found';
import { fetchFilmAction } from '../../store/api-actions';
import { useEffect } from 'react';
import { getFilm, getLoadingStatus } from '../../store/films-data/selectors';
import Loading from '../loading/loading';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';

function Review(): JSX.Element {
  const dispatch = useAppDispatch();

  const filmId = Number(useParams().id);

  useEffect(() => {
    dispatch(fetchFilmAction(filmId));
  }, [dispatch, filmId]);

  const film = useAppSelector(getFilm);
  const isLoading = useAppSelector(getLoadingStatus);

  if (isLoading) {
    return <Loading />;
  }

  if (film === null) {
    return <NotFound />;
  }

  return (
    <section className="film-card film-card--full" style={{ backgroundColor: film.backgroundColor }}>
      <div className="film-card__header">
        <FilmBG filmPoster={film.backgroundImage} filmName={film.name} />

        <h1 className="visually-hidden">WTW</h1>

        <Header>
          <Breadcrumbs filmName={film.name} filmId={film.id} />
        </Header>

        <FilmPoster
          filmPoster={film.posterImage}
          filmName={film.name}
          className='film-card__poster--small'
        />
      </div>

      <div className="add-review">
        <ReviewForm filmId={film.id} />
      </div>

    </section>
  );
}

export default Review;
