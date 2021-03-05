import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerNavigator } from './Drawer';
import { SigninScreen } from '../screens/auth/SigninScreen';
import { SignUpScreen } from '../screens/auth/SignUpScreen';
import { ChangePasswordScreen } from '../screens/ChangePasswordScreen';
import { SpeechToTextScreen } from '../screens/SpeechToTextScreen';
import { ChangeProfileScreen } from '../screens/ChangeProfileScreen';
import { AuthLoadingScreen } from '../screens/auth/AuthLoadingScreen';
const { Navigator, Screen } = createStackNavigator();
import AuthProvider from "../providers/AuthProvider";
import { useAuth } from "../providers/AuthProvider";

export const MainNavigator = () => (
  <Navigator headerMode='none' initialRouteName="Home">
    {/*<Screen name='SignIn' component={DrawerNavigator}/>*/}
    <Screen name='Home' component={DrawerNavigator}/>
    <Screen name='LearningSectionScreen' component={DrawerNavigator}/>
    <Screen name="SpeechtoTextScreen" component={DrawerNavigator}/>
    <Screen name="UpdateProfile" component={ChangeProfileScreen}/>
    <Screen name="ChangePassword" component={ChangePasswordScreen}/>
    <Screen name="Settings" component={DrawerNavigator}/>
  </Navigator>
);

export const AuthNavigator = () => (
  <Navigator headerMode='none' initialRouteName="Loading">
    {/*<Screen name='SignIn' component={DrawerNavigator}/>*/}
    <Screen name='SignIn' component={SigninScreen}/>
    <Screen name='SignUp' component={SignUpScreen}/>
    <Screen name='Loading' component={AuthLoadingScreen}/>
  </Navigator>
);

export const AppNavigator = () => {
  const {state, handleLogout} = useAuth();
  const user = state;
  console.log(user);
  return (
    <NavigationContainer>
      {user.isLoggedIn ? <MainNavigator/>: <AuthNavigator/>}
    </NavigationContainer>
  );
};