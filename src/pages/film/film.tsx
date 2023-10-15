import { useParams } from 'react-router-dom';
import NotFound from '../not-found/not-found';
import Catalog from '../../components/catalog/catalog';
import { RELATED_DISPLAY_COUNT } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilmAction, fetchFilmReviewsAction, fetchSimilarFilmsAction } from '../../store/api-actions';
import { useEffect } from 'react';
import { getFilm, getFilmReviews, getLoadingStatus, getSimilarFilm } from '../../store/films-data/selectors';
import PageContentLayout from '../../components/page-content-layout/page-content-layout';
import FilmCard from '../../components/film-card/film-card';
import Loading from '../loading/loading';

function Film(): JSX.Element {
  const dispatch = useAppDispatch();

  const filmId = Number(useParams().id);

  useEffect(() => {
    dispatch(fetchFilmAction(filmId));
    dispatch(fetchSimilarFilmsAction(filmId));
    dispatch(fetchFilmReviewsAction(filmId));
  }, [dispatch, filmId]);

  const film = useAppSelector(getFilm);
  const similarFilm = useAppSelector(getSimilarFilm);
  const filmReviews = useAppSelector(getFilmReviews);
  const isLoading = useAppSelector(getLoadingStatus);

  if (isLoading) {
    return <Loading />;
  }

  if (film === null) {
    return <NotFound />;
  }

  return (
    <>
      <FilmCard film={film} reviews={filmReviews} />

      <PageContentLayout title="More like this" className="catalog--like-this">

        <Catalog films={similarFilm.slice(0, RELATED_DISPLAY_COUNT)} />

      </PageContentLayout>

    </>
  );
}

export default Film;
