import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ExampleOneScreen from './screens/ExampleOneScreen';
import ExampleTwoScreen from './screens/ExampleTwoScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ExampleTwoScreen />

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
