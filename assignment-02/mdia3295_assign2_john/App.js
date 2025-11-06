// John, A01437246, MDIA 3295

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AlphaScreen from "./screens/AlphaScreen";
import BetaScreen from "./screens/BetaScreen";


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{title: "Home"}}
        />
        <Stack.Screen 
          name="Alpha"
          component={AlphaScreen}
          options={{title: "Alpha Screen"}}
        />
        <Stack.Screen 
          name="Beta"
          component={BetaScreen}
          options={{title: "Beta Screen"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
