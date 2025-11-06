/**
 * - The flower list screen will load a list of flower objects from the local data file
 * - In a production example we'd be more likely to get this from a RESTful API via Ajax
 * - The flatlist needs a render method to show how to display each list item
 * - In this case we'll have that leverage a component to help to keep our code more descrete
 */
import { StyleSheet, View, Text, FlatList } from 'react-native';

// data file used to mock requests
import { getAllFlowers } from '../data/flower-data';
import MyListItem from '../components/MyListitem';

export default function FlowerListScreen({ navigation }) {

  {/* add the renderItem reference here it needs to be in the scope of the FlatList that uses it */}
  const renderItem = ({item}) => (
    <MyListItem itemData={item} navigatorRef={navigation}/>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Browse our list</Text>

      {/* FlatList component will go here */}
      <FlatList 
        style={styles.flowerList}
        data={getAllFlowers()}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  
  flowerList:{
    width:'100%'
  }

});