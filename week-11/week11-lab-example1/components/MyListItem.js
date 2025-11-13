//import { StyleSheet, View, Text, Image, Button } from 'react-native';
import { Text, Button, ListItem, Avatar } from "@rneui/themed";
import Ionicons from '@expo/vector-icons/Ionicons';
import { themePalette } from '../themes/royalTheme';

export default function MyListItem({ itemData, navigatorRef }) {

  return (
    <ListItem>
      <Avatar
        rounded
        source={{uri: itemData.keyImage}}
      />

      <ListItem.Content>
        <Text>{itemData.name}</Text>
      </ListItem.Content>

      <Button 
        icon={() => 
          <Ionicons 
            name='caret-forward'
            size={15}
            color={itemData.active ? themePalette.alternate : themePalette.greyLighter}
          />
        }
        disabled={!itemData.active}
        onPress={() => 
          navigatorRef.navigate("ResortDetail", {
            detailId: itemData.id
          })
        }
      />
    </ListItem>
  );

}

/* const myListItemStyles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#eeeeee',
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
    width: 60,
    height: 60,
    borderRadius: 30,
    resizeMode: 'center',
  },

  itemText: {
    fontSize: 18,
  },

}); */