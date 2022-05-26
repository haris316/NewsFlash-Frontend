import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Article from '../components/Article/Article';
import ExternalArticle from '../components/Article/ExternalArticle';
import NewArticle from '../components/Article/NewArticle'
import NewOpinion from '../components/Opinion/NewOpinion'
import TopBarNavigator from '../Tabs/HomeTabs';
import Explore from '../components/Explore/Explore';



const HomeStack = createStackNavigator();
const ExploreStack = createStackNavigator();
export function HomeStackScreen() {
    return (
        <HomeStack.Navigator >
            <HomeStack.Screen options={{ headerShown: false }} name="Home" component={TopBarNavigator} />
            <HomeStack.Screen name="ExternalArticle" component={ExternalArticle} />
            <HomeStack.Screen name="Article" component={Article} />
            <HomeStack.Screen name="New Article" component={NewArticle} />
            <HomeStack.Screen name="Opinion" component={NewOpinion} />
        </HomeStack.Navigator>
    )
}

export function ExploreStackScreen() {
    return(
        <ExploreStack.Navigator>
            <ExploreStack.Screen options={{headerShown : false}} name = "Explore" component={Explore} />
            <ExploreStack.Screen name="ExternalArticle" component={ExternalArticle} />
        </ExploreStack.Navigator>
    )
}