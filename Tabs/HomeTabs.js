import React from 'react'
import { Text, View, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator, MaterialTopTabBar } from '@react-navigation/material-top-tabs'
import { HomeStackScreen } from '../Stacks/ScreenStack';
import News from '../components/Home/News';
import Test from '../components/Article/ExternalArticle';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import UserPosts from '../components/Home/UserPosts';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    const insets = useSafeAreaInsets();
    return (
        <Tab.Navigator
            initialRouteName='Home'
            tabBarOptions={{
                inactiveTintColor: "#000",
                activeTintColor: '#045C5A',
                labelStyle: { fontSize: 13.5 },
                style: {
                    backgroundColor: 'white', marginTop: insets.top, padding: 5
                },
            }}

        >
            {/* <Tab.Screen
                name='News'
                component={News}
                options={{ tabBarLabel: 'Latest News' }}
            /> */}

            <Tab.Screen
                name='UserPosts'
                component={UserPosts}
                options={{ tabBarLabel: 'User Posts' }}
            />

        </Tab.Navigator>
    )
}

export default function TopBarNavigator() {
    return <MyTabs />


}