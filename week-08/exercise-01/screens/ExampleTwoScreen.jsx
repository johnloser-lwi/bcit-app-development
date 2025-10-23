import { StyleSheet, View, Text, FlatList } from "react-native";
import MyAppHeading from "../components/MyAppHeading";
import MyAppListItem from "../components/MyAppListItem";
import { FLOWERDATA } from "../data/example2_data";

export default function ExampleTwoScreen() {

    const renderItem = ({item}) => (
        <MyAppListItem itemData={item}/>
    );

    return (
        <View style={styles.container}>
            <MyAppHeading headingStyle="h1">
                Week 8 Example 2
            </MyAppHeading>

            <FlatList
                data={FLOWERDATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-start",
            paddingTop: 50,
        }
    }
);