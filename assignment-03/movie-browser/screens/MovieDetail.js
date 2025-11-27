import { StyleSheet, View, Text, Image, } from 'react-native';

import { getMovieById } from "../data/movie-data";

const MovieDetail = ({ route }) => {
    // retrieve detailId from route
    const {detailId} = route.params;

    const movie = getMovieById(detailId);

    return (
        <View style={styles.container}>
            <Image style={styles.movieImage} source={{uri: movie.imageUrl}}/>
            <Text style={styles.heading}>{movie.title}</Text>
    
            <Text style={styles.movieDirector}>{movie.director}</Text>
            <Text style={styles.text}>{movie.description}</Text>
        </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '20'
  },

  heading: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 0,
  },

  movieImage: {
    aspectRatio: 10/16,
    height: 350,
    width: '100%'
  },
  movieDirector: {
    color: '#999',
    marginBottom: 10
  },    
  text: {
    color: '#fff'
  }
});

export default MovieDetail;