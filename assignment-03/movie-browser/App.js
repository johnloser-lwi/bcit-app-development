
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DarkTheme } from '@react-navigation/native';

import { StyleSheet } from 'react-native';

import Home from './screens/Home';
import MovieBrowser from './screens/MovieBrowser';
import MovieDetail from './screens/MovieDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home"
            component={Home}
          />
          <Stack.Screen 
            name="Movie Browser"
            component={MovieBrowser}
          />
          <Stack.Screen 
            name="Movie Detail"
            component={MovieDetail}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
