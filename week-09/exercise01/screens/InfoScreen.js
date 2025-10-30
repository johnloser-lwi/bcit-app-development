import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';

export default function InfoScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>

        <Text style={styles.heading}>Navigators and Tabs</Text>

        <Text style={styles.plainText}>This example demonstrates a BottomTabNavigator. It will also show how to create an external link.</Text>

        <Text style={styles.plainText}>{'\t\u2022\t\t'}Install and import the React Navigation Library</Text>
        <Text style={styles.plainText}>{'\t\u2022\t\t'}Install and import the Bottom Tabs Navigator</Text>
        <Text style={styles.plainText}>{'\t\u2022\t\t'}In the root of your app you need a NavigationContainer</Text>
        <Text style={styles.plainText}>{'\t\u2022\t\t'}Outside the function in your App.js file instantiate using createBottomTabNavigator() and assign to a const ref variable</Text>
        <Text style={styles.plainText}>{'\t\u2022\t\t'}Using the ref, you can then create the tab container</Text>
        <Text style={styles.plainText}>{'\t\u2022\t\t'}Within that container add each screen</Text>

        <Image style={styles.capImage} source={require('../assets/tab-code-cap.png')} />

        <Text style={styles.plainText}>NOTE: this is a bit of a poor man's list, created by injecting some tabs and the unicode character for a small dot.</Text>
        <Text style={styles.plainText}>There are existing components to create unordered lists similar to html.</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 5
  },

  capImage: {
    resizeMode: 'contain',
    width: '100%',
    height: 250
  },

  heading: {
    color: '#0000cc',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },

  plainText: {
    marginBottom: 5,
    fontSize: 15,
    alignSelf: 'flex-start',
  }
});