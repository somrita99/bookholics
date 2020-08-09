import { StatusBar } from 'expo-status-bar';
    import React, {component,useState } from 'react';
  
    import { Button,StyleSheet, Text, View,Image,ScrollView,SafeAreaView,TouchableOpacity,FlatList, Platform ,scrollfeet,Slider, text} from 'react-native';
    import * as Font from 'expo-font';
    import {AppLoading} from 'expo';
    import Constants from 'expo-constants';

export default function ReviewDetails({ navigation})
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

  <Text style={{ fontSize: 20 ,color: 'black', fontFamily: 'font1' }}>
  
  
Myth 
</Text>
<Text style ={{fontSize: 15 ,color: 'black', fontFamily: 'font1'}}>
Myth is a folklore genre consisting of narratives or stories that play a fundamental role in 
a society, such as foundational tales or origin myths. The main characters in myths are usually gods, demigods, or supernatural humans.
{"\n"}
</Text>
<Text style ={{fontSize: 20 ,color: 'black', fontFamily: 'font1'}}>
Romance 
</Text>
<Text style ={{fontSize: 15 ,color: 'black', fontFamily: 'font1'}}>
Two basic elements comprise every romance novel: a central love story and an emotionally satisfying and optimistic ending. 
 
A Central Love Story: The main plot centers around individuals falling in love and struggling to make the relationship work.
 A writer can include as many subplots as he/she wants as long as the love story is the main focus of the novel.
An Emotionally Satisfying and Optimistic Ending: In a romance, the lovers who risk and struggle for each other and their relationship
 are rewarded with emotional justice and unconditional love. 
{"\n"}
</Text>
<Text style ={{fontSize: 20 ,color: 'black', fontFamily: 'font1'}}>
Novel 
</Text>
<Text style ={{fontSize: 15 ,color: 'black', fontFamily: 'font1'}}>
A work in which real events and people are written [about] in novel form, but are not camouflaged,
 as they are in the roman a clef. In the nonfiction novel, reality is presented imaginatively;
  the writer imposes a novelistic structure on the actual events, keying sections of narrative around moments that
   are seen (in retrospect) as symbolic.
{"\n"}
</Text>
<Text style ={{fontSize: 20 ,color: 'black', fontFamily: 'font1'}}>
Fiction 
  </Text>
  <Text style ={{fontSize: 15 ,color: 'black', fontFamily: 'font1'}}>
  A fictional story set in a recognizable period of history.
   As well as telling the stories of ordinary people’s lives, historical fiction may involve political or social events of the time.
{"\n"}
</Text>
<Text style ={{fontSize: 20 ,color: 'black', fontFamily: 'font1'}}>
Biography 
</Text>
<Text style ={{fontSize: 15 ,color: 'black', fontFamily: 'font1'}}>
Biography is a literary genre that portrays the experiences of all these events occurring in the life of a person, mostly in a chronological order.
 Unlike a resume or profile, a biography provides a life story of a subject, highlighting different aspects of his of her life.
{"\n"}
</Text>
<Text style ={{fontSize: 20 ,color: 'black', fontFamily: 'font1'}}>
Fairytale 
</Text>
<Text style ={{fontSize: 15 ,color: 'black', fontFamily: 'font1'}}>
A fairy tale, fairytale, wonder tale, magic tale, or Märchen is an instance of a folklore genre that takes the form of a short story. Such stories typically feature entities such as dwarfs, dragons, elves, fairies, giants, gnomes, goblins, griffins, mermaids, talking animals, trolls, unicorns, or witches, and usually magic or enchantments. In most cultures,
 there is no clear line separating myth from folk or fairy tale; all these together form the literature of preliterate societies.
{"\n"}
</Text>
<Text style ={{fontSize: 20 ,color: 'black', fontFamily: 'font1'}}>
Drama 
</Text>
<Text style ={{fontSize: 15 ,color: 'black', fontFamily: 'font1'}}>
Drama is a category of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone.
 Drama of this kind is usually qualified with additional terms that specify its particular super-genre, macro-genre or micro-genre
{"\n"}
</Text>
<Text style ={{fontSize: 20 ,color: 'black', fontFamily: 'font1'}}>
History 
</Text>
<Text style ={{fontSize: 15 ,color: 'black', fontFamily: 'font1'}}>
Although generally concerned with the past, the historical genre includes representations of recent events whose social significance is recognized by contemporaries.
 The genre comprises historical paintings, murals, reliefs, free-standing sculpture, and graphic art.
{"\n"}
</Text>
<Text style ={{fontSize: 20 ,color: 'black', fontFamily: 'font1'}}>
Western 
</Text>
<Text style ={{fontSize: 15 ,color: 'black', fontFamily: 'font1'}}>
Western is a genre of fiction set primarily in the latter half of the 19th century in the Western United States, which is styled the "Old West". ... Westerns often
 stress the harshness of the wilderness and frequently set the action in an arid, desolate landscape of deserts and mountains.
{"\n"}
</Text>
<Text style ={{fontSize: 20 ,color: 'black', fontFamily: 'font1'}}>
Poems 
</Text>
<Text style ={{fontSize: 15 ,color: 'black', fontFamily: 'font1'}}>
oetry is a form of literature that uses aesthetic and often rhythmic qualities of language—such ... Ancient Greek attempts to define poetry, such as Aristotle's Poetics, focused on the 
Some poetry types are unique to particular cultures and genres and respond to characteristics of the language in which the poet writes.
{"\n"}
</Text>
<Text style ={{fontSize: 20 ,color: 'black', fontFamily: 'font1'}}>
Non-Fiction 
</Text>
<Text style ={{fontSize: 15 ,color: 'black', fontFamily: 'font1'}}>
Nonfiction - is the opposite of fiction. Books that are Nonfiction, or true, are about real things, people, events, and places.
Nonfiction, such as letters, magazine articles, histories, websites, speeches and travelogues. Although they are mostly either
 one or the other it is not uncommon for there to be a blend of both, particularly non-fiction with a dash of fiction for added spice.
{"\n"}
</Text>

   <FlatList
     data={reviews}
     renderItem={({item}) => (
       <TouchableOpacity onPress={() => navigation.navigate('Favourites',item)}>
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
  
