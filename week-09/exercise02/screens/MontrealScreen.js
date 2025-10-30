import { StyleSheet, View, ScrollView, Text, Image, Button } from 'react-native';
import * as Linking from 'expo-linking';

// this component will be loaded as a screen, so it will be passed the navigation prop
export default function MontrealScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image 
          style={styles.cityImage}
          source={require('../assets/lab-assets/cityview-montreal.jpg')}
        />

        <Text style={styles.cityTitle}>Montreal</Text>      

        <Text style={styles.plainText}>{'\t\u2022\t\t'}Incorporated: May 17, 1642</Text>
        <Text style={styles.plainText}>{'\t\u2022\t\t'}Pop (City): 1,704,694</Text>
        <Text style={styles.plainText}>{'\t\u2022\t\t'}Pop (Metro): 4,098,927</Text>

        <Text style={styles.plainText}>
          Montreal; officially Montréal, is the most populous city in the Canadian province of Quebec and the second-most populous city in Canada. Originally founded in 1642 as Ville-Marie, or "City of Mary", it is named after Mount Royal, the triple-peaked hill in the heart of the city. The city is centred on the Island of Montreal, which got its name from the same origin as the city, and a few much smaller peripheral islands, the largest of which is Île Bizard. The city is situated 196 km (122 mi) east of the national capital Ottawa, and 258 km (160 mi) south-west of the provincial capital, Quebec City.    
        </Text>

        <Text style={styles.plainText}>
        In 2016, the city had a population of 1,704,694, with a population of 1,942,247 in the urban agglomeration, including all of the other municipalities on the Island of Montreal. The broader metropolitan area had a population of 4,098,247. French is the city's official language and in 2016 was the main home language of 49.8% of the population, while English was spoken by 22.8% at home, and 18.3% spoke other languages (multi-language responses were excluded from these figures). In the larger Montreal Census Metropolitan Area, 65.8% of the population spoke French at home, compared to 15.3% who spoke English. Montreal is one of the most bilingual cities in Quebec and Canada, with over 59% of the population able to speak both English and French. Montreal is the second-largest primarily French-speaking city in the developed world, after Paris.        
        </Text>

        {/* link button will go here */}

        <View>
          <Button 
            title='Read more on Wikipedia'
            color='#009900'
            onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Montreal')}
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
            title="Next: Toronto"
            onPress={() => navigation.navigate('Toronto')}
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