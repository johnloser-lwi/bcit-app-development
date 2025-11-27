import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export default function MyListItem({itemData, navigatorRef}) {
    return (
        <View style={myListItemStyles.itemContainer}>
            <View style={myListItemStyles.itemColAlpha}>
                <Image style={myListItemStyles.itemThumb} source={{uri:itemData.imageUrl}}/>
            </View>

            <View style={myListItemStyles.itemColBeta}>
                <Text style={myListItemStyles.itemText}>{itemData.title}</Text>
            </View>

            <View style={myListItemStyles.itemColGamma}>
                <TouchableOpacity style={myListItemStyles.detailButton}
                    onPress={() => navigatorRef.navigate("Movie Detail", {detailId: itemData.id})}
                >
                    <Text style={myListItemStyles.buttonText}> Detail</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const myListItemStyles = StyleSheet.create({
    itemContainer: {
        marginVertical: 2,
        paddingHorizontal: 2,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    itemColAlpha: {
        paddingLeft: 5,
        alignSelf: 'center',
    },

    itemColBeta: {
        flexGrow: 1,
        alignSelf: 'center',
        paddingLeft: 10,
    },

    itemColGamma: {
        alignSelf: 'center',
        paddingRight: 10
    },

    itemThumb: {
        width: 90,
        height: 120,
        borderRadius: 30,
        resizeMode: 'center',
    },

    itemText: {
        fontSize: 18,
        color: '#fff'
    },

    detailButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
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