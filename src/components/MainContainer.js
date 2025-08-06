import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
const MainContainer = () => {
  const movies = useSelector((store => store.movies?.nowPlayingMovies));
  console.log(movies);
  // if (!movies) return;
  // const mainMovie = movies[0];
  // console.log(mainMovie);

  return (
    <div>
      <VideoBackground />
      <VideoTitle />
    </div>
  )
};
export default MainContainer;