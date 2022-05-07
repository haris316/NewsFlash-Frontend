import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from './components/Auth/Login/Login'
import Register from './components/Auth/Register/Register'
import NewArticle from './components/Article/NewArticle'

const AuthStack = createStackNavigator();

function AuthStackScreen() {

    return (
    <AuthStack.Navigator>
        <AuthStack.Screen name="Login" component={NewArticle} />
        <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
    )
}

export default AuthStackScreen;