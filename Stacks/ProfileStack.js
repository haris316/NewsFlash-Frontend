import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../components/Profile/ProfileUser'
import Article from '../components/Article/Article';




const ProfileStack = createStackNavigator();
export default function ProfileStackScreen() {
    return (
        <ProfileStack.Navigator >
            <ProfileStack.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
            <ProfileStack.Screen name="Article" component={Article} />
        </ProfileStack.Navigator>
    )
}