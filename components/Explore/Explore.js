import React from "react";
import { 
  Text, 
  View, 
  Alert, 
  StyleSheet, 
  Dimensions, 
  TextInput , 
  ScrollView, 
  TouchableOpacity,
  Image
} from "react-native";
import Carousel from "./Carousel";
import { dummyData } from "./tempData";
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/AntDesign'
import { Row } from "native-base";



const {width, height} = Dimensions.get('window')



export default function Explore() {

        return (
          <ScrollView>
            <Carousel data = {dummyData}/>
            <View style={style.searchBar}>
              <EvilIcons style={style.searchIcon} name="search" size={20} color="#000"/>
              <TextInput
                style = {style.input}
                placeholder="Search"
               
               
              />
            </View>
            <ScrollView>

              <ScrollView horizontal= {true} showsHorizontalScrollIndicator  =
              {false}>
                <TouchableOpacity style = {style.categoryView}>
                  <Text style = {{color: "white"}}>ENTERTAINMENT</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {style.categoryView}>
                  <Text style = {{color: "white"}}>SPORTS</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {style.categoryView}>
                  <Text style = {{color: "white"}}>ENTERTAINMENT</Text>
                </TouchableOpacity>
              </ScrollView>
            </ScrollView>

            <View style = {style.heading}>
              <Text style = {{color: 'black',fontSize: 20}}>
                Featured
              </Text>
              <TouchableOpacity>
                <Icon name="arrowright" size={30} color = {'black'} />
              </TouchableOpacity>
            </View>
            <ScrollView horizontal = {true} showsHorizontalScrollIndicator = {false} style = {style.posts}>
                <TouchableOpacity style = {style.box}>
                  <Image
                    source={require('..//../assets/images/huda.png')}
                    style = {style.imageContainer}
                  />
                    <View style = {style.overlay}></View>
                    <Text>Heading...</Text>

                  
                </TouchableOpacity>

                <TouchableOpacity style = {style.box}>
                  <Image
                    source={require('..//../assets/images/huda.png')}
                    style = {style.imageContainer}
                  />
                    <View style = {style.overlay}></View>
                    <Text>Heading...</Text>

                  
                </TouchableOpacity>

                <TouchableOpacity style = {style.box}>
                  <Image
                    source={require('..//../assets/images/huda.png')}
                    style = {style.imageContainer}
                  />
                    <View style = {style.overlay}></View>
                    <Text>Heading...</Text>

                  
                </TouchableOpacity>
                <TouchableOpacity style = {style.box}>
                  <Image
                    source={require('..//../assets/images/huda.png')}
                    style = {style.imageContainer}
                  />
                    <View style = {style.overlay}></View>
                    <Text>Heading...</Text>

                  
                </TouchableOpacity>
            </ScrollView>

            <View style = {style.heading}>
              <Text style = {{color: 'black',fontSize: 20}}>
                Opinions
              </Text>
              <TouchableOpacity>
                <Icon name="arrowright" size={30} color = {'black'} />
              </TouchableOpacity>
            </View>
            <ScrollView horizontal = {true} showsHorizontalScrollIndicator = {false} style = {style.posts}>
                <TouchableOpacity style = {style.box}>
                  <Image
                    source={require('..//../assets/images/huda.png')}
                    style = {style.imageContainer}
                  />
                    <View style = {style.overlay}></View>
                    <Text>Heading...</Text>

                  
                </TouchableOpacity>

                <TouchableOpacity style = {style.box}>
                  <Image
                    source={require('..//../assets/images/huda.png')}
                    style = {style.imageContainer}
                  />
                    <View style = {style.overlay}></View>
                    <Text>Heading...</Text>

                  
                </TouchableOpacity>

                <TouchableOpacity style = {style.box}>
                  <Image
                    source={require('..//../assets/images/huda.png')}
                    style = {style.imageContainer}
                  />
                    <View style = {style.overlay}></View>
                    <Text>Heading...</Text>

                  
                </TouchableOpacity>
                <TouchableOpacity style = {style.box}>
                  <Image
                    source={require('..//../assets/images/huda.png')}
                    style = {style.imageContainer}
                  />
                    <View style = {style.overlay}></View>
                    <Text style = {style.boxText}>Heading...</Text>

                  
                </TouchableOpacity>
            </ScrollView>
            <View style = {{height : height/100 *10, width: width}}></View>

           
          </ScrollView>
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
    height : height/20,
    alignItems: "center",
    marginTop : 12,
    overflow: "hidden" ,
    
    
  },
  searchIcon : {
    marginLeft: 7,
    
  },

  input : {
    marginBottom : -2,
    marginLeft : 7
  },

  categoryView : {
    width : width/100 * 50,
    height : height/100*13,
    borderWidth: 1,
    marginTop : height/100 *5,
    borderRadius : 15,
    justifyContent : "center",
    alignItems: "center",
    marginLeft : width/100 * 3,
    backgroundColor: "#045C5AE5"
  },

  heading : {
    flexDirection : "row",
    justifyContent: "space-between",
    marginTop : height/100 * 3,
    width: width /100 * 90,
    alignSelf : "center"
  },

  box : {
    height : height/100 * 15,
    width : width/100 * 30,
    borderWidth: 1,
    borderRadius : 15,
    marginRight : width/100 * 3
    
   
  },

  imageContainer : {
    height : height/100 * 13,
    width : width/ 100 * 30,
    borderRadius : 15
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor:'rgba(0,0,0,0.7)',
    borderRadius : 15
},

  posts : {
    width : width/100 * 90,
    alignSelf : "center",
    marginTop : height/100 * 1
   
    
  },

  boxText : {
    position: 'absolute',
    bottom: 10,
    margin: 10,
    left: 5,
    color : 'white',
    marginTop : 20
  }
})

