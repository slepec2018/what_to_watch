type FilmBGProps = {
  filmPoster: string;
  filmName: string;
}

function FilmBG({filmPoster, filmName}: FilmBGProps): JSX.Element {
  return (
    <div className="film-card__bg">
      <img src={filmPoster} alt={filmName} />
    </div>
  );
}

export default FilmBG;
