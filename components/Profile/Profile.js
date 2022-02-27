import React from "react";
import { 
  Text, 
  View, 
  Alert, 
  StyleSheet, 
  TouchableOpacity, 
  SafeAreaView,
  Image,
  Dimensions,
  ScrollView
 } from "react-native";
import Ellipsis from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

export default function Profile() {
        return (
          <SafeAreaView style = {style.container}>
          <View style = {style.top}>
           
            <TouchableOpacity>
              <Ellipsis name="ellipsis-vertical" size={30}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Ellipsis name="ellipsis-vertical" size={30}/>
            </TouchableOpacity>
            
          </View>
          <View style = {style.picwName}>
          <View style= {style.picLine}>
            <TouchableOpacity style= {style.numbers}>
              <Text style = {{fontWeight: "500"}}>1.2k</Text>
              <Text>FOLLOWERS</Text>
            </TouchableOpacity>
            <View>
                <Image style= {style.display} source = {require("..//../assets/images/storm.jpg")} />
            </View>
            <TouchableOpacity style= {style.numbers}>
              <Text>900</Text>
              <Text>NEWSPOSTS</Text>
            </TouchableOpacity>

          </View>
          <Text>
            HARIS ZAFAR
          </Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text>
                +FOLLOW
              </Text>
            </TouchableOpacity>
              <Text>
                MESSAGE
              </Text>
            <TouchableOpacity>

            </TouchableOpacity>
          </View>
         
          </SafeAreaView>

        )
}

const style = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'Alegreya Sans',
    
    
    
  },

  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: 10
  },

  picwName:{
    width : width / 100 * 80,
    alignItems : "center",
    alignSelf: "center"
    
  },

  picLine:{
    flexDirection: "row",
    
    alignItems: "center"
  },

  display:{
    width: width/100*28,
    height: height/100*15, 
    borderRadius: width, 
    margin: width/100*5
  
  },

  numbers : {
    alignItems:"center",
    
  }



})

