import React, { useContext, useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTheme, Toggle, Divider, Drawer, DrawerItem, Layout, Text, IndexPath } from '@ui-kitten/components';
import { HomeScreen } from '../screens/HomeScreen';
const { Navigator, Screen } = createDrawerNavigator();
import { ThemeProvider, ThemeContext } from '../providers/ThemeProvider';
import { LearningSectionScreen } from '../screens/LearningSectionScreen';
import { LetterScreen } from '../screens/LetterScreen';
import { SettingsScreen } from '../screens/SettingsScreen';

const renderHeader = () => (
    <Layout style={styles.header} level='2'>
      <View style={styles.profileContainer}>
        <Image
          style={{resizeMode: 'stretch', width: 100, height: 100}}
          source={{uri: 'https://i.imgur.com/ZljNPkv.png'}}
        />
      </View>
    </Layout>
);

const renderFooter = (props) => {
  const colors = useTheme();

  const [activeChecked, setActiveChecked] = React.useState(false);
  const { theme, setTheme } = React.useContext(ThemeContext);

  const onActiveCheckedChange = (isChecked) => {
    setActiveChecked(isChecked);
    setTheme(isChecked);
  };
  return (
      <Layout style={[styles.footer]} level='2'>
        <Toggle
          checked={activeChecked}
          onChange={onActiveCheckedChange}
        >
          Dark theme
        </Toggle>
      </Layout>
  );
}

const DrawerContent = ({ navigation, state }) => (
  <Drawer
    selectedIndex={new IndexPath(state.index)}
    onSelect={index => navigation.navigate(state.routeNames[index.row])}
    header={renderHeader}
    footer={renderFooter}
    >
    <DrawerItem title='Home' />
    <DrawerItem title='Learning Section' />
    <DrawerItem title='Letter Section' />
    <DrawerItem title='Settings' />
  </Drawer>
);

export const DrawerNavigator = () => (
  <Navigator drawerContent={props => <DrawerContent {...props}/>}>
    <Screen name='Home' component={HomeScreen}/>
    <Screen name='Learning Section' component={LearningSectionScreen}/>
    <Screen name='Letter Section' component={LetterScreen}/>
    <Screen name='Settings' component={SettingsScreen}/>
  </Navigator>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    height: 128,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    height: 50,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileName: {
    marginHorizontal: 16,
  },
});