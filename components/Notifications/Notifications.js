
import { Center } from "native-base";
import React from "react";
import { 
  Text, 
  View, 
  Alert, 
  SafeAreaView, 
  ScrollView, 
  StyleSheet, 
  TouchableOpacity,
  Dimensions } 
  from "react-native";
  import Ellipsis from 'react-native-vector-icons/Ionicons';
  import Following from 'react-native-vector-icons/FontAwesome5'

  const {width, height} = Dimensions.get('window');

export default function Notifications() {
        return (
         <SafeAreaView style = {styles.container}>
           <View style = {styles.top}>
           <TouchableOpacity>
              <Ellipsis name="ellipsis-vertical" size={30}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Ellipsis name="ellipsis-vertical" size={30}/>
            </TouchableOpacity>
           </View>
           <ScrollView>
             <View style={styles.day}>
               <Text style = {{fontWeight: '700', fontSize: 25, color:'black'}}>T O D A Y</Text>
             </View>
             <View style = {styles.notif}>
               <View style = {styles.notifContainer}>
               <View style= {styles.notifIcon}>
                  <Following name="user-check" size={30} color="#045c5a"/>
               </View>
               <View style = {styles.notifText}>
                 <View style = {styles.time}>

                 </View>
                 <View style = {styles.text}>
                   <Text style = {{fontWeight: "bold",fontSize:15}}>
                     Huda Ilyas
                   </Text>
                   <Text style = {{fontSize:15}}>
                     has started following you
                   </Text>

                 </View>
               </View>
             </View>
             </View>
           </ScrollView>
         </SafeAreaView>
        )
}


const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'Alegreya Sans',
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: 10
  },

  day : {
    marginTop: height/100 *5,
    justifyContent: 'center',
    alignItems: "center",
    marginBottom : height/100 * 2.5

  },
  notif : {
    width : width,
    height: height/100 *20,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    justifyContent: "center"

    
  },
  notifContainer : {
    width : width/100 *80,
    borderWidth: 1,
    top : 0,
    bottom : 0,
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
    
   
  },

  notifIcon :{
    
    
   
  },

  notifText : {
    
    borderWidth: 1,
    
    
  },

  time : {

  },
  text : {
    width : (width/100 *80) /100 * 50,
    flexDirection: "row",
    justifyContent: "space-between",
    
   
  }


})

