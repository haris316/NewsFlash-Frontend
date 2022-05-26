import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Article from '../components/Article/Article'
import Explore from '../components/Explore/Explore'
import Notifications from '../components/Notifications/Notifications'
import LandingScreen from '../components/LandingScreen/LandingScreen'
import ProfileStack from './ProfileStack'
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { HomeStackScreen } from './ScreenStack';
import TopBarNavigator from "../Tabs/HomeTabs";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                height: 55,
                bottom: 0,
                backroundColor: '#fff',
                justifyContent: "center",
                alignItems: "center"
            }
        }} >
            <Tab.Screen name="HomeStackScreen" component={HomeStackScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: "center", justifyContent: "center", top: 0 }}>
                        <Icon
                            size={27}
                            name={(focused) ? "md-home" : "md-home-outline"}
                            color={focused ? '#045C5A' : '#000000'}
                        />
                        <Text style={{ color: focused ? '#045C5A' : '#000000', fontSize: 12, bottom: 0 }}>Home</Text>
                    </View>
                )
            }} />

            <Tab.Screen name="Explore" component={Explore} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: "center", justifyContent: "center", top: 0 }}>
                        <Icon
                            size={27}
                            name={(focused) ? "md-compass-sharp" : "md-compass-outline"}
                            color={focused ? '#045C5A' : '#000000'}
                        />
                        <Text style={{ color: focused ? '#045C5A' : '#000000', fontSize: 12, bottom:0 }}>Explore</Text>
                    </View>
                )
            }} />
            <Tab.Screen name="Notfications" component={Notifications} options={{
                tabBarIcon: ({ focused }) => (

                    <View style={{ alignItems: "center", justifyContent: "center", top: 0 }}>
                        <Icon
                            size={27}
                            name={(focused) ? "md-notifications" : "md-notifications-outline"}
                            color={focused ? '#045C5A' : '#000000'}
                        />
                        <Text style={{ color: focused ? '#045C5A' : '#000000', fontSize: 12, bottom:0 }}>Notfications</Text>
                    </View>
                )
            }} />
            <Tab.Screen name="Profile" component={ProfileStack} options={{
                tabBarIcon: ({ focused }) => (

                    <View style={{ alignItems: "center", justifyContent: "center", top: 0 }}>
                        <Icon
                            size={27}
                            name={(focused) ? "person-circle" : "person-circle-outline"}
                            color={focused ? '#045C5A' : '#000000'}
                        />
                        <Text style={{ color: focused ? '#045C5A' : '#000000', fontSize: 12, bottom: 0 }}>Profile</Text>
                    </View>
                )
            }} />

        </Tab.Navigator>
    )
}


