import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './src/navigation/Navigation';
import { ThemeProvider, ThemeContext } from './src/providers/ThemeProvider';
import AuthProvider from "./src/providers/AuthProvider";

export default (props) => (
  <>
    <IconRegistry icons={EvaIconsPack}/>
    <ThemeProvider>
      <ThemeContext.Consumer>
      {({theme, setTheme}) => (
        <ApplicationProvider {...eva} theme={theme? eva.dark: eva.light}>
          <AuthProvider>
            <AppNavigator/>
          </AuthProvider>
        </ApplicationProvider>
      )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  </>
);
//https://betterprogramming.pub/how-to-add-authentication-to-your-react-native-app-with-react-hooks-and-react-context-api-46f57aedbbd