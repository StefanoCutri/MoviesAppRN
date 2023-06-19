import React from 'react';
import { View, Text, Image } from 'react-native';

const MovieItem = ({ movie }) => {
  console.log(movie);
 return ( <View style={{ marginBottom: 20, padding: 30}}>
    <Text style={{ fontSize: 18 }}>{movie.title}</Text>
    <Text style={{width: 200}}>{movie.overview}</Text>
    <Image
      source={{ uri: `https://image.tmdb.org/t/p/w200${movie.poster_path}` }}
      style={{ width: 200, height: 300 }}
    />
  </View>)
};

export default MovieItem;
