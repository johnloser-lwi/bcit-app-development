import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import FlowerListScreen from "./screens/FlowerListScreen";
import FlowerDetailScreen from "./screens/FlowerDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{title: "Welcome to Flowers R'Us"}}
        />
        <Stack.Screen 
          name="FlowerList"
          component={FlowerListScreen}
          options={{title: "Browse our list"}}
        />
        <Stack.Screen 
          name="FlowerDetail"
          component={FlowerDetailScreen}
          options={{title: "Flower Detail"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
