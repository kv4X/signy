import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './src/navigation/Navigation';
import { ThemeProvider, ThemeContext } from './src/providers/ThemeProvider';

export default (props) => (
  <>
    <IconRegistry icons={EvaIconsPack}/>
    <ThemeProvider>
      <ThemeContext.Consumer>
      {({theme, setTheme}) => (
        <ApplicationProvider {...eva} theme={theme? eva.dark: eva.light}>
          <AppNavigator/>
        </ApplicationProvider>
      )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  </>
);