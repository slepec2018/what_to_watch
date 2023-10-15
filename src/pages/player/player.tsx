import { useNavigate, useParams } from 'react-router-dom';
import NotFound from '../not-found/not-found';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFilm, getLoadingStatus } from '../../store/films-data/selectors';
import { useEffect, useRef, useState } from 'react';
import { fetchFilmAction } from '../../store/api-actions';
import { getFormatTime } from '../../utils';
import Loading from '../loading/loading';
import { AppRoute } from '../../const';

function Player(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [playVideo, setPlayVideo] = useState(true);
  const [remainderTime, setRemainderTime] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const filmId = Number(useParams().id);
  const film = useAppSelector(getFilm);
  const isLoading = useAppSelector(getLoadingStatus);

  useEffect(() => {
    dispatch(fetchFilmAction(filmId));
  }, [dispatch, filmId]);

  useEffect(() => {
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
        setPlayVideo(true);
      }
    }, 100);
  }, []);

  const handleExitClick = () => {
    navigate(AppRoute.Film.replace(':id', filmId.toString()));
  };

  const handlePlayClick = () => {
    setPlayVideo(!playVideo);
    playVideo ? videoRef.current?.pause() : videoRef.current?.play();
  };

  const handleFullScreenClick = () => {
    videoRef.current?.requestFullscreen();
  };

  const handleVideoTimeUpdate = () => {
    if (videoRef.current) {
      setRemainderTime(Math.floor(videoRef.current.duration - videoRef.current.currentTime));
      setVideoProgress(Math.ceil(videoRef.current.currentTime * 100 / videoRef.current.duration));
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  if (film === null) {
    return <NotFound />;
  }

  return (
    <div className="player">
      <video
        src={film.videoLink}
        className="player__video"
        poster={film.backgroundImage}
        ref={videoRef}
        onTimeUpdate={handleVideoTimeUpdate}
        autoPlay
        muted
      />
      <button onClick={handleExitClick} type="button" className="player__exit">Exit</button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={videoProgress} max="100"></progress>
            <div className="player__toggler" style={{ left: `${videoProgress}%` }}>Toggler</div>
          </div>
          <div className="player__time-value">-{getFormatTime(remainderTime)}</div>
        </div>
        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={handlePlayClick}>
            {playVideo ?
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg> :
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>}
            <span>{playVideo ? 'Stop' : 'Play'}</span>
          </button>
          <div className="player__name">{film.name}</div>
          <button type="button" className="player__full-screen" onClick={handleFullScreenClick}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
