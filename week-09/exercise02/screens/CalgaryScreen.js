import { StyleSheet, View, ScrollView, Text, Image, Button } from 'react-native';
import * as Linking from 'expo-linking';

// this component will be loaded as a screen, so it will be passed the navigation prop
export default function CalgaryScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image 
          style={styles.cityImage}
          source={require('../assets/lab-assets/cityview-calgary.jpg')}
        />

        <Text style={styles.cityTitle}>Calgary</Text>      

        <Text style={styles.plainText}>{'\t\u2022\t\t'}Incorporated: January 1, 1894</Text>
        <Text style={styles.plainText}>{'\t\u2022\t\t'}Pop (City): 1,239,220</Text>
        <Text style={styles.plainText}>{'\t\u2022\t\t'}Pop (Metro): 1,392,609</Text>

        
        <Text style={styles.plainText}>
          Calgary is a city in the western Canadian province of Alberta. It is situated at the confluence of the Bow River and the Elbow River in the south of the province, in an area of foothills and prairie, about 80 km (50 mi) east of the front ranges of the Canadian Rockies, roughly 299 km (186 mi) south of the provincial capital of Edmonton and approximately 240 km (150 mi) north of the Canada–United States border. The city anchors the south end of the Statistics Canada-defined urban area, the Calgary–Edmonton Corridor.
        </Text>

        <Text style={styles.plainText}>
          The city had a population of 1,285,711 in 2019, making it Alberta's largest city. It is the third-largest municipality in Canada (after Toronto and Montreal), and the largest in western Canada. Also in 2016, Calgary had a metropolitan population of 1,392,609, making it the fourth-largest census metropolitan area (CMA) in Canada and second-largest in western Canada (after Vancouver).
        </Text>

        {/* link button will go here */}
        <View>
          <Button 
            title='Read more on Wikipedia'
            color='#009900'
            onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Calgary')}
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
            title="Next: Montreal"
            onPress={() => navigation.navigate('Montreal')}
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