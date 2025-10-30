import { StyleSheet, View, Text, Button } from 'react-native';

export default function OptionsScreen({navigation}) {
  return (
    <View style={styles.container}>

      <Text style={styles.heading}>Other Options</Text>

      <Text style={styles.plainText}>{'\t\u2022\t\t'}Tab level options can be added using the screenOptions prop</Text>
      <Text style={styles.plainText}>{'\t\u2022\t\t'}EG here we can change the default color for active and inactive tabs</Text>
      <Text style={styles.plainText}>{'\t\u2022\t\t'}For individual tabs you can work with the options prop for the screen</Text>
      <Text style={styles.plainText}>{'\t\u2022\t\t'}EG here we can change the title, headerTitle or tabBarTitle to be something other than the route</Text>
      <Text style={styles.plainText}>{'\t\u2022\t\t'}We can also change the tabBarIcon, in this case we are using MaterialCommunityIcons which are in the standard install of ReactNativeVectorIcons</Text>

      <Text style={styles.heading}>Other Navigation</Text>

      <Text style={styles.plainText}>{'\t\u2022\t\t'}The tab component is nested in the NavigationContainer component</Text>
      <Text style={styles.plainText}>{'\t\u2022\t\t'}This manager will pass a reference to each screen as a prop. We can then access the navigate() method to move to another screen</Text>
      <Text style={styles.plainText}>{'\t\u2022\t\t'}In the lab you'll see how to use this prop with a button to jump to a specific tab</Text>

      {/* Home button to go here */}
      <Button
        title='Go Home'
        onPress={() => navigation.jumpTo('Home')}
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

  plainText: {
    marginBottom: 5,
    fontSize: 15,
    alignSelf: 'flex-start',
  }
});