import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from './components/Home/Home'
import Watch from './components/Watch/Watch'
import Explore from './components/Explore/Explore'
import Notifications from './components/Notifications/Notifications'
import Profile from './components/Profile/Profile'
import { color } from "react-native-reanimated";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return(
        <Tab.Navigator screenOptions = {{
            headerShown : false,
            showLabel : false,
            tabBarStyle : {
                position :'absolute',
                height: 55,
                bottom: 1
            }
        }} >
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Watch" component={Watch}/>
            <Tab.Screen name="Explore" component={Explore}/>
            <Tab.Screen name="Notfications" component={Notifications}/>
            <Tab.Screen name="Prdffofile" component={Profile}/>

        </Tab.Navigator>
    )
}

export default MyTabs;


