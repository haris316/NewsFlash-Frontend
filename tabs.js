import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from './components/Home/Home'
import Watch from './components/Watch/Watch'
import Explore from './components/Explore/Explore'
import Notifications from './components/Notifications/Notifications'
import Profile from './components/Profile/Profile'
import { color } from "react-native-reanimated";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-vector-icons/SimpleLineIcons";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return(
        <Tab.Navigator screenOptions = {{
            headerShown : false,
            tabBarShowLabel : false,
            tabBarStyle : {
                position :'absolute',
                height: 66,
                bottom: 1,
                backroundColor: '#fff',
                justifyContent: "center",
                alignItems: "center"
                

            }
        }} >
            
            <Tab.Screen name="Home" component={Home} options = {{tabBarIcon: ({focused}) => (
                
                <View style = {{alignItems: "center",justifyContent: "center", top: 4, left: 2}}>
                  
                    <Image source={require('./assets/icon-images/homeFinal.png')}
                           resizeMode = 'contain'
                           style = {{
                               width: 38,
                               height: 38,
                               tintColor: focused ? '#045C5A' : '#000000'
                           }}  />
                    <Text style = {{color : focused ? '#045C5A' : '#000000', fontSize: 12, bottom: 2}}>Home</Text>
                </View>
            )}}/>
            <Tab.Screen name="Watch" component={Watch} options = {{tabBarIcon: ({focused}) => (
                
                <View style = {{alignItems: "center",justifyContent: "center", top: 4}}>
                  
                    <Image source={require('./assets/icon-images/watchFinal.png')}
                           resizeMode = 'contain'
                           style = {{
                               width: 25,
                               height: 25,
                               tintColor: focused ? '#045C5A' : '#000000'
                           }}  />
                    <Text style = {{color : focused ? '#045C5A' : '#000000', fontSize: 12, top:5}}>Watch</Text>
                </View>
            )}}/>
            <Tab.Screen name="Explore" component={Explore} options = {{tabBarIcon: ({focused}) => (
                
                <View style = {{alignItems: "center",justifyContent: "center", top: 4}}>
                  
                    <Image source={require('./assets/icon-images/explore2.png')}
                           resizeMode = 'contain'
                           style = {{
                               width: 28,
                               height: 28,
                               tintColor: focused ? '#045C5A' : '#000000'
                           }}  />
                    <Text style = {{color : focused ? '#045C5A' : '#000000', fontSize: 12, top:3}}>Explore</Text>
                </View>
            )}}/>
            <Tab.Screen name="Notfications" component={Notifications} options = {{tabBarIcon: ({focused}) => (
                
                <View style = {{alignItems: "center",justifyContent: "center", top: 4}}>
                  
                    <Image source={require('./assets/icon-images/notif.png')}
                           resizeMode = 'contain'
                           style = {{
                               width: 30,
                               height: 30,
                               tintColor: focused ? '#045C5A' : '#000000'
                           }}  />
                    <Text style = {{color : focused ? '#045C5A' : '#000000', fontSize: 12, top: 3}}>Notfications</Text>
                </View>
            )}}/>
            <Tab.Screen name="Profile" component={Profile} options = {{tabBarIcon: ({focused}) => (
                
                <View style = {{alignItems: "center",justifyContent: "center", top: 3}}>
                  
                    <Image source={require('./assets/icon-images/profileFinal.png')}
                           resizeMode = 'contain'
                           style = {{
                               width: 38,
                               height: 38,
                               tintColor: focused ? '#045C5A' : '#000000'
                           }}  />
                    <Text style = {{color : focused ? '#045C5A' : '#000000', fontSize: 12, bottom: 1}}>Profile</Text>
                </View>
            )}}/>

        </Tab.Navigator>
    )
}

export default MyTabs;


