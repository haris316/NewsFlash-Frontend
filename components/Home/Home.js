import React from "react";
import { Text, View, Alert, StyleSheet , Image} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ellipsis from 'react-native-vector-icons/Ionicons';

export default function Home() {
        return (
          <View style = {style.container}>
            <View style = {style.top}>
              <TouchableOpacity>
                <Ellipsis name="ellipsis-vertical" size={30}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <Ellipsis name="ellipsis-vertical" size={30}/>
              </TouchableOpacity>
              
            </View>
            <View style = {style.headingTab}>
              <TouchableOpacity>
                <Text style={style.headingText}>
                  Latest News
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={style.headingText}>
                  Top Stories
                </Text>
              </TouchableOpacity>

            </View>
            <View>
              <Image source = {require("..//../assets/images/storm.jpg")}/>
            </View>
            
          </View>
        )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'Alegreya Sans'
    
  },

  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: 10
  },

  headingTab: {
    flexDirection: "row",
    padding: 25,
    justifyContent: "space-around",
    
  },

  headingText : {
    fontSize: 19
  }
  

})

