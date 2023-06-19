import { useState } from 'react';
import Movie from '../models/Movie';
import { fetchMovies } from '../data/tmdbApi';

class MovieViewModel {
  constructor() {
    this.movies = [];
  }

  async fetchMovies(movieList) {
    try {
      console.log(movieList);
      const movieData = await fetchMovies(movieList);
      const movies = movieData.map((data) => new Movie(data.id, data.title, data.poster, data.vote_average, data.overview));
      this.movies = movies;
    } catch (error) {
      console.error(`Error fetching ${movieList} movies:`, error);
      throw error;
    }
  }
}

export default MovieViewModel;
