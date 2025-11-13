import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import ResortListScreen from './screens/ResortListScreen';
import ResortDetailScreen from './screens/ResortDetailScreen';
import { ThemeProvider } from '@rneui/themed';
import { royalTheme } from './themes/royalTheme';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>      
      <ThemeProvider theme={royalTheme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ResortList"
              component={ResortListScreen}
              options={{ title: 'Find your resort' }}
            />
            <Stack.Screen
              name="ResortDetail"
              component={ResortDetailScreen}
              options={{ title: 'Resort Detail' }}
            />
          </Stack.Navigator>
        </NavigationContainer>      
        </ThemeProvider>
    </SafeAreaProvider>
  );
}