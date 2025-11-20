import { StyleSheet, Text, View, Button } from 'react-native';

const Home = ({navigation}) => {
    return (
        <View>
            <Button 
                title='Browse Movie'
                onPress={() => navigation.navigate("MovieBrowser")}
            />
        </View>
    );
}

export default Home;    
