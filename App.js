import React, { useEffect, useState } from 'react';
import MovieListScreen from './src/components/MovieListScreen';

const App = () => {
  const [movieLists, setMovieLists] = useState([]);

  useEffect(() => {
    // Define the movie lists you want to render
    const lists = ['popular', 'top_rated', 'now_playing'];

    setMovieLists(lists);
  }, []);

  return (
    <>
      {movieLists.map((list) => (
        <MovieListScreen key={list} movieList={list} />
      ))}
    </>
  );
};

export default App;
