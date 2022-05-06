
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
  import Following from 'react-native-vector-icons/FontAwesome5';
  import Heart from 'react-native-vector-icons/FontAwesome';
  import Clock from 'react-native-vector-icons/AntDesign';
  import Comment from 'react-native-vector-icons/MaterialIcons';
  import Share from 'react-native-vector-icons/Ionicons';

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
                   <Clock name= "clockcircleo" size={16}/>
                    <Text style = {{fontSize: 13}}>Just Now</Text>
                 </View>
                 <View style = {styles.text}>
                 <Text style = {{fontSize:16, color: 'black'}}>
                   <Text style = {{fontWeight: "bold"}}>
                     Huda Ilyas 
                   </Text> started following you
                   </Text>

                 </View>
               </View>
             </View>
             </View>
             <View style = {styles.notif}>
               <View style = {styles.notifContainer}>
               <View style= {styles.notifIcon}>
                  <Heart name="heart" size={30} color="#045c5a"/>
               </View>
               <View style = {styles.notifText}>
                 <View style = {styles.time}>
                   <Clock name= "clockcircleo" size={16}/>
                    <Text style = {{fontSize: 13}}>Just Now</Text>
                 </View>
                 <View style = {styles.text}>
                 <Text style = {{fontSize:16, color: 'black'}}>
                   <Text style = {{fontWeight: "bold"}}>
                     Huda Ilyas 
                   </Text> liked your opinion <Text style = {{fontWeight: "bold"}}>
                     Essay 
                   </Text> 
                   </Text>

                 </View>
               </View>
             </View>
             </View>
             <View style = {styles.notif}>
               <View style = {styles.notifContainer}>
               <View style= {styles.notifIcon}>
                  <Comment name="mode-comment" size={30} color="#045c5a"/>
               </View>
               <View style = {styles.notifText}>
                 <View style = {styles.time}>
                   <Clock name= "clockcircleo" size={16}/>
                    <Text style = {{fontSize: 13}}>Just Now</Text>
                 </View>
                 <View style = {styles.text}>
                 <Text style = {{fontSize:16, color: 'black'}}>
                   <Text style = {{fontWeight: "bold"}}>
                     Huda Ilyas 
                   </Text> left a comment on your opinion <Text style = {{fontWeight: "bold"}}>
                     Essay 
                   </Text>
                   </Text>

                 </View>
               </View>
             </View>
             </View>
             <View style={styles.day}>
               <Text style = {{fontWeight: '700', fontSize: 25, color:'black'}}>Y E S T E R D A Y</Text>
             </View>
             <View style = {styles.notif}>
               <View style = {styles.notifContainer}>
               <View style= {styles.notifIcon}>
                  <Share name="ios-share-social" size={30} color="#045c5a"/>
               </View>
               <View style = {styles.notifText}>
                 <View style = {styles.time}>
                   <Clock name= "clockcircleo" size={16}/>
                    <Text style = {{fontSize: 13}}>Just Now</Text>
                 </View>
                 <View style = {styles.text}>
                 <Text style = {{fontSize:16, color: 'black', fontFamily: 'AlegreyaSans-Regular'}}>
                   <Text style = {{fontWeight: "bold"}}>
                     Huda Ilyas 
                   </Text> shared your opinion <Text style = {{fontWeight: "bold"}}>
                     Huda Ilyas 
                   </Text>
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
    fontFamily: 'AlegreyaSans-Regular',
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: 10
  },

  day : {
    marginTop: height/100 *4,
    justifyContent: 'center',
    alignItems: "center",
    paddingBottom : height/100 * 4,
    borderBottomWidth: 0.5

  },
  notif : {
    width : width,
    height: height/100 *18,
    borderBottomWidth: 0.5,
    justifyContent: "center",
    

    
  },
  notifContainer : {
    width : width/100 *80,
    marginLeft: width/100 * 5,
    
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
    height: height/100 *11.5,
    alignSelf: 'flex-start',
    justifyContent: "space-around",
    marginTop: height/100 *2
    
    
  },

  time : {
    flexDirection: 'row',
    width : ((width/100 *80) /100 * 65)/100 *38,
    justifyContent: "space-between",
    alignItems: "center"
   

  },
  text : {
    width : (width/100 *80) /100 * 65,
    flexDirection: "row",
    justifyContent: "space-between",
    fontFamily: 'AlegreyaSans-Regular'
    
   
  }


})

