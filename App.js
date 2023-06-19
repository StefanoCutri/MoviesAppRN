
import React from 'react';
import MovieListScreen from './src/components/MovieListScreen';

export default function App() {
  return <MovieListScreen />;
}

// MVP: Presenter
// const MovieListPresenter = ({ movies }) => {
//   const renderMovieItem = ({ item }) => (
//     <SafeAreaView>
//       <View style={{ marginBottom: 20 }}>
//         <Image
//           source={{ uri: `https://image.tmdb.org/t/p/w200${item.poster_path}` }}
//           style={{ width: 200, height: 300 }}
//         />
//         <Text style={{ fontSize: 18 }}>{item.title}</Text>
//       </View>
//     </SafeAreaView>
//   );

//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
//         Popular Movies
//       </Text>
//       <FlatList
//         data={movies}
//         renderItem={renderMovieItem}
//         keyExtractor={(item) => item.id.toString()}
//         contentContainerStyle={{ paddingHorizontal: 20 }}
//       />
//     </View>
//   );
// };

// MVVM: ViewModel
// const MovieListViewModel = () => {
//   const [movies, setMovies] = useState([]);

//   const fetchMovies = async () => {
//     const data = await fetchPopularMovies();
//     setMovies(data.results);
//   };
//   useEffect(() => {
//     fetchMovies();
//   }, []);

//   return <MovieListPresenter movies={movies} />;
// };

// export default function App() {
//   return <MovieListViewModel />;
// }
