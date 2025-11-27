import { StyleSheet, View, FlatList } from 'react-native';
import MyListItem from '../components/MyListItem';
import { getAllMovies } from '../data/movie-data';

const MovieBrowser = ({navigation}) => {

    // use MyListItem as renderItem
    const renderItem = ({item}) => (
        <MyListItem itemData={item} navigatorRef={navigation}/>
    );

    return (
        <View style={styles.container}>
            <FlatList 
                style={styles.movieList}
                data={getAllMovies()}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  heading: {
    color: '#0000cc',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  }, 
  
  movieList:{
    width:'100%'
  }

});

export default MovieBrowser;