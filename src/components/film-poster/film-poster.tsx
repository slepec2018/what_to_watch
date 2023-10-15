import classNames from 'classnames';

type FilmPosterProps = {
  filmPoster: string;
  filmName: string;
  className?: string;
}

function FilmPoster({filmPoster, filmName, className}: FilmPosterProps): JSX.Element {
  return (
    <div className={classNames('film-card__poster', className)}>
      <img src={filmPoster} alt={filmName} width="218" height="327" />
    </div>
  );
}

export default FilmPoster;
