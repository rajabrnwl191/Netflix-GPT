import { React, useEffect } from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlaying';
import MainContainer from './MainContainer';
const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <div>
        <Header />
        <MainContainer />
      </div>
    </div>
  )
}

export default Browse;