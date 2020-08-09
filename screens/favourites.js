import { StatusBar } from 'expo-status-bar';
    import React, {component,useState } from 'react';
  
    import { Button,StyleSheet, Text, View,Image,ScrollView,SafeAreaView,TouchableOpacity,FlatList, Platform ,scrollfeet,Slider, text} from 'react-native';
    import * as Font from 'expo-font';
    import {AppLoading} from 'expo';
    import Constants from 'expo-constants';

export default function favourites({navigation})
{
  const [reviews,setReviews] =useState([
    {
      title:'         My Favourites  ',
      rating :5,
      body: 'lorem ipsum',
      key:'1'
    
    },
  ]);
  return(
    <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle ={{flexGrow:1,justifyContent:'center',centercontent:'true'}}>
    <View style={styles.container}>
    <Text style={{ fontSize: 45 ,color: 'brown', fontFamily: 'font1'  }}>Description of Genres !
   
   </Text>
   <Text style={{ fontSize: 10 ,color: 'brown', fontFamily: 'font1'  }}>
   {"\n"}
   </Text>
    <StatusBar style="auto" />
   <Image
     source={{uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzcQfjfxHA6bKMSv1k-Nz4VpE1cKnB-PK6Dw&usqp=CAU' }}
     style={{width: 200, height: 200,borderColor: "black",
     alignContent:'center',
     borderWidth: 5,
     height: 175,
     width: 250}}
     />
    <Text>
   {"\n"} 

   ****************************

  {"\n"}
   </Text>
    
     
     </View>
   </ScrollView> 
   </SafeAreaView>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
 base: {
    fontWeight: 'bold',
    fontSize: 35,
   color: 'brown' ,
     textDecorationLine: 'none',
   
     fontFamily: 'font1',
    
  },
  
  scrollView: {
    marginHorizontal: 20,
    color:'white',
    justifyContent:'center',
   
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
  
