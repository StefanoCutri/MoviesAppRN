import React from 'react';
import { View, Text, Image } from 'react-native';

const MovieItem = ({ movie }) => (
  <View style={{ marginBottom: 20 }}>
    <Image
      source={{ uri: `https://image.tmdb.org/t/p/w200${movie.poster_path}` }}
      style={{ width: 200, height: 300 }}
    />
    <Text style={{ fontSize: 18 }}>{movie.title}</Text>
  </View>
);

export default MovieItem;
