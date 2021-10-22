/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import * as React from 'react';
import AuthNavigation from './routes/AuthNavigation';
import {extendTheme, NativeBaseProvider} from 'native-base';

// const newColorTheme = {
//   brand: {
//     900: '#8287af',
//     800: '#7c83db',
//     700: '#b3bef6',
//   },
// };
// const theme = extendTheme({colors: newColorTheme});

const App = () => {
  return (
    <NativeBaseProvider>
      <AuthNavigation />
    </NativeBaseProvider>
  );
};

export default App;
