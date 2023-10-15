type VideoPlayerProps = {
  url: string;
  poster: string;
}

function VideoPlayer({url, poster}: VideoPlayerProps): JSX.Element {
  return (
    <video autoPlay muted poster={poster} width="280" height="175">
      <source src={url} />
    </video>
  );
}

export default VideoPlayer;
