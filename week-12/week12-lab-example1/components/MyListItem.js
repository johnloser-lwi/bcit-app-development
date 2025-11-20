import { Text, Button, ListItem, Avatar } from '@rneui/themed';

import Ionicons from '@expo/vector-icons/Ionicons';

import { themePalette } from '../themes/royalTheme';

export default function MyListItem({ itemData, navigatorRef }) {

  return (
    <ListItem>
      <Avatar 
        source={{ uri: itemData.keyImage }}
        rounded
      />

      <ListItem.Content>
        <Text >
          {itemData.name}
        </Text>
      </ListItem.Content>

      <Button
        icon={() => 
          <Ionicons 
            name='caret-forward'
            size={15}
            color={(itemData.active) ? themePalette.alternate : themePalette.greyLighter}
          />
        }
        disabled={!itemData.active}
        onPress={() => navigatorRef.navigate(
          'ResortDetail',
          {
            detailId: itemData.id
          }
        )}
      />

    </ListItem>    
  );
}

