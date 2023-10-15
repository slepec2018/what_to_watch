import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type BreadcrumbsProps = {
  filmName: string;
  filmId: number;
};

function Breadcrumbs({filmName, filmId}: BreadcrumbsProps): JSX.Element {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link
            to={AppRoute.Film.replace(':id', filmId.toString())}
            className="breadcrumbs__link"
          >
            {filmName}
          </Link>
        </li>
        <li className="breadcrumbs__item">
          <Link
            to={AppRoute.AddReview.replace(':id', filmId.toString())}
            className="breadcrumbs__link"
          >
            Add review
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
