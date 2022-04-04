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
import { AuthContext } from "../context";

const {width, height} = Dimensions.get('window');



export default function Profile() {
  const {signOut} = React.useContext(AuthContext);
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
              <Text style = {{fontWeight: "500", color: "black"}}>1.2k</Text>
              <Text style = {{color: "black"}}>FOLLOWERS</Text>
            </TouchableOpacity>
            <View>
                <Image style= {style.display} source = {require("..//../assets/images/storm.jpg")} />
            </View>
            <TouchableOpacity style= {style.numbers}>
              <Text style = {{fontWeight: "500", color: "black"}}>900</Text>
              <Text style = {{ color: "black"}}>NEWSPOSTS</Text>
            </TouchableOpacity>

          </View>
          <Text style = {{fontWeight: "500", color: "black", marginTop: 16, fontSize: 17}}>
            HARIS ZAFAR
          </Text>
          </View>
          <View style = {style.profileButtons}>
            <TouchableOpacity style = {style.pButton}>
              <Text >
                +FOLLOW
              </Text>
            </TouchableOpacity >
            <TouchableOpacity style = {style.pButton}>
              <Text >
                MESSAGE
              </Text>
            </TouchableOpacity >
          </View>
          <View style = {style.profileTabs}>
            <TouchableOpacity>
              <Text>POSTS</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>PINS</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>OPINIONS</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>NEWSTAND</Text>
            </TouchableOpacity>
          </View>
          <ScrollView>
            <TouchableOpacity style = {style.post}>
              <Image style = {style.postImage}source = {require("..//../assets/images/storm.jpg")}/>
              <View style = {style.postText}>
              <View style = {{flexDirection : "row", alignItems: "baseline", marginLeft: -6}}>
                <Image source = {require('..//..//assets/icon-images/pin.png')}
                resizeMode = "contain" style = {{width: width /100*5, height: height/100*2.5}}
                />
              <Text style = {{fontSize: 11.5, color : "#045C5A"}}>
                Pinned Post
              </Text>
              </View>
              <Text style = {{fontSize: 12.5,color: "black", marginTop: -20}}>
                Here's something i wrote a long time ago. Still relevant :)
              </Text>
              <Text style = {{alignSelf: "flex-end", fontSize: 10}}>
                28/11/18
              </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style = {style.post}>
              <Image style = {style.postImage}source = {require("..//../assets/images/storm.jpg")}/>
              <View style = {style.postText}>
              <Text style = {{fontSize: 12.5,color: "black"}}>
                Here's something i wrote a long time ago. Still relevant :)
              </Text>
              <Text style = {{alignSelf: "flex-end", fontSize: 10}}>
                28/11/18
              </Text>
              </View>
             
            </TouchableOpacity>
            <TouchableOpacity onPress={() => signOut()}>
              <Text>LOGOUT</Text>
            </TouchableOpacity>
          </ScrollView>
         
          </SafeAreaView>

        )}

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
    alignSelf: "center",
    margin: width / 100 * 5
    
  },

  picLine:{
    flexDirection: "row",
    
    alignItems: "center"
  },

  display:{
    width: width/100*28,
    height: height/100*15, 
    borderRadius: width, 
    margin: width/100*5,
  
  
  },

  numbers : {
    alignItems:"center",
    
    
  },

  profileButtons : {
    width: width/100*80,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: width/ 100*5
  },

  pButton : {
    borderWidth : 1,
    borderRadius : 15,
    paddingTop: width / 100 * 3,
    paddingBottom: width / 100 * 3,
    paddingLeft: width/ 100 * 10,
    paddingRight: width/ 100 * 10,
    
  },

  profileTabs : {
    width : width,
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "center",
    margin: width / 100 * 2
  },

  post : {
    width: width / 100 * 90,
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 20
  },

  postImage : {
    width : width / 100 * 40,
    height : 100
  },

  postText : {
    width: width / 100 *50,
    justifyContent: "space-between",
    marginLeft: 10,
    marginTop: 5
  }




})

