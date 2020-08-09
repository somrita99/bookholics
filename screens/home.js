import { StatusBar } from 'expo-status-bar';
    import React, {component,useState } from 'react';
  
    import { Button,StyleSheet, Text, View,Image,ScrollView,SafeAreaView,TouchableOpacity,FlatList, Platform ,scrollfeet,Slider, text} from 'react-native';
    import * as Font from 'expo-font';
    import {AppLoading} from 'expo';
    import Constants from 'expo-constants';
   
    

export default function Home({ navigation })
{
  const [reviews,setReviews] =useState([
{
  title:'              View details  ',
  rating :5,
  body: 'lorem ipsum',
  key:'1'

},
  ]);
  return(
  
    <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle ={{flexGrow:1,justifyContent:'center',centercontent:'true'}}>
    <View style={styles.container}>
    <Text style={{ fontSize: 45 ,color: 'brown', fontFamily: 'font1'  }}>Just For Bibliophiles !
   
   </Text>
   <Text style={{ fontSize: 10 ,color: 'brown', fontFamily: 'font1'  }}>
   {"\n"}
   </Text>
   
  
   <StatusBar style="auto" />
   <Image
     source={{uri : 'https://storage.googleapis.com/ltkcms.appspot.com/fs/yd/images/cover/book-genres.base?v=1591896477' }}
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

  <Text style={{ fontSize: 20 ,color: 'black',borderWidth:4,borderColor:'black', fontFamily: 'font1'  }}>
  
  {"\n"}
{" "}{" "}Myth {"\n"}{" "}{" "}Romance {"\n"}{" "}{" "}Novel {"\n"}{" "}{" "}Fiction {"\n"}{" "}{" "}Biography {"\n"}{" "}{" "}Fairytale {"\n"}{" "}{" "}Drama {"\n"}{" "}{" "}History {"\n"}{" "}{" "}Western {"\n"}{" "}{" "}Poems {"\n"}{" "}{" "}Non-Fiction {"\n"}

</Text>
<Text>
   {"\n"} 

   ****************************

  {"\n"}
   </Text>
   <Image source={{uri : 'https://i.pinimg.com/originals/e3/0f/1d/e30f1d59f6e3a8b88d90e36982e14201.jpg' }}
     style={{width: 200, height: 200,borderColor: "black",
     borderWidth: 5,
     height: 175,
     width: 250}}
     />
     <FlatList
     data={reviews}
     renderItem={({item}) => (
       <TouchableOpacity onPress={() => navigation.navigate('Details',item)}>
<Text>
   {"\n"} 

   ****************************

  {"\n"}
   </Text>
 <Text style={{ fontSize: 20 ,color: 'black',borderWidth:6, fontFamily: 'font1' ,backgroundColor:'black',color:'white' }}> 
    { item.title }
    </Text>
    <Text>
    {"\n"}  {"\n"} 
</Text>
       </TouchableOpacity>
     )}
     />
     
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
 
