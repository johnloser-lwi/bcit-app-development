import { StyleSheet, View, ScrollView, Text, Image, Button } from 'react-native';
import * as Linking from 'expo-linking';

// this component will be loaded as a screen, so it will be passed the navigation prop
export default function TorontoScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image 
          style={styles.cityImage}
          source={require('../assets/lab-assets/cityview-toronto.jpg')}
        />

        <Text style={styles.cityTitle}>Toronto</Text>      

        <Text style={styles.plainText}>{'\t\u2022\t\t'}Incorporated: March 6, 1834</Text>
        <Text style={styles.plainText}>{'\t\u2022\t\t'}Pop (City): 2,731,571</Text>
        <Text style={styles.plainText}>{'\t\u2022\t\t'}Pop (Metro): 5,928,040</Text>

        <Text style={styles.plainText}>
          Toronto is the provincial capital of Ontario and the most populous city in Canada, with a population of 2,731,571 as of 2016. Current to 2016, the Toronto census metropolitan area (CMA), of which the majority is within the Greater Toronto Area (GTA), held a population of 5,928,040, making it Canada's most populous CMA. The city is the anchor of the Golden Horseshoe, an urban agglomeration of 9,245,438 people (as of 2016) surrounding the western end of Lake Ontario. Toronto is an international centre of business, finance, arts, and culture, and is recognized as one of the most multicultural and cosmopolitan cities in the world.    
        </Text>

        <Text style={styles.plainText}>
            People have travelled through and inhabited the Toronto area, located on a broad sloping plateau interspersed with rivers, deep ravines, and urban forest, for more than 10,000 years. After the broadly disputed Toronto Purchase, when the Mississauga surrendered the area to the British Crown, the British established the town of York in 1793 and later designated it as the capital of Upper Canada. During the War of 1812, the town was the site of the Battle of York and suffered heavy damage by American troops. York was renamed and incorporated in 1834 as the city of Toronto. It was designated as the capital of the province of Ontario in 1867 during Canadian Confederation. The city proper has since expanded past its original borders through both annexation and amalgamation to its current area of 630.2 km2 (243.3 sq mi).
        </Text>         

        {/* link button will go here */}
        <View>
          <Button 
            title='Read more on Wikipedia'
            color='#009900'
            onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Toronto')}
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
            title="Next: Vancouver"
            onPress={() => navigation.navigate('Vancouver')}
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