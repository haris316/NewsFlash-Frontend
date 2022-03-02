import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './tabs';
import MyAuthStack from './AuthStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, View } from 'react-native';

export default function App() {
  const[isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  

  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  }, [])


  if (isLoading){
    return(
      <View style = {{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size='large'/>
      </View>
    )
  }

  return (
    <NavigationContainer>
      
      {/* <MyTabs/>  */}
      <MyAuthStack />
    </NavigationContainer>
  );
}





// import { NavigationContainer} from '@react-navigation/native';
// import React from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors
// } from 'react-native/Libraries/NewAppScreen';
// import MyTabs from "./MyApp";

// const Section = ({children, title}) => {
//   const isDarkMode = false;
//   return (
//     <View style={styles.sectionContainer,{
//       backgroundColor: isDarkMode ? "#999999" : "#FFFFFF",
//     }}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? "#FFFFFF" : "#000000",
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? "#FFFFFF" : "#222222",
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App = () => {
//   const isDarkMode = false;

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? "#222222" : "#FFFFFF",
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <View
//           style={{
//             backgroundColor: isDarkMode ? "#000000" : "#FFFFFF",
//           }}>
//             <Section children="This is a text" title="Heading" />
//           </View>
//       </ScrollView>
    
//     </SafeAreaView>
  
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   }
// });

// export default App;