import React, {useState, useEffect} from 'react';
import { StatusBar, ImageBackground, SafeAreaView, View, Image, StyleSheet } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { Card, Text, TopNavigationAction, Button, Divider, Icon, Layout, TopNavigation, useTheme } from '@ui-kitten/components';
import Svg, { SvgText, Path } from 'react-native-svg';
import { useAuth } from "../providers/AuthProvider";

export const HomeScreen = ({ navigation }) => {
  const colors = useTheme();
  const {state, handleLogout} = useAuth();
  
  const MenuIcon = (props) => (
    <Icon style={{height: 24, width: 24, tintColor: colors['background-basic-color-1']}} name='menu-outline' onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
  );

  const renderHomeAction = () => (
    <TopNavigationAction icon={MenuIcon}/>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Svg width="500" height="150" xmlns="http://www.w3.org/2000/svg" viewBox="250 320 550 450">
        <Path fill={colors['color-primary-default']} fill-opacity="0.5" d="M463.158,0.547 C528.839,2.315 588.950,12.214 653.427,40.697 C717.061,68.326 785.061,114.539 846.834,169.015 C972.289,279.777 1064.908,415.922 1017.305,469.359 C997.219,500.074 951.351,514.229 903.358,533.127 C854.559,551.158 803.634,573.933 754.757,601.879 C656.754,656.860 565.351,732.675 448.402,748.791 C333.158,766.828 218.637,725.566 135.519,656.965 C51.993,587.778 -0.130,491.251 -0.011,385.187 C-0.930,171.842 209.381,2.560 463.158,0.547"/>
      </Svg>
      <TopNavigation
        accessoryLeft={renderHomeAction}
        alignment='start'
        title={props => <Text style={{color: colors['background-basic-color-1']}}>HOME</Text>}
        style={{ position: 'absolute', backgroundColor: 'transparent', textTransform: 'uppercase' }}
      />
      <Divider/>
      <Layout level='3' style={{flex: 1, alignItems: 'center' }}>
        <Text>Pozdrav, {state.user.email}</Text>
        <Button style={{ marginTop: 10, width: '100%'}} status='primary' onPress={handleLogout}>
          Logout test
        </Button>
      </Layout>
    </SafeAreaView>
  );
};
