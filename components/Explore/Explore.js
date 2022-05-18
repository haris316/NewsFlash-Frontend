import React from "react";
import { Text, View, Alert, StyleSheet, Dimensions, TextInput } from "react-native";
import Carousel from "./Carousel";
import { dummyData } from "./tempData";
import EvilIcons from 'react-native-vector-icons/EvilIcons';



const {width, height} = Dimensions.get('window')



export default function Explore() {

        return (
          <View>
            <Carousel data = {dummyData}/>
            <View style={style.searchBar}>
              <EvilIcons style={style.searchIcon} name="search" size={20} color="#000"/>
              <TextInput
                
    />
</View>
           
          </View>
        )
}

const style = StyleSheet.create({
  searchBar : {
    borderWidth : 1,
    opacity: 0.5,
    flexDirection : "row",
    borderRadius : 50,
    width : width/2 + 60,
    alignSelf : "center",
    padding : 5,
    marginTop : 20
  }
})

