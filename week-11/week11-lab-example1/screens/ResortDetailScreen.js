import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Image, Divider, Button, FAB, Overlay} from '@rneui/themed';

import Ionicons from '@expo/vector-icons/Ionicons';
import { themePalette } from '../themes/royalTheme';

// data file used to mock requests
import { getResortById } from '../data/resort-data';

import { useState } from 'react';

export default function ResortDetailScreen({ route, navigation }) {

  // get the params from the route
  const { detailId } = route.params;

  // use the helper function in the data file to get a specific flower
  const currResort = getResortById(detailId);

  // amenities map here
  const amenItems = currResort.amenities.map(currAmen => 
    <View key={currAmen.key} style={styles.amenListItem}>
        <Ionicons name='ribbon-outline' size={25}/>
        <Text>{currAmen.value}</Text>
    </View>
  );

  const [visibleAlert, setVisibleAlert] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        
        <Image
          style={styles.resortImage}
          source={{ uri: currResort.keyImage }}
        />

        <Text h3>{currResort.name}</Text>

        <Text>{currResort.shortDesc}</Text>

        <Divider inset={true} insetType='middle'/>

        <Text h3>Amenities</Text>

        {amenItems}

        <Divider inset={true} insetType='middle'/>

        <Text h3>About</Text>
        
        <Text>{currResort.longDesc}</Text>

      </ScrollView>

      <FAB 
          placement='right'
          icon={() => 
            <Ionicons 
              name='cart'
              size={25}
              color={themePalette.alternate}
            />
          }
          onPress={() => setVisibleAlert(true)}
        />

        <Overlay isVisible={visibleAlert}>
          <Text h3>Sorry</Text>
          <Text>The booking feature is currently unavailable</Text>
          <Button title="Close" 
          
            onPress={() => setVisibleAlert(false)}
          />
        </Overlay>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  resortImage: {
    aspectRatio: 1,
    width: '100%'
  },

  amenListItem: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 15,
  }

});