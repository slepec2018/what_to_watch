import { ALL_GENRES, CARD_DISPLAY_COUNT, GENRE_DISPLAY_COUNT } from '../../const';
import Catalog from '../../components/catalog/catalog';
import Genres from '../../components/genres/genres';
import { useAppSelector } from '../../hooks';
import MoreButton from '../../components/more-button/more-butten';
import { useEffect, useState } from 'react';
import { getFilms, getPromoFilm } from '../../store/films-data/selectors';
import { getGenre } from '../../store/films-process/selectors';
import PageContentLayout from '../../components/page-content-layout/page-content-layout';
import FilmCardPromo from '../../components/film-card-promo/film-card-promo';
import Loading from '../../pages/loading/loading';
import { getLoadingStatus } from '../../store/films-data/selectors';


function Main(): JSX.Element {
  const [showCount, setShowCount] = useState<number>(CARD_DISPLAY_COUNT);

  const films = useAppSelector(getFilms);
  const promoFilm = useAppSelector(getPromoFilm);
  const selectedGenre = useAppSelector(getGenre);
  const isLoading = useAppSelector(getLoadingStatus);

  useEffect(() => {
    setShowCount(CARD_DISPLAY_COUNT);
  }, [selectedGenre]);

  const genres = [ALL_GENRES, ...new Set(films.map((film) => film.genre))];

  const filmsByGenre = selectedGenre === ALL_GENRES ? films : films.filter((film) => film.genre === selectedGenre);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {promoFilm && <FilmCardPromo film={promoFilm} />}

      <PageContentLayout title="Catalog" hideTitle>

        <Genres genres={genres.slice(0, GENRE_DISPLAY_COUNT)} selectedGenre={selectedGenre} />

        <Catalog films={filmsByGenre.slice(0, showCount)} />

        {filmsByGenre.length > showCount && (
          <MoreButton showCount={showCount} setShowCount={setShowCount} />
        )}

      </PageContentLayout>

    </>
  );
}

export default Main;
