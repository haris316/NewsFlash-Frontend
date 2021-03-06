import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './Stacks/tabs';
import MyAuthStack from './Stacks/AuthStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, View } from 'react-native';
import { AuthContext } from './components/context';
import TopBarNavigator from './Tabs/HomeTabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LandingScreen from './components/LandingScreen/LandingScreen';
import 'react-native-gesture-handler'

export default function App() {
  // const[isLoading, setIsLoading] = React.useState(true);
  const [existingToken, setToken] = React.useState(null);
  const [showLanding, setShowLanding] = React.useState(true);

  React.useEffect(() => {
    const timeOutId = setTimeout(() => {
      setShowLanding(false)
    }, 5000);
    return () => clearTimeout(timeOutId);
  }, [])

  initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false
        };
      case 'REGISTER':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: (token) => {
      setToken(token);
      dispatch({ type: 'LOGIN', token: token });
    },
    signOut: () => {
      dispatch({ type: 'LOGOUT' })
    },
    signUp: () => {
    },
  }), []);

  useEffect(() => {
    setTimeout(async () => {
      await dispatch({ type: 'RETRIEVE_TOKEN', token: AsyncStorage.getItem('token') })
    }, 1000);

  }, [])


  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    )
  }

  if (showLanding) return <LandingScreen />
  else return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken === null ?
          <MyAuthStack /> :
          <MyTabs />
        }
      </NavigationContainer>
    </AuthContext.Provider>
  );
}





