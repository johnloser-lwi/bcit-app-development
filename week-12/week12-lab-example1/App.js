import { StyleSheet, View, ActivityIndicator } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useFonts } from 'expo-font';
import{ Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';


import { ThemeProvider, } from '@rneui/themed';
import { royalTheme } from './themes/royalTheme';

import HomeScreen from './screens/HomeScreen';
import ResortListScreen from './screens/ResortListScreen';
import ResortDetailScreen from './screens/ResortDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  // add the hook that loads the font


  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
    'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
  });


  // add a conditional to show the ActivityIndicator until the font loads
  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size='large' color='#b9c8ff'/>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={royalTheme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home"
            screenOptions={{
              headerTitleStyle: {
                fontWeight: 'normal',
                fontFamily: 'Montserrat_400Regular'
              }
            }}
          >
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

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
});