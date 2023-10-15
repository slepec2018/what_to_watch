import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import VideoPlayer from '../video-player/video-player';
import { memo, useEffect, useState } from 'react';

type FilmCardSmallProps = {
  id: number;
  name: string;
  previewImage: string;
  previewVideoLink: string;
}

function FilmCardSmall({id, name, previewImage, previewVideoLink}: FilmCardSmallProps): JSX.Element {
  const [playVideo, setPlayVideo] = useState<boolean>(false);
  const [cardMouseOver, setCardMouseOver] = useState<boolean>(false);

  useEffect(()=> {
    if (cardMouseOver) {
      const timer = setTimeout(() => setPlayVideo(true), 1000);

      return () => {
        clearTimeout(timer);
        setPlayVideo(false);
      };
    } else {
      setPlayVideo(false);
    }
  }, [cardMouseOver]);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => setCardMouseOver(true)}
      onMouseLeave={() => setCardMouseOver(false)}
    >
      <Link to={AppRoute.Film.replace(':id', id.toString())} className="small-film-card__image" style={{ display: 'block' }}>
        {playVideo
          ? <VideoPlayer url={previewVideoLink} poster={previewImage} />
          : <img src={previewImage} alt={name} width="280" height="175" /> }
      </Link>
      <h3 className="small-film-card__title">
        <Link to={AppRoute.Film.replace(':id', id.toString())} className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
}

export default memo(FilmCardSmall);
