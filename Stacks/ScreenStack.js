import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/Home/Home'
import Article from '../components/Article/Article';
import NewArticle from '../components/Article/NewArticle'
import TopBarNavigator from '../Tabs/HomeTabs';




const HomeStack = createStackNavigator();
export function HomeStackScreen() {
    return (
        <HomeStack.Navigator >
            <HomeStack.Screen options={{headerShown: false}} name="Home" component={TopBarNavigator} />
            <HomeStack.Screen name="Article" component={Article} />
            <HomeStack.Screen name = "New Article" component={NewArticle}/>
        </HomeStack.Navigator>
    )
}