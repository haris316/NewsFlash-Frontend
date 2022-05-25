import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Article from '../components/Article/Article'
import Explore from '../components/Explore/Explore'
import Notifications from '../components/Notifications/Notifications'
import LandingScreen from '../components/LandingScreen/LandingScreen'
import ProfileStack from './ProfileStack'
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from "react-native";
import { Icon } from "react-native-vector-icons/SimpleLineIcons";
import { HomeStackScreen } from './ScreenStack';
import TopBarNavigator from "../Tabs/HomeTabs";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    const [profile, setProfile] = React.useState(null);
    // const [count, setCount] = React.useState(0);
    const [err, setErr] = React.useState(false);

    async function callProfile() {
        const value = await AsyncStorage.getItem('token');
        axios.post('https://nf-backend.herokuapp.com/api/users/getprofile', {
            token: value
        }).then((res) => {
            // console.log(res)
            if (res.error) {
                Alert.alert(res.data.message)
            }
            else {
                setProfile(res.data.data)
            }
        }).catch((e) => {
            Alert.alert("ERROR!");
        })
    }

    async function checkProfile() {
        if (profile) console.log("good")
        else console.log("bad")
    }

    async function callFunction() {
        await callProfile();
    }

    React.useEffect(() => {
        callFunction();
    }, []);

    if (profile === null) {
        // if (true) {
        return (
            <>
                <LandingScreen />
            </>
        )
    }
    else return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                height: 55,
                bottom: 1,
                backroundColor: '#fff',
                justifyContent: "center",
                alignItems: "center"
            }
        }} >
            <Tab.Screen name="HomeStackScreen" component={HomeStackScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: "center", justifyContent: "center", top: 4, left: 2 }}>
                        <Image source={require('../assets/icon-images/homeFinal.png')}
                            resizeMode='contain'
                            style={{
                                width: 35,
                                height: 35,
                                tintColor: focused ? '#045C5A' : '#000000'
                            }} />
                        <Text style={{ color: focused ? '#045C5A' : '#000000', fontSize: 12, bottom: 2 }}>Home</Text>
                    </View>
                )
            }} />

            <Tab.Screen name="Explore" component={Explore} options={{
                tabBarIcon: ({ focused }) => (

                    <View style={{ alignItems: "center", justifyContent: "center", top: 4 }}>

                        <Image source={require('../assets/icon-images/explore2.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#045C5A' : '#000000'
                            }} />
                        <Text style={{ color: focused ? '#045C5A' : '#000000', fontSize: 12, top: 3 }}>Explore</Text>
                    </View>
                )
            }} />
            <Tab.Screen name="Notfications" component={Notifications} options={{
                tabBarIcon: ({ focused }) => (

                    <View style={{ alignItems: "center", justifyContent: "center", top: 4 }}>

                        <Image source={require('../assets/icon-images/notif.png')}
                            resizeMode='contain'
                            style={{
                                width: 27,
                                height: 27,
                                tintColor: focused ? '#045C5A' : '#000000'
                            }} />
                        <Text style={{ color: focused ? '#045C5A' : '#000000', fontSize: 12, top: 3 }}>Notfications</Text>
                    </View>
                )
            }} />
            <Tab.Screen name="Profile" component={ProfileStack} options={{
                tabBarIcon: ({ focused }) => (

                    <View style={{ alignItems: "center", justifyContent: "center", top: 2 }}>

                        <Image source={require('../assets/icon-images/profileFinal.png')}
                            resizeMode='contain'
                            style={{
                                width: 35,
                                height: 35,
                                tintColor: focused ? '#045C5A' : '#000000'
                            }} />
                        <Text style={{ color: focused ? '#045C5A' : '#000000', fontSize: 12, bottom: 1 }}>Profile</Text>
                    </View>
                )
            }} />

        </Tab.Navigator>
    )
}


