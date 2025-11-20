import { useState, useRef } from 'react';

import { StyleSheet, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Text, Image, Divider, Button, FAB, Overlay } from '@rneui/themed';

import Ionicons from '@expo/vector-icons/Ionicons';
import { themePalette } from '../themes/royalTheme';

import Carousel from 'react-native-anchor-carousel';

// data file used to mock requests
import { getResortById } from '../data/resort-data';

export default function ResortDetailScreen({ route, navigation }) {
  // set state for overlay dialog to start
  // first is the start name, second is the function used to set state
  // in the assignment we set to false to start
  const [visibleAlert, setVisibleAlert] = useState(false);

  const carouselRef = useRef(null);

  const { width: windowWidth } = Dimensions.get('window');

  const renderItem = ({ item, index }) => (
    <TouchableOpacity 
      activeOpacity={.7}
      style={styles.caroItem}

      onPress={() => {
        carouselRef.current.scrollToIndex(index);
      }}>

      <Image 
        style={styles.caroImage}
        source={{uri:item}}
      />  
    </TouchableOpacity>
  );

  // get the params from the route
  const { detailId } = route.params;

  // use the helper function in the data file to get a specific flower
  const currResort = getResortById(detailId);

  // amenities map here
  const amenItems = currResort.amenities.map((currAmen) =>
    <View key={currAmen.key} style={styles.amenListItem}>
      <Ionicons name='ribbon-outline' size={25} />
      <Text>{currAmen.value}</Text>
    </View>
  );


  return (
    <View style={styles.container}>
      <ScrollView>
{/*         <Image
          style={styles.resortImage}
          source={{ uri: currResort.keyImage }}
        /> */}

        <Carousel 
          style={styles.carousel}
          data={currResort.otherImage}
          renderItem={renderItem}
          initialIndex={2}

          itemWidth={windowWidth * 0.7}
          inActiveScale={0.6}
          separatorWidth={15}
          containerWidth={windowWidth}

          inActiveOpacity={0.3}

          ref={carouselRef}
        />

        <Text h3>{currResort.name}</Text>

        <Text>{currResort.shortDesc}</Text>

        <Divider inset={true} insetType="middle" />

        <Text h3>Amenities</Text>

        {amenItems}

        <Divider inset={true} insetType="middle" />

        <Text h3>About</Text>

        <Text>{currResort.longDesc}</Text>

      </ScrollView>

      <FAB
        onPress={() => setVisibleAlert(true)}
        placement="right"
        icon={() =>
          <Ionicons
            name='cart'
            size={25}
            color={themePalette.alternate}
          />
        }
      />

      <Overlay isVisible={visibleAlert} >
        <Text h3>Sorry</Text>

        <Text>
          The booking feature is currently unavailable
        </Text>

        <Button
          title="Close"
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
  },

  carousel: {
    flexGrow: 0,
    height: 200
  },
  caroItem: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  caroImage: {
    width: '100%',
    aspectRatio: 1,
  }
});