import { StyleSheet, View, ScrollView, Text, Image, Button } from 'react-native';
import * as Linking from 'expo-linking';

// this component will be loaded as a screen, so it will be passed the navigation prop
export default function VancouverScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image 
          style={styles.cityImage}
          source={require('../assets/lab-assets/cityview-vancouver.jpg')}
        />

        <Text style={styles.cityTitle}>Vancouver</Text>      

        <Text style={styles.plainText}>{'\t\u2022\t\t'}Incorporated: April 6, 1886</Text>
        <Text style={styles.plainText}>{'\t\u2022\t\t'}Pop (City): 631,486</Text>
        <Text style={styles.plainText}>{'\t\u2022\t\t'}Pop (Metro): 2,463,431</Text>

        
        <Text style={styles.plainText}>
          Vancouver is a seaport city in western Canada, located in the Lower Mainland region of British Columbia. As the most populous city in the province, the 2016 census recorded 631,486 people in the city, up from 603,502 in 2011. The Greater Vancouver area had a population of 2,463,431 in 2016, making it the third-largest metropolitan area in Canada. Vancouver has the highest population density in Canada, with over 5,400 people per square kilometre, which makes it the fifth-most densely populated city with over 250,000 residents in North America, behind New York City, Guadalajara, San Francisco, and Mexico City. Vancouver is one of the most ethnically and linguistically diverse cities in Canada: 52% of its residents are not native English speakers, 48.9% are native speakers of neither English nor French, and 50.6% of residents belong to visible minority groups.
        </Text>

        {/* link button will go here */}
        <View>
          <Button 
            title='Read more on Wikipedia'
            color='#009900'
            onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Vancouver')}
          />
        </View>


        {/* home button will go here */}
        <View style={{padding:5}}>
          <Button 
            title='Home'
            onPress={() => navigation.navigate('Home')}
          />
        </View>

        {/* next (montreal) button will go here */}   
        <View style={{padding:5}}>
          <Button 
            title="Next: Calgary"
            onPress={() => navigation.navigate('Calgary')}
          />
        </View>   
      </ScrollView>
      
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

  cityImage:{
    height:200,
    width:'100%'
  },

  cityTitle:{
    color:'#0000cc',
    fontWeight: 'bold',
    fontSize:30,
    marginTop:10,
    marginBottom:10,
    alignSelf:'center',
  },

  plainText:{
    marginHorizontal:5,
    marginBottom:5,
    fontSize:15,
    alignSelf:'flex-start',
  }
});