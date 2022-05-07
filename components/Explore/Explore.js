import React from "react";
import { Text, View, Alert, ScrollView, StyleSheet, Dimensions } from "react-native";
import Carousel from "./Carousel";
import { dummyData } from "./tempData";
import Search from 'react-native-vector-icons/Ionicons'
import { Center } from "native-base";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const {width, height} = Dimensions.get('window');

export default function Explore() {
        return (
          <SafeAreaView style = {styles.container}>
          <ScrollView >
            <Carousel data = {dummyData}/>
            <View style = {styles.SearchView}>
              <Search name="ios-search-outline" size={20} style = {{marginLeft : 5}}/>
              <TextInput placeholder = "Search" style = {styles.searchText}/>

            </View>
            <ScrollView
              horizontal = {true}
              showsHorizontalScrollIndicator = {false}
              
            >
              <View style = {styles.categoryView}>
                <Text style = {styles.categoryText}>
                  ENTERTAINMENT
                </Text>
              </View>
              <View style = {styles.categoryView}>
                <Text style = {styles.categoryText}>
                  SPORTS
                </Text>
              </View>
              <View style = {styles.categoryView}>
                <Text style = {styles.categoryText}>
                  ENTERTAINMENT
                </Text>
              </View>
            </ScrollView>


            <ScrollView
              horizontal = {true}
              showsHorizontalScrollIndicator = {false}
              
            >
              <View style = {styles.featuredView}>
                <Text style = {styles.featuredText}>
                  image
                </Text>
              </View>
              <View style = {styles.featuredView}>
                <Text style = {styles.featuredText}>
                  image
                </Text>
              </View>
              <View style = {styles.featuredView}>
                <Text style = {styles.fetruredText}>
                  image
                </Text>
              </View>
            </ScrollView>


           
          </ScrollView>
          </SafeAreaView>
        )
}


const styles = StyleSheet.create({

  container : {
    flex : 2,
    backgroundColor : '#fff'
  },

  categoryView : {
    width : width/ 2,
    height : height / 7,
    borderWidth : 1,
    borderRadius : 12,
    marginLeft: 10,
    marginTop : height / 20,
    backgroundColor: '#045C5A',
    justifyContent : "center",
    marginRight : width/40
  },

  categoryText : {
    textAlign : 'center',
    color : 'white',
    fontSize : 16
    

  },
   SearchView : {
     flexDirection : "row",
     borderWidth : 1,
     borderRadius : 50,
     width : width /1.75,
     alignItems: "center",
     alignSelf : 'center',
     height : height /27,
     borderColor : 'light grey',
     marginTop : height / 100 * 2
     
   },

   searchText : {
     marginLeft : width / 100 * 5,
     height : 40

   }

})

