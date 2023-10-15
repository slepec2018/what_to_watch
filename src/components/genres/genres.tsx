import { useAppDispatch } from '../../hooks';
import classNames from 'classnames';
import { changeGenre } from '../../store/films-process/films-process';
import { memo } from 'react';

type GenresProps = {
  genres: string[];
  selectedGenre: string;
}

function Genres({genres, selectedGenre}: GenresProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li key={genre} className={classNames('catalog__genres-item', {'catalog__genres-item--active': genre === selectedGenre})}>
          <a
            href="/"
            className="catalog__genres-link"
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(changeGenre(genre));
            }}
          >
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default memo(Genres);
