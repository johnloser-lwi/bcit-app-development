import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Movie Browser</Text>
                <Text style={styles.subtitle}>
                    Discover movies, browse by genre, and view details.
                </Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Movie Browser')}
                    accessibilityLabel="Open movie browser"
                >
                    <Text style={styles.buttonText}>Browse Movies</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    card: {
        width: '100%',
        maxWidth: 480,
        backgroundColor: '#222',
        borderRadius: 12,
        padding: 24,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 10,
        elevation: 6,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#fff',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        color: '#999',
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        width: '100%',
        paddingVertical: 14,
        backgroundColor: '#2563eb',
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    }
});