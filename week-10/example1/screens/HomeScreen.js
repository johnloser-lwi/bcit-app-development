/**
 * - This is the home page for the app
 * - It's only purpose is to provide a means to load the list but it could be used to 
 *   authenticate users and either store that status in state or pass it to subsequent views
 */
import { StyleSheet, View, Text, Image, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Image style={styles.titleImage} source={require('../assets/lab-assets/flower-display.png')} />
      <Text style={styles.heading}>Welcome to Flowers R'Us</Text>

      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit accumsan neque, quis dignissim dui ultrices ac. Donec euismod eros eget lectus ultricies condimentum. Phasellus pulvinar elit lectus, a congue justo tempus sed.</Text>

      {/* Button to load list view to go here */}
      <Button 
        title='Browse Flowers'
        onPress={() => navigation.navigate("FlowerList")}
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

  titleImage: {
    aspectRatio: 1,
    height: 400,
    width: '100%'
  },
});