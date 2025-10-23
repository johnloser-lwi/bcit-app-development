import { StyleSheet, Text } from "react-native";

export default function MyAppText(props) {
    return (
        <Text style={styles.sampleText}>
            {props.children}
        </Text>
    );
}

const styles = StyleSheet.create(
    {
        sampleText: {
            fontSize: 15,
            alignSelf: "flex-start",
            padding: 5
        }
    }
);