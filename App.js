import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './tabs';
import MyAuthStack from './AuthStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, View } from 'react-native';
import { AuthContext } from './components/context';

export default function App() {
  // const[isLoading, setIsLoading] = React.useState(true);
   const [existingToken, setToken] = React.useState(null);

  initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch(action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken : action.token,
          isLoading : false
        };
      case 'LOGIN':
        return {
            ...prevState,
            userName : action.id,
            userToken : action.token,
            isLoading : false,
          };
      case 'LOGOUT':
        return {
          ...prevState,
          userName : null,
          userToken : null,
          isLoading : false
        };
      case 'REGISTER':
        return {
          ...prevState,
          userToken : action.token,
          isLoading : false
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: (token) => {
      // setUserToken('jdjd');
      // setIsLoading(false);
      console.log("thisistokr",token);
      setToken(token);
      dispatch({type : 'LOGIN', token : token});
    },
    signOut: () => {
      dispatch({type: 'LOGOUT' })
    },
    signUp : () => {
      // setUserToken('jdjd');
      // setIsLoading(false);
    },
  }), []);

  useEffect(()=>{
    setTimeout(() => {
      dispatch({type: 'RETRIEVE_TOKEN',token: existingToken})
    }, 1000);
   
  }, [])


  if (loginState.isLoading){
    return(
      <View style = {{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size='large'/>
      </View>
    )
  }

  return (
    <AuthContext.Provider value = {authContext}>
    <NavigationContainer>
      {loginState.userToken == null ? 
      <MyAuthStack /> :
          <MyTabs/> 
          
      }
     
     
    </NavigationContainer>
    </AuthContext.Provider>
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