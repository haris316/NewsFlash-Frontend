import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from './components/Auth/Login/Login'
import Register from './components/Auth/Register/Register'

const AuthStack = createStackNavigator();

function AuthStackScreen() {

    return (
    <AuthStack.Navigator>
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
    )
}

export default AuthStackScreen;