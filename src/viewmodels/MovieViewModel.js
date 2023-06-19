import Movie from "../models/Movie";
import { fetchApiMovies } from "../data/tmdbApi";
import { action, observable, runInAction } from "mobx";

class MovieViewModel {
  @observable movies = [];
  @observable isLoading = false;
  @observable error = null;

  @action async fetchMovies(movieList) {
    try {
      this.isLoading = true;
      const movieData = await fetchApiMovies(movieList);
      console.log("MOVIEDATA",movieData);
      runInAction(() => {
        const moviesFetched = movieData.map(
          (data) =>
            new Movie(
              data.id,
              data.title,
              data.poster_path,
              data.vote_average,
              data.overview
            )
        );
        this.movies = moviesFetched;
        this.isLoading = false;
      });
    } catch (error) {
      runInAction(() => {
        console.error(`Error fetching ${movieList} movies:`, error);
        this.error = error;
        this.isLoading = false;
      });
      throw error;
    }
  }
}

export default MovieViewModel;
