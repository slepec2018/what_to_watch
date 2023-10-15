import Catalog from '../../components/catalog/catalog';
import UserPageLayout from '../../components/user-page-layout/user-page-layout';
import { useAppSelector } from '../../hooks';
import { getFavoriteFilms } from '../../store/films-data/selectors';

function MyList(): JSX.Element {
  const films = useAppSelector(getFavoriteFilms);
  const favoriteFilmsCount = useAppSelector(getFavoriteFilms).length;

  return (
    <UserPageLayout title="My list" favoriteFilmsCount={favoriteFilmsCount}>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <Catalog films={films} />
      </section>
    </UserPageLayout>
  );
}

export default MyList;
