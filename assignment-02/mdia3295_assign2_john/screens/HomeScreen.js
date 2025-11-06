import { View, Text, Button, StyleSheet } from "react-native";


export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>MDIA 3295 - Assign 2</Text>
            <Text>Choose your screen below</Text>

            <View style={styles.buttonContainer}>
                <Button title="Go TO ALPHA"
                onPress={() => navigation.navigate("Alpha")}
                />
                <Button title="GO TO BETA"
                    onPress={() => navigation.navigate("Beta")}
                />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        gap: 10
    },
    title: {
        color: '#0000cc',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 10,
        marginBottom: 10,
        alignSelf: 'center',
    },
    buttonContainer: {
        width: "100%",
        padding: 15,
        gap: 15
    }
});