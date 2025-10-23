import { StyleSheet, View, Text, Image } from 'react-native';

// a simple example of a component for text blocks
// component is implemented as a functional component
export default function MyAppListItem({itemData}) {
    return (
        <View style={styles.itemContainer} >
            <View style={styles.itemColAlpha}>
                <Image style={styles.itemThumb} source={{uri:itemData.imageUri}} />
            </View>
            
            <View style={styles.itemColBeta}>
                <Text style={styles.itemTitle}>{itemData.title}</Text>
                <Text style={styles.itemDesc}>{itemData.description}</Text>
            </View>    
        </View>
    );        
}

const styles = StyleSheet.create({  
    itemContainer: {
      //backgroundColor: '#eeeeee',
      marginVertical: 5,
      paddingHorizontal: 2,
      flex:1,
      flexDirection: 'row',  
      width:'100%'
    },
  
    itemColAlpha:{
      //backgroundColor:'#dddddd',        
      justifyContent:'center',
    },
  
    itemColBeta:{
      //backgroundColor:'#cccccc',            
      flexWrap:'wrap',
      flexDirection:'column',
      alignContent:'stretch',
      justifyContent:'center',        
      width:'70%',
      padding:10
    },
  
    itemThumb:{
      width:110,
      height:75,
      overflow:'hidden',
      borderRadius:40
    },
    
    itemTitle: {
      fontSize: 24,
    },
  
    itemDesc: {
      fontSize: 14,        
    },
});