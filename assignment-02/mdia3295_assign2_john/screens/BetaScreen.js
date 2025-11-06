import { Text, Image, View, Button, StyleSheet } from "react-native";

export default function BetaScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Image style={styles.titleImg} source={{uri: "https://media.mdia.ca/img/flowers/flower-01-md.png"}}/>
            <Text style={styles.title}>Beta SCreen</Text>
            <Text>This is the beta screen</Text>
            <View style={styles.buttonContainer}>
                <Button 
                    title="RETURN HOME"
                    onPress={() => navigation.navigate("Home")}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        gap: 10
    },
    titleImg: {
        width: 250,
        height: 250
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
        width: "75%",
        padding: 15,
        gap: 15
    }
});