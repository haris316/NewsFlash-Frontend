import React from 'react'
import Home from "../components/Home/Home";
import Article from "../components/Article/Article";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from 'native-base';
import { TouchableOpacity , Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');


const HomeStack = createStackNavigator();


export function HomeStackScreen({navigation}) {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen options={{
                headerLeft : () => (
                    <TouchableOpacity
                        onPress = {() => {
                        navigation.openDrawer();
                    }}
                    >
                        <Image 
                            source={require('../assets/icon-images/hamburger.png')} 
                            style = {{width: width/100 * 5, height: height /100 * 2.5}}
                            
                              />
                           

          
                    </TouchableOpacity>
                )
            }} name="Home" component={Home} />
            <HomeStack.Screen name="Article" component={Article} />
        </HomeStack.Navigator>
    )
}
