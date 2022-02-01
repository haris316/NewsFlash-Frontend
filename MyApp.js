import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { createDrawerNavigator } from "react-navigation-drawer";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Importing Files
// import {DrawerContent} from "./components/Drawer/Drawer";
// import Home from "./components/Home/Home";
// import Explore from "./components/Explore/Explore";
// import Search from "./components/Search/Search";



import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Watch" component={Watch} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="This is Home" />
    </View>
  );
}
function Profile({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="This is Your Profile" />
    </View>
  );
}
function Explore({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="This is Explore" />
    </View>
  );
}

function Watch({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="This is Watch" />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="This is Notifications" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="View Profile"  component={Profile} />
        <Drawer.Screen name="Home"  component={MyTabs} />
        {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
              {/* <MyTabs /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}








//Declaring all Navigators
// const Tabs = createBottomTabNavigator();
// const AuthStack = createStackNavigator();
// const Drawer = createDrawerNavigator();

//Auth Navigation using Stack
// const AuthStackScreen = () => (
//   <AuthStack.Navigator screenOptions={{ headerShown: false }}>
//     <AuthStack.Screen name="Home" component={Home} />
//     <AuthStack.Screen name="Login" component={Login} />
//     <AuthStack.Screen name="Register" component={Register} />
//   </AuthStack.Navigator>
// );

//App Navigation from Bottom Tabs
// const TabsScreen = () => (
//   <Tabs.Navigator>
//     <Tabs.Screen name="Home" component={Home} />
//     <Tabs.Screen name="Explore" component={Explore} />
//     <Tabs.Screen name="Search" component={Search} />
//   </Tabs.Navigator>
// );

//App Navigation from Side Drawers
// const DrawerScreen = () => (
//   <Drawer.Navigator drawerContent={() => <DrawerContent />}>
//     <Drawer.Screen name="Home" component={TabsScreen} />
//   </Drawer.Navigator>
// );

//EXPORT
// export default () => {
//   return (
//     <DrawerScreen />
//   );
// };