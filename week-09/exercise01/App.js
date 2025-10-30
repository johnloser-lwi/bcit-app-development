/* import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; */

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import HomeScreen from './screens/HomeScreen';
import InfoScreen from './screens/InfoScreen';
import OptionsScreen from "./screens/OptionsScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#0000dd",
          tabBarInactiveTintColor: "#c6c5ed"
        }}
      >
        <Tab.Screen 
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="home" color={color} size={size}/>
            )
          }}
        />
        <Tab.Screen 
          name="Info"
          component={InfoScreen}
          options={{
            headerTitle: "Tab Information",
            tabBarLabel: "Information",
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="info" color={color} size={size}/>
            )
          }}
        />
        <Tab.Screen 
          name="Opts"
          component={OptionsScreen}
          options={{
            title: "Tab Options",
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="tab" color={color} size={size}/>
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
