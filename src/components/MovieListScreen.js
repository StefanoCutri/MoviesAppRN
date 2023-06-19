import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import MovieItem from './MovieItem';
import { fetchMovies } from '../data/tmdbApi';

const MovieListScreen = ({ movieList }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies(movieList)
      .then((movies) => setMovies(movies))
      .catch((error) => console.error(`Error fetching ${movieList} movies:`, error));

  }, [movieList]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{movieList} Movies</Text>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MovieItem movie={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default MovieListScreen;
