import { useState } from 'react';
import Movie from '../models/Movie';

class MovieViewModel {
  constructor() {
    this.movies = [];
  }

  async fetchMovies(movieList) {
    try {
      const movieData = await fetchMovies(movieList);
      console.log(movieData);
      const movies = movieData.map((data) => new Movie(data.id, data.title, data.poster, data.vote_average, data.overview));
      this.movies = movies;
    } catch (error) {
      console.error(`Error fetching ${movieList} movies:`, error);
      throw error;
    }
  }
}

export default MovieViewModel;
