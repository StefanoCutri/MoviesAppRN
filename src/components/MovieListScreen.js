import React, { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import MovieItem from "./MovieItem";
import MovieViewModel from "../viewmodels/MovieViewModel";

const MovieListScreen = ({ movieList }) => {
  const movieViewModel = new MovieViewModel();
  const { movies, isLoading, fetchMovies } = movieViewModel;
  useEffect(() => {
    fetchMovies(movieList);
  }, [fetchMovies, movieList]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="#000"
          style={styles.loadingIndicator}
        />
      ) : (
        <>
          <Text style={styles.title}>{movieList} Movies</Text>
          <FlatList
            data={movies}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <MovieItem movie={item} />}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

export default MovieListScreen;
