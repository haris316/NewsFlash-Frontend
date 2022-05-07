import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import  HomeStackScreen  from './tabs';
import Watch from './tabs';



const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

  return (

    <Drawer.Navigator screenOptions={{headerShown: false}} >
        <Drawer.Screen name="HomeScreen" component={HomeStackScreen}/>
        <Drawer.Screen name="Watch" component={Watch} />
        {/* <Drawer.Screen name="Playlist" component={PlaylistStackScreen} />
        <Drawer.Screen name="Profile" component={ProfileStackScreen} /> */}
      </Drawer.Navigator>

  );

};

export default DrawerNavigator;