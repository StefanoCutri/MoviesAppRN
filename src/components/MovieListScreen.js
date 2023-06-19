import React, { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import MovieItem from "./MovieItem";
import { observer } from "mobx-react";

const MovieListScreen = (props) => {
  const { movies, fetchMovies } = props.store;

  useEffect(() => {
    fetchMovies(props.movieList);
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <>
          <Text style={styles.title}>{props.movieList} Movies</Text>
          <FlatList
            data={movies}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <MovieItem movie={item} />}
            horizontal
          />
        </>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
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

export default observer(MovieListScreen);
