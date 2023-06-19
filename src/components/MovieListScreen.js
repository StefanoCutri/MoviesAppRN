import React, { useEffect, useState } from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import MovieItem from "./MovieItem";
import MovieUseCase from "../domain/MovieUseCase";

const movieUseCase = new MovieUseCase();

const MovieListScreen = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const movies = await movieUseCase.fetchPopularMovies();
      setMovies(movies);
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  };

  const renderMovieItem = ({ item }) => <MovieItem movie={item} />;

  return (
    <SafeAreaView>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
          Popular Movies
        </Text>
        <FlatList
          data={movies}
          renderItem={renderMovieItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default MovieListScreen;
