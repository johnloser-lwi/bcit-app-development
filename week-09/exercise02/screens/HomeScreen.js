import { StyleSheet, View, Text, Image, Button, ImageBackground } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <ImageBackground
        source={require('../assets/lab-assets/canada-watermark-bg.png')}
        resizeMode='cover'
        style={styles.backgroundImage}
      >
        <Text style={styles.homeTitle}>Canadian Cities</Text>

        <View style={styles.citySetContainer}>
          <View style={styles.buttonContainer}>
            <Image
              style={styles.cityImage}
              source={require('../assets/lab-assets/city-of-calgary.png')}
            />

            {/* Calgary button here */}
            <Button 
              title='Calgary'
              onPress={() => navigation.navigate('Calgary')}
            />
          </View>

          <View style={styles.buttonContainer}>
            <Image
              style={styles.cityImage}
              source={require('../assets/lab-assets/city-of-montreal.png')}
            />

            {/* Montreal button here */}
            <Button 
              title='Montreal'
              onPress={() => navigation.navigate('Montreal')}
            />
          </View>

          <View style={styles.buttonContainer}>
            <Image
              style={styles.cityImage}
              source={require('../assets/lab-assets/city-of-toronto.png')}
            />

            {/* Toronto button here */}
            <Button 
              title='Toronto'
              onPress={() => navigation.navigate('Toronto')}
            />
          </View>

          <View style={styles.buttonContainer}>
            <Image
              style={styles.cityImage}
              source={require('../assets/lab-assets/city-of-vancouver.png')}
            />

            {/* Vancouver button here */}
            <Button 
              title='Vancouver'
              onPress={() => navigation.navigate('Vancouver')}
            />
          </View>
        </View>

      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexGrow: 1
  },

  homeTitle: {
    color: '#0000cc',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },

  citySetContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  buttonContainer: {
    margin: 15,
  },

  cityImage: {
    width: 125,
    resizeMode: 'contain',
    height: 75
  },

  /* background image style to go here */
  backgroundImage: {
    flex: 1,
    justifyContent: "center"
  }
  
});