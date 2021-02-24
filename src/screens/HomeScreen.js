import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, Image } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { Card, Text, TopNavigationAction, Button, Divider, Icon, Layout, TopNavigation, useTheme } from '@ui-kitten/components';

export const HomeScreen = ({ navigation }) => {
  const colors = useTheme();

  const MenuIcon = (props) => (
    <Icon {...props} name='menu-outline' onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
  );

  const renderHomeAction = () => (
    <TopNavigationAction icon={MenuIcon}/>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        accessoryLeft={renderHomeAction}
        alignment='center'
        title='Meteorološka stanica Zavidovići'
        subtitle='msz.ba'
      />
      <Divider/>
      <Layout level='3' style={{flex: 1, alignItems: 'center' }}>
        <Text>Test page</Text>
      </Layout>
    </SafeAreaView>
  );
};