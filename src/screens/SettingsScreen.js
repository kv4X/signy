import React, {useState, useEffect} from 'react';
import { StatusBar, ImageBackground, SafeAreaView, View, Image, StyleSheet } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { Button, Text, TopNavigationAction, Divider, Icon, Layout, TopNavigation, useTheme, Menu, MenuItem } from '@ui-kitten/components';
import Svg, { SvgText, Path } from 'react-native-svg';

export const SettingsScreen = ({ navigation }) => {
  const colors = useTheme();

  const MenuIcon = (props) => (
    <Icon style={{height: 24, width: 24, tintColor: colors['background-basic-color-1']}} name='menu-outline' onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
  );

  const renderHomeAction = () => (
    <TopNavigationAction icon={MenuIcon}/>
  );

  const ForwardIcon = (props) => (
    <Icon {...props} name='arrow-ios-forward'/>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors['background-basic-color-1'] }}>
      <Svg width="500" height="150" xmlns="http://www.w3.org/2000/svg" viewBox="250 320 550 450">
        <Path fill={colors['color-primary-default']} fill-opacity="0.5" d="M463.158,0.547 C528.839,2.315 588.950,12.214 653.427,40.697 C717.061,68.326 785.061,114.539 846.834,169.015 C972.289,279.777 1064.908,415.922 1017.305,469.359 C997.219,500.074 951.351,514.229 903.358,533.127 C854.559,551.158 803.634,573.933 754.757,601.879 C656.754,656.860 565.351,732.675 448.402,748.791 C333.158,766.828 218.637,725.566 135.519,656.965 C51.993,587.778 -0.130,491.251 -0.011,385.187 C-0.930,171.842 209.381,2.560 463.158,0.547"/>
      </Svg>
      <TopNavigation
        accessoryLeft={renderHomeAction}
        alignment='start'
        title={props => <Text style={{color: colors['background-basic-color-1'], textTransform: "uppercase"}}>Settings</Text>}
        style={{ position: 'absolute', backgroundColor: 'transparent', textTransform: 'uppercase' }}
      />
      <Layout style={{flex: 1, marginTop: 20}}>
        <View style={{height: 30, flexDirection: "row", marginLeft: 5}}>
          <Icon style={{height: 24, width: 24, tintColor: colors['background-alternative-color-1']}} name='person-outline' />
          <Text style={{marginTop: 5}}>
            Account
          </Text>
        </View>
        <Divider/>
        <Menu style={{backgroundColor: colors['background-basic-color-1']}}>
          <MenuItem
            title='Edit profile'
            accessoryRight={ForwardIcon}
            onPress={() => navigation.navigate("ChangePassword")}
          />
          <MenuItem
            title='Change password'
            accessoryRight={ForwardIcon}
            onPress={() => navigation.navigate("ChangePassword")}
          />
        </Menu>
      </Layout>
      <Layout style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
        <Svg width="400" height="300" xmlns="http://www.w3.org/2000/svg" viewBox="-120 -30 600 400">
          <Path fill={colors['color-primary-default']} fill-opacity="1" d="M778.685,703.473 C715.236,720.422 655.671,729.413 584.942,718.991 C515.199,709.108 433.568,678.382 346.628,624.731 C259.212,571.613 166.432,493.363 98.081,420.943 C30.038,348.699 -13.575,282.285 4.462,256.890 C15.009,224.985 70.261,222.142 123.930,214.694 C179.012,208.514 233.470,199.059 277.434,185.815 C320.966,172.582 356.545,157.144 378.142,141.619 C400.302,125.771 408.481,109.836 410.212,88.170 C413.031,67.288 414.032,41.034 451.005,22.995 C485.853,4.814 556.673,-5.151 650.047,3.274 C742.143,10.803 851.192,35.504 934.643,71.022 C1019.557,106.548 1078.873,152.892 1105.290,203.875 C1132.351,255.409 1131.782,307.446 1120.863,358.112 C1109.324,408.740 1087.434,457.997 1057.512,503.098 C1027.435,548.203 989.334,589.152 941.882,623.247 C894.746,657.386 838.258,684.670 778.685,703.473"/>
        </Svg>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 192,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});