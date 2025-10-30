import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import CalgaryScreen from './screens/CalgaryScreen';
import MontrealScreen from './screens/MontrealScreen';
import TorontoScreen from './screens/TorontoScreen';
import VancouverScreen from './screens/VancouverScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen 
          name="Calgary"
          component={CalgaryScreen}
        />
        <Stack.Screen 
          name="Montreal"
          component={MontrealScreen}
          />
        <Stack.Screen 
          name="Toronto"
          component={TorontoScreen}
        />
        <Stack.Screen 
          name="Vancouver"
          component={VancouverScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
