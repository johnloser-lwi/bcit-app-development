import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Image
        style={styles.viewLogo}
        source={{uri: "https://media.mdia.ca/img/logos/bcit3295.png"}}
      />

      <Text style={styles.viewTitle}>
        MDIA 3295 - Week 7
      </Text>

      <Text style={{
        textAlign: "center",
        fontStyle: "italic",
        padding: "5%"
      }}>
        This is my first app. JSX may look like html but is quite different. Here is another line
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  viewTitle: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 15
  },
  viewLogo: {
    width: 250,
    height: 250,
    margin: 15
  }
});