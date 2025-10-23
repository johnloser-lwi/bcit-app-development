import { Slot, Tabs } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Text } from "react-native-gesture-handler";

export default function RootLayout() {
  /* eturn (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="home" color={color} />
        }}
      />
      <Tabs.Screen
        name="test"
        options={{
          title: "Test",
          tabBarIcon: ({ color }) => <MaterialIcons name="notes" size={28} color={color} />
        }}
      />
    </Tabs>
  ); */

  return (
    <>
      <Slot />
    </>
  );
}
