import React from 'react'
import {Text, View, Button} from 'react-native'
import { NavigationContainer  } from '@react-navigation/native'
import { createMaterialTopTabNavigator, MaterialTopTabBar } from '@react-navigation/material-top-tabs'
import { HomeStackScreen } from '../Stacks/ScreenStack';
import TopStories from '../components/Home/TopStories';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Home from '../components/Home/Home';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    const insets = useSafeAreaInsets();
    return (
        <Tab.Navigator
            initialRouteName='Home'
            tabBarOptions = {{
                inactiveTintColor : "#000",
                activeTintColor: '#045C5A',
                labelStyle : { fontSize : 16 },
                style : { backgroundColor : 'white' , marginTop : insets.top, padding : 10
               
                

                },
                
            }}
        
        >
            <Tab.Screen 
                name='Home'
                component={Home}
                options = {{tabBarLabel : 'Latest News' }}
            />

            <Tab.Screen 
                name='TopStories'
                component={ TopStories}
                options = {{tabBarLabel : 'Top Stories' }}
            />

        </Tab.Navigator>
    )
}

export default function TopBarNavigator() {
    return <MyTabs />
       
    
}