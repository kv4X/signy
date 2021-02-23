import React, { useContext, useState } from 'react';
import {AppRegistry} from 'react-native';
import { NavigationContainer, DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import { DefaultTheme, Provider as PaperProvider, DefaultTheme as PaperDefaultTheme, DarkTheme as PaperDarkTheme } from 'react-native-paper';
import App from './App';
import {name as appName} from './app.json';
import { ThemeProvider, ThemeContext } from './src/providers/ThemeProvider';
const CustomDefaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    background: '#ffffff',
    text: '#22252a',
    primary: '#000000',
    nav: '#f8fcfd',
    navText: '#000000',
    navIcon: '#000000',
  } 
}

const CustomDarkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
    background: '#141414',
    primary: '#ffffff',
    text: '#fff',
    nav: '#1f1f1f',
    navText: '#ffffff',
    navIcon: '#ffffff',
  }
}


export default function Main() {
  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
      {({theme, setTheme}) => (
        <PaperProvider theme={theme ? CustomDarkTheme: CustomDefaultTheme}>
          <NavigationContainer theme={theme ? CustomDarkTheme: CustomDefaultTheme}>
            <App  />
          </NavigationContainer>
        </PaperProvider>
      )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
}
AppRegistry.registerComponent(appName, () => Main);
