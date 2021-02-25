import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerNavigator } from './Drawer';
import { SigninScreen } from '../screens/auth/SigninScreen';
import { SignUpScreen } from '../screens/auth/SignUpScreen';

const { Navigator, Screen } = createStackNavigator();

const MainNavigator = () => (
  <Navigator headerMode='none'>
    {/*<Screen name='SignIn' component={DrawerNavigator}/>*/}
    <Screen name='Home' component={DrawerNavigator}/>
    <Screen name='LearningSectionScreen' component={DrawerNavigator}/>
  </Navigator>
);

const AuthNavigator = () => (
  <Navigator headerMode='none'>
    {/*<Screen name='SignIn' component={DrawerNavigator}/>*/}
    <Screen name='SignIn' component={SigninScreen}/>
    <Screen name='SignUp' component={SignUpScreen}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <MainNavigator/>
  </NavigationContainer>
);
